import { collection, getDocs, query, where } from 'firebase/firestore';

import { db } from '../firebase';

export const getUserDataFromDB = async (email: string) => {
  try {
    const q = query(collection(db, 'children'), where('email', '==', email));

    // throw new Error();
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs[0].data();
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }

    throw error;
  }
};
