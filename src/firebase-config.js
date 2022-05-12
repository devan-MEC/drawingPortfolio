// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDY06Gp7-2OzkskbKCIUbFg1eSFxGdj5Ew",
  authDomain: "whackadoodle-b1a31.firebaseapp.com",
  projectId: "whackadoodle-b1a31",
  storageBucket: "whackadoodle-b1a31.appspot.com",
  messagingSenderId: "285376111157",
  appId: "1:285376111157:web:b1f4e888b75dbd9ec6c77c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
