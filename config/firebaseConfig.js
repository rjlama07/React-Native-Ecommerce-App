import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";

// 🔹 Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWZRDBX5lcBw8ik1RF69-YSv_gUvRScug",
  authDomain: "smart-ecommerce-80381.firebaseapp.com",
  projectId: "smart-ecommerce-80381",
  storageBucket: "smart-ecommerce-80381.firebasestorage.app",
  messagingSenderId: "391395646742",
  appId: "1:391395646742:web:407a878c1a7b1f897a4437",
};

// 🔹 Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Use initializeAuth instead of getAuth (important for React Native)
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

// 🔹 Firestore
const db = getFirestore(app);

export { app, auth, db };
