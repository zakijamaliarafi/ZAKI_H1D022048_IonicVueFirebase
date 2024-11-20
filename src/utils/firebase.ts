// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCPFBzV5g4FemgnrWxUyfJ00TGtqOUPaGg",
    authDomain: "vue-firebase-947c9.firebaseapp.com",
    projectId: "vue-firebase-947c9",
    storageBucket: "vue-firebase-947c9.firebasestorage.app",
    messagingSenderId: "190869532365",
    appId: "1:190869532365:web:12d5f5d55d2c91fbc74384"
};
  

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };