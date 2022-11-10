// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: "AIzaSyA9Yw_tbHi4GeOyciEZKi4SDChCmrbEw20",
    // authDomain: "travel-service-b2254.firebaseapp.com",
    // projectId: "travel-service-b2254",
    // storageBucket: "travel-service-b2254.appspot.com",
    // messagingSenderId: "1018626550257",
    // appId: "1:1018626550257:web:a7de4f9444ab9692327c50"

    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app; 