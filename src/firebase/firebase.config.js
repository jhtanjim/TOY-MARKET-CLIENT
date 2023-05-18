// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAxNGV0mJee7BwTPC6ky3_dZEcQ3F_O4-8",
    authDomain: "toy-store-2a941.firebaseapp.com",
    projectId: "toy-store-2a941",
    storageBucket: "toy-store-2a941.appspot.com",
    messagingSenderId: "656460577457",
    appId: "1:656460577457:web:acac2e8829116f38f8c090"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app