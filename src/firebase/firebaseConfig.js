import { initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA7b6TmGT0rHVw_jBKie4SPj0XsZggSwBg",
  authDomain: "blog-811ce.firebaseapp.com",
  projectId: "blog-811ce",
  storageBucket: "blog-811ce.appspot.com",
  messagingSenderId: "194869352708",
  appId: "1:194869352708:web:1f1f877ebea67c59585851"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
