import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';

import { db } from '../firebase';

import { IUser } from './types';

type IUseLoadData = (email: string) => IUser;

export const getUserDataFromDB = async (email: string) => {
  if (email) {
    const q = query(collection(db, 'children'), where('email', '==', email));

    const querySnapshot = await getDocs(q);

    return querySnapshot.docs[0].data();
  }
};

export const useLoadReviewAuthor: IUseLoadData = (email: string) => {
  const [reviewAuthor, setUReviewAuthor] = useState<IUser>({} as IUser);

  useEffect(() => {
    const getData = async () => {
      const data = await getUserDataFromDB(email);

      setUReviewAuthor((prev) => ({ ...prev, ...data }));
    };

    getData();
  }, []);

  return reviewAuthor;
};
