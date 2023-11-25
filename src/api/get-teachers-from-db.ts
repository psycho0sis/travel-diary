import { collection, getDocs } from 'firebase/firestore';

import { db } from '../firebase';

interface ITeacher {
  id: number;
  name: string;
  subject: string;
  photo: string;
}

type TGetTeachersFromDB = () => Promise<ITeacher[]>;

export const getTeachersFromDB: TGetTeachersFromDB = async () => {
  const teachers: ITeacher[] = [];

  try {
    const querySnapshot = await getDocs(collection(db, 'teachers'));

    querySnapshot.forEach((doc) => {
      teachers.push(doc.data() as ITeacher);
    });

    return teachers;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }

    throw error;
  }
};
