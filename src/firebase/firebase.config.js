// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQT6vlAmRp5MT0hK9NxWbISMD8NSZFTtY",
  authDomain: "video-streaming-e1fb6.firebaseapp.com",
  projectId: "video-streaming-e1fb6",
  storageBucket: "video-streaming-e1fb6.appspot.com",
  messagingSenderId: "104949028234",
  appId: "1:104949028234:web:5501bdc60d0ebaa46ba473"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export default app