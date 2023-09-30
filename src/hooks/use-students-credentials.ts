import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const useStudentsCredentials = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  useEffect(() => {
    if (id) {
      setName(id.split('-')[0]);
      setSurname(id.split('-')[1]);
    }
  }, []);

  return { name, surname };
};
