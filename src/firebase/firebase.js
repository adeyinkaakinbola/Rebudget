import * as firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyCgnZhZtq2vvWv3HQdtBXWwL25dFgwC8d8",
  authDomain: "budget-69d65.firebaseapp.com",
  databaseURL: "https://budget-69d65.firebaseio.com",
  projectId: "budget-69d65",
  storageBucket: "budget-69d65.appspot.com",
  messagingSenderId: "49622833661",
  appId: "1:49622833661:web:87e9b7f7f5cc39810ce194"
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
export { firebase, database as default };

// database
//   .ref()
//   .set({
//     name: "Wisdom Nyirenda",
//     location: {
//       city: "Kisumu",
//       country: "Kenya"
//     }
//   })
//   .then(() => {
//     console.log("Data is saved");
//   })
//   .catch(e => {
//     console.log("Data failed to save", e);
//   });

// database.ref().update({
//   "location/city": "Mombasa"
// });
