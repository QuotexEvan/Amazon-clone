import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA4BgD-WGkczHHbUNfqpQwJUiAKsrTIQlY",
    authDomain: "clone-c1a6b.firebaseapp.com",
    projectId: "clone-c1a6b",
    storageBucket: "clone-c1a6b.appspot.com",
    messagingSenderId: "248377926647",
    appId: "1:248377926647:web:e2416688143b954d8604f2",
    measurementId: "G-7G1F0ET7Q0"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };