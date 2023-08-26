import { useEffect, useState } from 'react';
import { collection, DocumentData, getDocs } from 'firebase/firestore';

import { db } from '../../firebase';

import './styles.scss';

const getStudentsDataFromDB = async () => {
  const students: DocumentData[] = [];
  const querySnapshot = await getDocs(collection(db, 'children'));

  querySnapshot.forEach((doc) => {
    students.push(doc.data());
  });

  return students;
};

export const StudentsMapper = () => {
  const [students, setPhotos] = useState<DocumentData[]>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getStudentsDataFromDB();

      setPhotos(data);
    };

    getData();
  }, []);

  return (
    <div className='students'>
      {students?.map((student) => (
        <div key={student.email} className='students__item'>
          <img loading='lazy' className='students__photo' src={student.photo} />
          <div className='students__data-group'>
            <p className='students__data-item'>{student.name}</p>
            <p className='students__data-item'>{student.surname}</p>
          </div>
          <div className='students__data-group'></div>
        </div>
      ))}
    </div>
  );
};
