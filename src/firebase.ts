import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

import { firebaseConfig } from './firebase-config';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const createUser = async (email: string, password: string) => {
  return createUserWithEmailAndPassword(getAuth(app), email, password);
};

export const signInUser = async (email: string, password: string) => {
  return signInWithEmailAndPassword(getAuth(app), email, password);
};

const q = query(collection(db, 'children'), where('email', '==', 'voishnis_polina@mail.ru'));

const querySnapshot = await getDocs(q);

console.log(querySnapshot.docs[0].data());
querySnapshot.forEach((doc) => {
  console.log(doc.data());
});
