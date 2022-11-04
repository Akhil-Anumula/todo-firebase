// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLuLgVj0cWgQfqs0eL7OJ0Cxjvkw0dSGo",
  authDomain: "todo-app-5dda6.firebaseapp.com",
  projectId: "todo-app-5dda6",
  storageBucket: "todo-app-5dda6.appspot.com",
  messagingSenderId: "516937513465",
  appId: "1:516937513465:web:c52fdf6a844d69afdda528"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);