import { addExpense, removeExpense, editExpense } from "../../actions/expenses";
const expenseData = {
  id: "123abcd",
  description: "Rent",
  amount: 54500,
  createdAt: 60000,
  note: "payement for January"
};
test("should add expense action object with provided values", () => {
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenseData
  });
});
test("should setup remove expense action object", () => {
  const action = removeExpense(expenseData);
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: expenseData.id
  });
});
test("should setup remove expense action object", () => {
  const action = editExpense(expenseData.id, { note: "trip to Malibu" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: expenseData.id,
    updates: {
      note: "trip to Malibu"
    }
  });
});
