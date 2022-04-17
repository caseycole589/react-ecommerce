// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app"
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCPpqZtY5lybDwtfKCZlFXZiPgXM4kTiTs",

  authDomain: "react-ecommerce-6b0d5.firebaseapp.com",

  projectId: "react-ecommerce-6b0d5",

  storageBucket: "react-ecommerce-6b0d5.appspot.com",

  messagingSenderId: "62852575649",

  appId: "1:62852575649:web:cfdd90d7"
}

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()
export const createUserDocumentFromAuth = async userAuth => {
  const useDocRef = await doc(db, "users", userAuth.uid)
  const userSnapshot = await getDoc(useDocRef)
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await setDoc(useDocRef, { displayName, email, createdAt })
    } catch (error) {
      console.log("error creating user", error)
    }
  }
  return useDocRef
}
