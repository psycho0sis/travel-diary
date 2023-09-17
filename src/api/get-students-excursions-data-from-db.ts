import { collection, getDocs, query, where } from 'firebase/firestore';

import { db } from '../firebase';
import { IUser } from '../hooks/types';

type TGetStudentsExcursionsDataFromDB = (name: string, surname: string) => Promise<IUser>;

export const getStudentsExcursionsDataFromDB: TGetStudentsExcursionsDataFromDB = async (
  name,
  surname
) => {
  try {
    const q = query(
      collection(db, 'children'),
      where('name', '==', name),
      where('surname', '==', surname)
    );

    const querySnapshot = await getDocs(q);

    return querySnapshot.docs[0].data() as IUser;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }

    throw error;
  }
};
