// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDKkVcdgX-qYPZf9ZVIDaOQ9NENfdPkurQ",
    authDomain: "genius-car-4cea8.firebaseapp.com",
    projectId: "genius-car-4cea8",
    storageBucket: "genius-car-4cea8.appspot.com",
    messagingSenderId: "128852768433",
    appId: "1:128852768433:web:f75c79b4c48c0531f59490"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;