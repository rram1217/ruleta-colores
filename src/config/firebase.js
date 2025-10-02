// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInAnonymously } from "firebase/auth";
import { env } from './env'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: env.apiKey,
    authDomain: env.authDomain,
    projectId: env.projectId,
    storageBucket: env.storageBucket,
    messagingSenderId: env.messagingSenderId,
    appId: env.appId,
    measurementId: env.measurementId
}

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