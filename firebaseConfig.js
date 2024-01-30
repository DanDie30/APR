// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const { initializeApp } = require('firebase-admin/app');

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4ARgc698R3AV2Zesd0O4gRvJCZewiSjA",
  authDomain: "aprproject-96f12.firebaseapp.com",
  projectId: "aprproject-96f12",
  storageBucket: "aprproject-96f12.appspot.com",
  messagingSenderId: "424218005819",
  appId: "1:424218005819:web:5f89de53d2075e12e5a71e",
  measurementId: "G-DF0B84XRBJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);