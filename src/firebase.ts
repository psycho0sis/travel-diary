import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

import { firebaseConfig } from './firebase-config';

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const createUser = async (email: string, password: string) => {
  return createUserWithEmailAndPassword(getAuth(app), email, password);
};

export const signInUser = async (email: string, password: string) => {
  return signInWithEmailAndPassword(getAuth(app), email, password);
};
