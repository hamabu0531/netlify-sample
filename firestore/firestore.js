// firestore/firestore.js
const firebase = require('firebase');
require('firebase/firestore');

// Firebaseの初期化
const firebaseConfig = {
    apiKey: "AIzaSyBjEVHprD1IObmXnSrtTZITbEwbsWjL5o4",
    authDomain: "dbsample-59cac.firebaseapp.com",
    projectId: "dbsample-59cac",
    storageBucket: "dbsample-59cac.firebasestorage.app",
    messagingSenderId: "517487585943",
    appId: "1:517487585943:web:90f443a9adcaa43e5b97d2"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

module.exports = db;
