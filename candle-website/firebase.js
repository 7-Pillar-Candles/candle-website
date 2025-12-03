import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyB5ZNRvBUI-X_l5KFYBKp7khKVTpDo51qI",
  authDomain: "pillar-candles-live.firebaseapp.com",
  projectId: "pillar-candles-live",
  storageBucket: "pillar-candles-live.appspot.com",
  messagingSenderId: "128493289012",
  appId: "1:128493289012:web:a8bf645aea69f2682b1461"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
