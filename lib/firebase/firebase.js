// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAR0cCHhHcAwccNa0Vt2916l-U_Yubr-6Y",
  authDomain: "allernote.firebaseapp.com",
  projectId: "allernote",
  storageBucket: "allernote.firebasestorage.app",
  messagingSenderId: "383325952430",
  appId: "1:383325952430:web:86fb2f163884ed995dd03f",
  measurementId: "G-5K0JT18KRQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize firestore
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export { db };
