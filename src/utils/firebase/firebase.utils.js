// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app"
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCPpqZtY5lybDwtfKCZlFXZiPgXM4kTiTs",

  authDomain: "react-ecommerce-6b0d5.firebaseapp.com",

  projectId: "react-ecommerce-6b0d5",

  storageBucket: "react-ecommerce-6b0d5.appspot.com",

  messagingSenderId: "62852575649",

  appId: "1:62852575649:web:cfdd90d7f821896d1e9be0"
}

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
