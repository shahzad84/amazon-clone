// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcW2GQ1WZJh4CBPJNqHxVpsZuuC256F3s",
  authDomain: "fir-ff911.firebaseapp.com",
  projectId: "fir-ff911",
  storageBucket: "fir-ff911.appspot.com",
  messagingSenderId: "732100406083",
  appId: "1:732100406083:web:6ee28774fc6c3443b91df6",
  measurementId: "G-1167KGCPZG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
