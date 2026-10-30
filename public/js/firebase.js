// Firebaseを読み込む
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore.js";

// Firebaseの設定
const firebaseConfig = {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "伏せ",
  authDomain: "伏せ",
  projectId: "hisft-manager-new",
  storageBucket: "shift-manager-app-b6015.firebasestorage.app",
  messagingSenderId: "4990410329",
  appId: "1:4990410329:web:c01e68804604e3c71d1b48",
  measurementId: "G-SX2G0RP3G2"
};

// Firebaseを初期化する
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const dbFirestore = getFirestore(app);

// 他のファイルから使えるようにする
export { app , auth, dbFirestore};

console.log("Firebaseの初期化処理を実行しました", app);
