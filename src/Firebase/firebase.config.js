// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAi5Eswg0HIas0kPQqGPOSnvqB4kimdrOw",
  authDomain: "doctor-test-bb057.firebaseapp.com",
  projectId: "doctor-test-bb057",
  storageBucket: "doctor-test-bb057.appspot.com",
  messagingSenderId: "1021748444113",
  appId: "1:1021748444113:web:b7e98cd99e562ab7403ef0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;