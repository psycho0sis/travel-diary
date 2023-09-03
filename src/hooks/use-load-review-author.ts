import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';

import { db } from '../firebase';

import { IUser } from './types';

type IUseLoadData = (email: string) => [IUser, boolean, boolean];

export const getUserDataFromDB = async (email: string) => {
  try {
    const q = query(collection(db, 'children'), where('email', '==', email));

    const querySnapshot = await getDocs(q);

    return querySnapshot.docs[0].data();
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }

    throw error;
  }
};

export const useLoadReviewAuthor: IUseLoadData = (email: string) => {
  const [reviewAuthor, setUReviewAuthor] = useState<IUser>({} as IUser);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getUserDataFromDB(email);

        setUReviewAuthor((prev) => ({ ...prev, ...data }));
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return [reviewAuthor, loading, error];
};
