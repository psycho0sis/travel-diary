import { useEffect, useState } from 'react';
import { collection, DocumentData, getDocs } from 'firebase/firestore';

import { db } from '../firebase';

type IUserLoadTeachers = () => [DocumentData[], boolean];

const getTeachersFromDB = async () => {
  const teachers: DocumentData[] = [];
  const querySnapshot = await getDocs(collection(db, 'teachers'));

  querySnapshot.forEach((doc) => {
    teachers.push(doc.data());
  });

  return teachers;
};

export const userLoadTeachers: IUserLoadTeachers = () => {
  const [teachers, setTeachers] = useState<DocumentData[]>([]);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getTeachersFromDB();

        setTeachers(data);
      } catch (error) {
        setError(true);
      }
    };

    getData();
  }, []);

  return [teachers, error];
};
