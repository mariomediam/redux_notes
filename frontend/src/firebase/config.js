// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbDCZ0aenQGWSyiQUcOEcEp4ao0RG7v8I",
  authDomain: "react-cursos-37e0b.firebaseapp.com",
  projectId: "react-cursos-37e0b",
  storageBucket: "react-cursos-37e0b.appspot.com",
  messagingSenderId: "311091212261",
  appId: "1:311091212261:web:47f547e3ca32486e2bc90c"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );