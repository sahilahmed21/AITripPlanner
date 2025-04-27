// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsjIvmmU5yzG-0487Dt7PSOnHwSwedmls",
  authDomain: "ai-trip-planner-aae37.firebaseapp.com",
  projectId: "ai-trip-planner-aae37",
  storageBucket: "ai-trip-planner-aae37.firebasestorage.app",
  messagingSenderId: "584476295659",
  appId: "1:584476295659:web:2da14058430bc370e559ae",
  measurementId: "G-7W862XDYFF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
