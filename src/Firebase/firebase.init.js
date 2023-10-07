// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8CVxon3S5a97zltG0MAwYFZMTIzkIlJQ",
  authDomain: "social-event-ad1a0.firebaseapp.com",
  projectId: "social-event-ad1a0",
  storageBucket: "social-event-ad1a0.appspot.com",
  messagingSenderId: "71815712956",
  appId: "1:71815712956:web:b332026430b5dd81b800b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;