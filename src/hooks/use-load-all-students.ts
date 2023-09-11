import { useEffect, useState } from 'react';
import { collection, DocumentData, getDocs } from 'firebase/firestore';

import { db } from '../firebase';

export const getStudentsDataFromDB = async () => {
  const students: DocumentData[] = [];

  try {
    const querySnapshot = await getDocs(collection(db, 'children'));

    querySnapshot.forEach((doc) => {
      students.push(doc.data());
    });

    return students;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }

    throw error;
  }
};

export const useLoadAllStudents = () => {
  const [students, setPhotos] = useState<DocumentData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getStudentsDataFromDB();

        setPhotos(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return { students, loading, error };
};
