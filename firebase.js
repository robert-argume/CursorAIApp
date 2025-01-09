// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgqtTwVNji0CUc7UdnT17GX0Do7fZxX0w",
  authDomain: "cursorai-7c188.firebaseapp.com",
  projectId: "cursorai-7c188",
  storageBucket: "cursorai-7c188.firebasestorage.app",
  messagingSenderId: "714422958455",
  appId: "1:714422958455:web:0a0dbd33752cba0e690972",
  measurementId: "G-TBMBNMFJ8N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);