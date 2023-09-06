import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyA3EEJuUlPUYx1DacVUz4Df5lB5I0uTjWc",
  authDomain: "prayan-d07e9.firebaseapp.com",
  projectId: "prayan-d07e9",
  storageBucket: "prayan-d07e9.appspot.com",
  messagingSenderId: "303552682777",
  appId: "1:303552682777:web:516d50d113a028d4184388"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)