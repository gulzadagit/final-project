import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTBLOLqWQ0muLVkXYSk-Gn-KAoUcSgssk",
  authDomain: "finalproject-da2dd.firebaseapp.com",
  projectId: "finalproject-da2dd",
  storageBucket: "finalproject-da2dd.appspot.com",
  messagingSenderId: "937751458138",
  appId: "1:937751458138:web:55dbba8d762cc974ecc363",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
