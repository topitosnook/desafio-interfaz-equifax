import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWq_8sMilfdam0yMC6ZVFSacKK30WGGmA",
  authDomain: "interfaz-kinglovelace.firebaseapp.com",
  projectId: "interfaz-kinglovelace",
  storageBucket: "interfaz-kinglovelace.appspot.com",
  messagingSenderId: "82789922778",
  appId: "1:82789922778:web:e1451b6a1191e8f117b2e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
