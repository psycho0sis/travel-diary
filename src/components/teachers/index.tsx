import { useEffect, useState } from 'react';
import { collection, DocumentData, getDocs } from 'firebase/firestore';

import { db } from '../../firebase';


const getStudentsDataFromDB = async () => {
  let teachers: DocumentData[] = [];
  const querySnapshot = await getDocs(collection(db, 'teachers'));

    querySnapshot.forEach((doc) => {
        teachers = [].concat(doc.data().photoes);
    });
    
    console.log(teachers)

  return teachers;
};

export const TeachersMapper = () => {
  const [teachers, setPhotos] = useState<DocumentData[]>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getStudentsDataFromDB();

      setPhotos(data);
    };

    getData();
  }, []);

  return (
    <div className='students'>
      {teachers?.map((photo) => (
          <img key={photo.toString()} loading='lazy' className='students__photo' src={photo.toString()} />
      ))}
    </div>
  );
};
