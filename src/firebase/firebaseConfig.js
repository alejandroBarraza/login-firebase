// Import the functions you need from the SDKs you need
import 'firebase/firestore';
import 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyChUpvjCNNziMVnPWS6_GTZH0jYkTVXnpc',
    authDomain: 'react-login-869c4.firebaseapp.com',
    projectId: 'react-login-869c4',
    storageBucket: 'react-login-869c4.appspot.com',
    messagingSenderId: '598282371419',
    appId: '1:598282371419:web:f9d14e9f4cb2a475bf5a7e',
};

// Initialize Firebase

initializeApp(firebaseConfig);
const db = getFirestore();
const googleAuthProvider = new GoogleAuthProvider();
export { db, googleAuthProvider };
