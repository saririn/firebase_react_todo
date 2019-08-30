import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBrr1IB42jCX8Net-ilvyZnEQ3fRJqQboA",
  authDomain: "fir-react-todo-92655.firebaseapp.com",
  databaseURL: "https://fir-react-todo-92655.firebaseio.com",
  projectId: "firebase-react-todo",
  storageBucket: "",
  messagingSenderId: "770187434735",
  appId: "1:770187434735:web:98a98a7929b85f6d"
};
const firebaseApp = firebase.initializeApp(config);
export const firestore = firebaseApp.firestore();
