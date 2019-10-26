import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCIoIfKvIQ16fQ9n9ycvXb3P5mo2CFGk60",
    authDomain: "sarina-todo.firebaseapp.com",
    databaseURL: "https://sarina-todo.firebaseio.com",
    projectId: "sarina-todo",
    storageBucket: "sarina-todo.appspot.com",
    messagingSenderId: "247938679940",
    appId: "1:247938679940:web:405aaa0e92fca58109eed1",
    measurementId: "G-QYD6QRKBS9"
};
const firebaseApp = firebase.initializeApp(config);
export const firestore = firebaseApp.firestore();
