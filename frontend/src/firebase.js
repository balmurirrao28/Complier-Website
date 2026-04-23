import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUbhSsOFD5MENfRHL0vmBlLJ_ohLGGo4o",
  authDomain: "code-pro-bfc5c.firebaseapp.com",
  projectId: "code-pro-bfc5c",
  storageBucket: "code-pro-bfc5c.appspot.com", // ✅ FIXED
  messagingSenderId: "763514811589",
  appId: "1:763514811589:web:ac51307779a4aa0d652cac",
};

const app = initializeApp(firebaseConfig);

// ✅ THIS WAS MISSING
const auth = getAuth(app);

export { auth };