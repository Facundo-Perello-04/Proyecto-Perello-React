// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBz6b4a18HAJ4TcMGRu79ji3WA_j3rvZkU",
    authDomain: "e-commerce-pollos-hermanos.firebaseapp.com",
    projectId: "e-commerce-pollos-hermanos",
    storageBucket: "e-commerce-pollos-hermanos.appspot.com",
    messagingSenderId: "297075504799",
    appId: "1:297075504799:web:a921cea356dacffb5194aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)