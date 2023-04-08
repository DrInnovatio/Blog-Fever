import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDn3bfK-bfNUQP2AywO0YTMOtrwe4_pyt4",
  authDomain: "blog-fever-5b8ac.firebaseapp.com",
  projectId: "blog-fever-5b8ac",
  storageBucket: "blog-fever-5b8ac.appspot.com",
  messagingSenderId: "567666304531",
  appId: "1:567666304531:web:81bb507d9aeb47df5c81e6",
  measurementId: "G-H0ZZ6LQ2MC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const db = getFirestore(app);