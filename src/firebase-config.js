// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwwjK8nSa5tlkFA138kL-LumoNfaZl2RY",
  authDomain: "roomchat-bf9de.firebaseapp.com",
  projectId: "roomchat-bf9de",
  storageBucket: "roomchat-bf9de.appspot.com",
  messagingSenderId: "869006693054",
  appId: "1:869006693054:web:45f43e0fa02010067284ef",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
