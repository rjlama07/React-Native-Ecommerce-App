import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Optionally import the services that you want to use

// import {...} from 'firebase/database';

// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

// Initialize Firebase
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWZRDBX5lcBw8ik1RF69-YSv_gUvRScug",
  authDomain: "smart-ecommerce-80381.firebaseapp.com",
  projectId: "smart-ecommerce-80381",
  storageBucket: "smart-ecommerce-80381.firebasestorage.app",
  messagingSenderId: "391395646742",
  appId: "1:391395646742:web:407a878c1a7b1f897a4437",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

export { auth, db };
