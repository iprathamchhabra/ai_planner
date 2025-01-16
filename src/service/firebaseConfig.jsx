// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArXPe3gooyKCY42nUyY-2aHYz1dEZKheU",
  authDomain: "travelplanner-710c1.firebaseapp.com",
  projectId: "travelplanner-710c1",
  storageBucket: "travelplanner-710c1.firebasestorage.app",
  messagingSenderId: "864319130619",
  appId: "1:864319130619:web:4279fc850c70421925195e",
  measurementId: "G-ZYNPR24PFR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
//const analytics = getAnalytics(app);