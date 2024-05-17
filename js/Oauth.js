// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, GoogleAuthProvider, signInWithPopup, signOut as firebaseSignOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuP-ayI_wi_gnGCpW9h2E0W6XLZ7VZxFo",
  authDomain: "telehealthng.firebaseapp.com",
  projectId: "telehealthng",
  storageBucket: "telehealthng.appspot.com",
  messagingSenderId: "800458535904",
  appId: "1:800458535904:web:ae9af5c025dcf6d27d3185"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();

const signInButton = document.getElementById("signIn");
const signOutButton = document.querySelector("#signOut");
const message = document.getElementById("message");

signOutButton.style.display = "none";


const userSignIn = async() => {
    signInWithPopup(auth, provider)
    .then ((result) => {
        const user = result.user
        console.log(user);
    }).catch((error) => {
        const errorCode = error.code;
        const arrowMessage = error.message;
    })
}

const userSignOut = async() => {
    signOut(auth).then(() => {
        alert("Signed Out!")
    }).catch((error) => {})
}

onAuthStateChanged(auth, (user) => {
    if(user) {
        alert("Signed In!");
    }
    else {

    }
})

signInButton.addEventListener('click', userSignIn);
signOutButton.addEventListener('click', userSignOut);
