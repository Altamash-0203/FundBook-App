// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from  "firebase/auth"
import {getFirestore} from "firebase/firestore"
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtjTeYzPLPPq8B4qvyeB0PwLJcI1rYOYs",
  authDomain: "fundbook-app.firebaseapp.com",
  projectId: "fundbook-app",
  storageBucket: "fundbook-app.firebasestorage.app",
  messagingSenderId: "338059074373",
  appId: "1:338059074373:web:5dada262d271eef9c83c2c",
  measurementId: "G-Y7D1BHQ4HN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)
export const db=getFirestore(app)
export const data=getDatabase(app)
export const storage=getStorage(app)

