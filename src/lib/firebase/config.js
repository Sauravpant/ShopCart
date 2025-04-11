
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "ecommerce-1main.firebaseapp.com",
  projectId: "ecommerce-1main",
  storageBucket: "ecommerce-1main.firebasestorage.app",
  messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID_KEY,
  appId:import.meta.env.VITE_APPID_KEY,
  measurementId:import.meta.env.VITE_MEASUREMENTID_KEY
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app};