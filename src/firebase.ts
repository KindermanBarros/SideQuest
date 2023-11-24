// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuQFkgM--ppyCNg6y17Gj_veB6d6Dujyc",
  authDomain: "sidequest-hw.firebaseapp.com",
  projectId: "sidequest-hw",
  storageBucket: "sidequest-hw.appspot.com",
  messagingSenderId: "171939413861",
  appId: "1:171939413861:web:139f86827a434a80c1eb8c",
  measurementId: "G-GYXYHLCDKL",
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
export const googleAuthProvider = new GoogleAuthProvider();
