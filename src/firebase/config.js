import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD9e_n9NtFcdDjdCugGZHyPSEzEcRKVjSE",
  authDomain: "vue-firebase-8eac1.firebaseapp.com",
  projectId: "vue-firebase-8eac1",
  storageBucket: "vue-firebase-8eac1.appspot.com",
  messagingSenderId: "130638113609",
  appId: "1:130638113609:web:74be6d824c0ba358984898",
  measurementId: "G-37MJ3DBCZF"
};

firebase.initializeApp(firebaseConfig)
const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };
