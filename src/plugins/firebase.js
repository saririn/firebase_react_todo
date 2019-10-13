import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDQkm8mkAYb2bAEEN0al-1ImI0hzEbIKhQ",
    authDomain: "react-nagaoka-20191013.firebaseapp.com",
    databaseURL: "https://react-nagaoka-20191013.firebaseio.com",
    projectId: "react-nagaoka-20191013",
    storageBucket: "react-nagaoka-20191013.appspot.com",
    messagingSenderId: "879652289929",
    appId: "1:879652289929:web:e4e9bc3bd65163bc4bb558",
    measurementId: "G-J2B4BSSHTD"
};
const firebaseApp = firebase.initializeApp(config);
export const firestore = firebaseApp.firestore();
