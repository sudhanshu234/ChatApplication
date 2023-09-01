import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBazvd6Eud4y3fQNuq8LuB7INaXOCDjKic",
  authDomain: "chat-application-80c6c.firebaseapp.com",
  projectId: "chat-application-80c6c",
  storageBucket: "chat-application-80c6c.appspot.com",
  messagingSenderId: "147168802708",
  appId: "1:147168802708:web:a0b9d4c4725778e8934181"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
