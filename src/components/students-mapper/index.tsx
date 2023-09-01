import { Fragment, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
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
          <Fragment key={email}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant='top' src={photo} />
              <Card.Body>
                <Card.Title>
                  {name} {surname}
                </Card.Title>
                <Button variant='dark' href={`/students/${name}-${surname}`}>
                  Перейти к пройденным экскурсиям
                </Button>
              </Card.Body>
            </Card>
          </Fragment>
        ))}
      </div>
    </div>
  );
};
