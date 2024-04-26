import { collection, getDocs, query, where } from 'firebase/firestore';

import type { IUser } from 'store/features/students/types';

import { db } from '../firebase';

type TGetStudentByCredentialsFromDB = (name: string, surname: string) => Promise<IUser | undefined>;

export const getStudentByCredentialsFromDB: TGetStudentByCredentialsFromDB = async (
  name,
  surname
) => {
  try {
    if (name && surname) {
      const q = query(
        collection(db, 'children'),
        where('name', '==', name),
        where('surname', '==', surname)
      );

      const querySnapshot = await getDocs(q);

      return querySnapshot.docs[0].data() as IUser;
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }

    throw error;
  }
};
