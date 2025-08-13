// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCB_ldvHJpDsKQoYm2eB_wtY0-gsk3fkYQ",
  authDomain: "cashflow-app-b64d8.firebaseapp.com",
  projectId: "cashflow-app-b64d8",
  storageBucket: "cashflow-app-b64d8.firebasestorage.app",
  messagingSenderId: "214147949609",
  appId: "1:214147949609:web:af02daa9690e74a172a838",
  measurementId: "G-6L0V3N85VV"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const storage = getStorage(app);
const firestore = getFirestore(app);
const database = getDatabase(app);

export { app, database, firestore, storage };

