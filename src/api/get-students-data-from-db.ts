import { collection, getDocs } from 'firebase/firestore';

import { db } from '../firebase';
import { IUser } from '../hooks/types';

type TGetTeachersFromDB = () => Promise<IUser[]>;

export const getStudentsDataFromDB: TGetTeachersFromDB = async () => {
  const students: IUser[] = [];

  try {
    const querySnapshot = await getDocs(collection(db, 'children'));

    querySnapshot.forEach((doc) => {
      students.push(doc.data() as IUser);
    });

    return students;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }

    throw error;
  }
};
