// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInAnonymously } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyASowKpD20sEZPA33VG5Mxy0KuJeFIziT4",
    authDomain: "ruleta-colores.firebaseapp.com",
    projectId: "ruleta-colores",
    storageBucket: "ruleta-colores.firebasestorage.app",
    messagingSenderId: "1088398378468",
    appId: "1:1088398378468:web:ffe2a14beab711aed573f1",
    measurementId: "G-NV2GD0KQKC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Inicia sesión anónima para cumplir las reglas (request.auth != null)
const auth = getAuth(app);
signInAnonymously(auth).catch((err) => {
    console.error('Anonymous sign-in failed:', err);
});

// Analytics opcional (evita errores en SSR)
export const analytics =
    typeof window !== 'undefined' ? getAnalytics(app) : null;