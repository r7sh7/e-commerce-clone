import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAh6Udrb31Az8DiuBNQblg6tPflwBi4RwY",
  authDomain: "e-commerce-clone-ea728.firebaseapp.com",
  projectId: "e-commerce-clone-ea728",
  storageBucket: "e-commerce-clone-ea728.appspot.com",
  messagingSenderId: "779433692129",
  appId: "1:779433692129:web:be6b337ff256c080f120a0",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };
