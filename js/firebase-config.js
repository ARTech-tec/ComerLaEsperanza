     // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC6p-q8X7s56jTRqXCcKdayZZ8iqoA4ELE",
    authDomain: "comerlaesperanza.firebaseapp.com",
    projectId: "comerlaesperanza",
    storageBucket: "comerlaesperanza.firebasestorage.app",
    messagingSenderId: "265475520886",
    appId: "1:265475520886:web:45739e3c393028a5c7a257"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
    const db = firebase.firestore();
  