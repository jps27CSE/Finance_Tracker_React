import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZ50sO5Eu4cT5AjsZcEbEkjoKjmJFgnPo",
  authDomain: "finance-tracker-react-57036.firebaseapp.com",
  projectId: "finance-tracker-react-57036",
  storageBucket: "finance-tracker-react-57036.appspot.com",
  messagingSenderId: "901363114040",
  appId: "1:901363114040:web:509335b8ee6e633ed7c6cd",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
