import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAGc2TQomUQ5W-boFqnvIwNcdxipnh0zaw",
  authDomain: "by-sandra.firebaseapp.com",
  databaseURL: "https://by-sandra.firebaseio.com",
  projectId: "by-sandra",
  storageBucket: "by-sandra.appspot.com",
  messagingSenderId: "556082223811",
  appId: "1:556082223811:web:6e60c2addae423ad2d2076",
  measurementId: "G-TVQ1KGBYPL",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
