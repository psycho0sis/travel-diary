import { useEffect, useState } from 'react';
import { collection, DocumentData, getDocs } from 'firebase/firestore';

import { db } from '../firebase';

type IUserLoadAllStudent = () => [DocumentData[], boolean];

const getStudentsDataFromDB = async () => {
  const students: DocumentData[] = [];

  try {
    const querySnapshot = await getDocs(collection(db, 'children'));

    querySnapshot.forEach((doc) => {
      students.push(doc.data());
    });

    return students.filter((student) => student.role !== 'teacher');
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }

    throw error;
  }
};

export const userLoadAllStudents: IUserLoadAllStudent = () => {
  const [students, setPhotos] = useState<DocumentData[]>([]);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getStudentsDataFromDB();

        setPhotos(data);
      } catch (error) {
        setError(true);
      }
    };

    getData();
  }, []);

  return [students, error];
};
