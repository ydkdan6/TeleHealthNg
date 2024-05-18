// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, signOut, getRedirectResult, signInWithRedirect, GoogleAuthProvider, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

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

document.addEventListener('DOMContentLoaded', () => {
    const signInButton = document.getElementById('signIn');
    const signOutButton = document.getElementById('signOut');
    const userInfo = document.getElementById('userInfo');
    const userEmail = document.getElementById('userEmail');

    signInButton.addEventListener('click', async () => {
        try {
            await signInWithRedirect(auth, provider);
        } catch (error) {
            console.error('Error signing in:', error);
            alert(`Error signing in: ${error.message}`);
        }
    });

    signOutButton.addEventListener('click', async () => {
        try {
            await signOut(auth);
            alert('Signed Out!');
            signInButton.style.display = 'block';
            signOutButton.style.display = 'none';
            userInfo.style.display = 'none';
        } catch (error) {
            console.error('Error signing out:', error);
            alert(`Error signing out: ${error.message}`);
        }
    });

    // Handle the redirect result
    getRedirectResult(auth)
        .then((result) => {
            if (result.user) {
                console.log('Redirect result user:', result.user);
                alert(`Signed in as ${result.user.email}`);
                window.location.href = "onscreen.html"; // Redirect to the welcome page
            }
        })
        .catch((error) => {
            console.error('Error getting redirect result:', error);
        });

    // Automatically hide or show buttons based on authentication state
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log('User is signed in:', user);
            userEmail.textContent = user.email;
            signInButton.style.display = 'none';
            signOutButton.style.display = 'block';
            userInfo.style.display = 'block';
        } else {
            console.log('No user is signed in.');
            signInButton.style.display = 'block';
            signOutButton.style.display = 'none';
        }
    });
});
