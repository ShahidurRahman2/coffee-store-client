// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Initialize Firebase Authentication and get a reference to the service
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw4OeR_nA7K4GxlV3k0LLkpJwNmMzY_Zk",
  authDomain: "coffee-client-3cef4.firebaseapp.com",
  projectId: "coffee-client-3cef4",
  storageBucket: "coffee-client-3cef4.firebasestorage.app",
  messagingSenderId: "206101713405",
  appId: "1:206101713405:web:5d9275143fde2a0504c994"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export  const auth = getAuth(app);