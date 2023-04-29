// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl-Ec3KnE0nomNHkguzSuJfS_aOq0KqdU",
  authDomain: "ema-john-pass-authentication.firebaseapp.com",
  projectId: "ema-john-pass-authentication",
  storageBucket: "ema-john-pass-authentication.appspot.com",
  messagingSenderId: "207540911982",
  appId: "1:207540911982:web:03c79eb7862adc5aa90b7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;