// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
  User,
  NextOrObserver,
} from "firebase/auth";
import {
  doc,
  getDoc,
  getFirestore,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";
import { Category } from "../../store/categories/category.types";

const firebaseConfig = {
  apiKey: "AIzaSyCPpqZtY5lybDwtfKCZlFXZiPgXM4kTiTs",

  authDomain: "react-ecommerce-6b0d5.firebaseapp.com",

  projectId: "react-ecommerce-6b0d5",

  storageBucket: "react-ecommerce-6b0d5.appspot.com",

  messagingSenderId: "62852575649",

  appId: "1:62852575649:web:cfdd90d7",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore();

export interface UserData {
  createdAt: Date;
  displayName: string;
  email: string;
}

export const addCollectionAndDocuments = async (
  collectionKey: string,
  objectsToAdd: any[],
  field: string
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  objectsToAdd.forEach((obj) => {
    const docRef = doc(collectionRef, obj[field].toLowerCase());
    batch.set(docRef, obj);
  });
  await batch.commit();
};

export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) =>
    docSnapshot.data()
  ) as Category[];
};

export const createUserDocumentFromAuth = async (
  userAuth: User,
  aditionalInfo = {} as any
) => {
  const useDocRef = await doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(useDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(useDocRef, {
        displayName,
        email,
        createdAt,
        ...aditionalInfo,
      });
    } catch (error) {
      console.log("error creating user", error);
    }
  }
  return useDocRef;
};

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) {
    return;
  }
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  return await signOut(auth);
};

export const onAuthStateChangedListener = (cb: NextOrObserver<User>) =>
  onAuthStateChanged(auth, cb);
