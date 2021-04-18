import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB088aW1UTluW97wrUBluJyyNpoAh26Sj0",
  authDomain: "whatsapp-clone-e2938.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-e2938-default-rtdb.firebaseio.com",
  projectId: "whatsapp-clone-e2938",
  storageBucket: "whatsapp-clone-e2938.appspot.com",
  messagingSenderId: "317514429795",
  appId: "1:317514429795:web:5afc70777975826b950f56",
  measurementId: "G-80ZJVH6D53",
};

// whatsapp - clone - e2938.firebaseapp.com;

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
