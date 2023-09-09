import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBBzUju_N6ZPqNyfSmutZtj_uIqJjC0hJ0",
  authDomain: "prayan-foundation.firebaseapp.com",
  projectId: "prayan-foundation",
  storageBucket: "prayan-foundation.appspot.com",
  messagingSenderId: "373929651192",
  appId: "1:373929651192:web:89e75c5e7399cbb1ef440d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
