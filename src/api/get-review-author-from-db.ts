import { collection, getDocs, query, where } from 'firebase/firestore';

import type { IUser } from 'store/features/students/types';

import { db } from '../firebase';

type TGetReviewAuthorFromDB = (email: string) => Promise<IUser>;

export const getReviewAuthorFromDB: TGetReviewAuthorFromDB = async (email) => {
  try {
    const q = query(collection(db, 'children'), where('email', '==', email));

    const querySnapshot = await getDocs(q);

    return querySnapshot.docs[0].data() as IUser;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }

    throw error;
  }
};
