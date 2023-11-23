// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCuQFkgM--ppyCNg6y17Gj_veB6d6Dujyc",
  authDomain: "sidequest-hw.firebaseapp.com",
  projectId: "sidequest-hw",
  storageBucket: "sidequest-hw.appspot.com",
  messagingSenderId: "171939413861",
  appId: "1:171939413861:web:139f86827a434a80c1eb8c",
  measurementId: "G-GYXYHLCDKL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 