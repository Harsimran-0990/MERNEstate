// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-98120.firebaseapp.com",
  projectId: "real-estate-98120",
  storageBucket: "real-estate-98120.appspot.com",
  messagingSenderId: "787403176329",
  appId: "1:787403176329:web:bcbb76f278e0ca95180958"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);