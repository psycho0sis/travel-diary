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
  const querySnapshot = await getDocs(collection(db, 'teachers'));

  querySnapshot.forEach((doc) => {
    teachers.push(doc.data() as ITeacher);
  });

  return teachers;
};
