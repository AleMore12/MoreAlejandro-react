import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZC675FQJqb9QEflmaHCoQCktcfJR82tc",
  authDomain: "e-commerce-react-coder-8f14a.firebaseapp.com",
  projectId: "e-commerce-react-coder-8f14a",
  storageBucket: "e-commerce-react-coder-8f14a.appspot.com",
  messagingSenderId: "205604776099",
  appId: "1:205604776099:web:2dd106b2f6701342773716"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

