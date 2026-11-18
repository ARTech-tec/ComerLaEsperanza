const firebaseConfig = {
    apiKey: "AIzaSyC6p-q8X7s56jTRqXCcKdayZZ8iqoA4ELE",
    authDomain: "comerlaesperanza.firebaseapp.com",
    projectId: "comerlaesperanza",
    storageBucket: "comerlaesperanza.appspot.com",
    messagingSenderId: "265475520886",
    appId: "1:265475520886:web:45739e3c393028a5c7a257"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
