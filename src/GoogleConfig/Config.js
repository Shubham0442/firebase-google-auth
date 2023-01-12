// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbfomWQj971GsnaRnxvTVebnV3OgCbP_0",
  authDomain: "fir-react-auth-c59ed.firebaseapp.com",
  projectId: "fir-react-auth-c59ed",
  storageBucket: "fir-react-auth-c59ed.appspot.com",
  messagingSenderId: "968640787262",
  appId: "1:968640787262:web:b91146ff526fbb9253f26f",
  measurementId: "G-MNCJHVFV9B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app)
const provider = new GoogleAuthProvider(); 

export { auth, provider }