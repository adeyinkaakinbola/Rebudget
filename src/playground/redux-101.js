import { createStore } from "redux";

const defaultState = { count: 0 };

const counterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "INCREMENT":
      const incrementBy = action.incrementBy ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
      };

    case "DECREMENT":
      const decrementBy = action.decrementBy ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
      };
    case "SET":
      return {
        count: action.count
      };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

store.subscribe(() => {
  //listens for the change of the state
  console.log(store.getState());
});
const incrementCount = (payload = {}) => ({
  type: "INCREMENT",
  incrementBy: payload.incrementBy ? payload.incrementBy : 1
});
const decrementCount = (payload = {}) => ({
  type: "DECREMENT",
  decrementBy: payload.decrementBy ? payload.decrementBy : 1
});

store.dispatch(incrementCount());
store.dispatch(decrementCount());
store.dispatch({
  type: "SET",
  count: 250
});
const data2 = { decrementBy: 5 };
store.dispatch(decrementCount(data2));
const data1 = { incrementBy: 55 };
store.dispatch(incrementCount(data1));
