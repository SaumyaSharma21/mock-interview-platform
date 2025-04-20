import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3hh7xtahcU719oIq-EEJGsqR_FqUjl3c",
  authDomain: "prepai-efd3c.firebaseapp.com",
  projectId: "prepai-efd3c",
  storageBucket: "prepai-efd3c.firebasestorage.app",
  messagingSenderId: "1039677947623",
  appId: "1:1039677947623:web:934f6a1b295b6e31136c42",
  measurementId: "G-NSDBX7S247"
};


const app = !getApps.length? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);