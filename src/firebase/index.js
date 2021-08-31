import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCtmPVFdeJnj-eX-5BtPS6TuSVsAXWAwtw",
    authDomain: "lucianopasqualiniapp.firebaseapp.com",
    projectId: "lucianopasqualiniapp",
    storageBucket: "lucianopasqualiniapp.appspot.com",
    messagingSenderId: "259620246405",
    appId: "1:259620246405:web:a41b70c3ed8e2c47a0aaec"
};
  
firebase.initializeApp(firebaseConfig);

export const getFirestore = () => firebase.firestore();