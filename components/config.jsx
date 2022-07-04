// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // J'importe la base de donnée firestore

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0u4SheQ0uBuJdKga1B5jDx4EFCRx6beA",
  authDomain: "firestore-crud-d534c.firebaseapp.com",
  projectId: "firestore-crud-d534c",
  storageBucket: "firestore-crud-d534c.appspot.com",
  messagingSenderId: "784214134855",
  appId: "1:784214134855:web:5728726246391aa2016162"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//intilialize firebase
export const db = getFirestore(app);