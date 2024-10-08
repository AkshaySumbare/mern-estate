// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-2f756.firebaseapp.com",
  projectId: "mern-estate-2f756",
  storageBucket: "mern-estate-2f756.appspot.com",
  messagingSenderId: "515374848574",
  appId: "1:515374848574:web:ede125e26d9143f7608f6f"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);