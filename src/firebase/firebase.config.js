// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5AtR0nAqdLGLo8BTj9vKm-zIu6p17zRI",
  authDomain: "weeding-event-management-a96c0.firebaseapp.com",
  projectId: "weeding-event-management-a96c0",
  storageBucket: "weeding-event-management-a96c0.appspot.com",
  messagingSenderId: "425503549426",
  appId: "1:425503549426:web:d288f870343df58816ad6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;