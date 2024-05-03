// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-real-estate-4782e.firebaseapp.com",
  projectId: "mern-real-estate-4782e",
  storageBucket: "mern-real-estate-4782e.appspot.com",
  messagingSenderId: "848978055547",
  appId: "1:848978055547:web:c61376ab82ac4386336dde"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);