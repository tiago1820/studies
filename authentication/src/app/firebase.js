// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDNlaL0Uj3J4_vkHvqKIpzfd2joOdqEsnE",
    authDomain: "fir-auth-app-f05c9.firebaseapp.com",
    projectId: "fir-auth-app-f05c9",
    storageBucket: "fir-auth-app-f05c9.appspot.com",
    messagingSenderId: "133353958525",
    appId: "1:133353958525:web:1d87c6a3bffb95073ed514"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
