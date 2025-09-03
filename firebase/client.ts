// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAbStTbhK69iAg-QDhXV-YhM24hhNeR3w",
  authDomain: "interviewprep-1d604.firebaseapp.com",
  projectId: "interviewprep-1d604",
  storageBucket: "interviewprep-1d604.firebasestorage.app",
  messagingSenderId: "710136221520",
  appId: "1:710136221520:web:fcef751178c954f9e46655",
  measurementId: "G-LPVS5PMBFP"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);