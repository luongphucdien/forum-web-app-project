// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqA3N95GrXi1OdH4voARPJVNfnXIW9toM",
  authDomain: "registration-305d9.firebaseapp.com",
  databaseURL: "https://registration-305d9-default-rtdb.firebaseio.com",
  projectId: "registration-305d9",
  storageBucket: "registration-305d9.appspot.com",
  messagingSenderId: "1074679285470",
  appId: "1:1074679285470:web:6a64e88a7b61cf0694644f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);