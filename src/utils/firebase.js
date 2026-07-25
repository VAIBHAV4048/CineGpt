// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBl5uuEz4VTL5-2JH_ETkntFmhn0eb3Cvc",
  authDomain: "cine--gpt.firebaseapp.com",
  projectId: "cine--gpt",
  storageBucket: "cine--gpt.firebasestorage.app",
  messagingSenderId: "1037525004896",
  appId: "1:1037525004896:web:572e0e0bc83999da5a4905",
  measurementId: "G-24ZT4RNF29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();