// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_authDomain,
//   authDomain: process.env.REACT_APP_apiKey,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// };

const firebaseConfig = {
  apiKey: "AIzaSyBvCqxy_9sK9Sl9oiw0zWnEeByOQRbyffw",
  authDomain: "service-review-d7144.firebaseapp.com",
  projectId: "service-review-d7144",
  storageBucket: "service-review-d7144.appspot.com",
  messagingSenderId: "496938345088",
  appId: "1:496938345088:web:719266767fba69abe63c65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;