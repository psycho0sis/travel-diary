import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, DocumentData, getDocs } from 'firebase/firestore';

import { Title } from 'components/ui/title';

import { db } from '../../firebase';

import './styles.scss';

const getStudentsDataFromDB = async () => {
  const students: DocumentData[] = [];
  const querySnapshot = await getDocs(collection(db, 'children'));

  querySnapshot.forEach((doc) => {
    students.push(doc.data());
  });

  return students.filter((student) => student.role !== 'teacher');
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
      <Title>10 "Б" класс</Title>
      <div className='students__items'>
        {students?.map(({ email, name, surname, photo }) => (
          <div key={email} className='students__item'>
            <img loading='lazy' className='students__photo' src={photo} />
            <div className='students__data-group'>
              <p className='students__data-item'>
                {name} {surname}
              </p>
              <Link className='students__excursions-btn' to={`/students/${name}-${surname}`}>
                Перейти к пройденным экскурсиям
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
