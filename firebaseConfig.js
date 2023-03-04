import { initializeApp } from 'firebase/app';

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration info
const firebaseConfig = {
    apiKey: "AIzaSyCwLZS9BjDvsH-7-56WfSH8zWYAEOvpyWo",
    authDomain: "projdev-car-app.firebaseapp.com",
    projectId: "projdev-car-app",
    storageBucket: "projdev-car-app.appspot.com",
    messagingSenderId: "726254576209",
    appId: "1:726254576209:web:ace45a0a3a9c2ccbd38e70"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };