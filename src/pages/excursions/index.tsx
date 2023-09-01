import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { StudentsExcursions } from 'components/students-excursions';
import { Title } from 'components/ui/title';

export const Excursions = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  useEffect(() => {
    if (id) {
      setName(id.split('-')[0]);
      setSurname(id.split('-')[1]);
    }
  }, []);

  return (
    <>
      <Title>Экскурсии, в которых участвовал ученик</Title>
      <StudentsExcursions name={name} surname={surname} />
    </>
  );
};
