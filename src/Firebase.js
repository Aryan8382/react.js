// Firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCzgaY7BHBVvWdGozI4RvEWM5lVcNVdRto",
  authDomain: "react-project-8203.firebaseapp.com",
  databaseURL: "https://react-project-8203-default-rtdb.firebaseio.com",
  projectId: "react-project-8203",
  storageBucket: "react-project-8203.appspot.com",
  messagingSenderId: "973434140917",
  appId: "1:973434140917:web:fbafd8c319ac485e232dbc",
  measurementId: "G-P5XF4B4WFW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app };   
