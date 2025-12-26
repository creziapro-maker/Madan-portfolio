import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBI-UtdhNThTuTVJdDKTy1NSbyabvFwGZc",
  authDomain: "madanprotflio.firebaseapp.com",
  projectId: "madanprotflio",
  storageBucket: "madanprotflio.firebasestorage.app",
  messagingSenderId: "361350828142",
  appId: "1:361350828142:web:87d7ce012e10445df4d67f",
  measurementId: "G-FMY054TWKH",
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export { app, db, auth }
