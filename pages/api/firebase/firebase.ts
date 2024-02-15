import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDTR3LkBTtSuDyYkj2rZE8g-qVeW3ftgtk",
  authDomain: "nextjs-project-9a18d.firebaseapp.com",
  projectId: "nextjs-project-9a18d",
  storageBucket: "nextjs-project-9a18d.appspot.com",
  messagingSenderId: "559275539532",
  appId: "1:559275539532:web:b6bf843c5f3a83755f08e9",
  measurementId: "G-45K6JXK3C4",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
