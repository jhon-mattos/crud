import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDUifd3o5tcdn6LVtSn77kCFQNvAZ7rqJo",
  authDomain: "crud-989a9.firebaseapp.com",
  projectId: "crud-989a9",
  storageBucket: "crud-989a9.appspot.com",
  messagingSenderId: "320928981092",
  appId: "1:320928981092:web:baa0bebddeeee0e6de7f71",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
