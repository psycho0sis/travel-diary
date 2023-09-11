import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { StudentsExcursions } from 'components/students-excursions';
import { Title } from 'components/ui/title';

export const Excursions = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      setName(id.split('-')[0]);
      setSurname(id.split('-')[1]);
    }
  }, []);

  return (
    <>
      <div className='excursion__back-btn-wrapper'>
        <div className='excursion__back-btn' onClick={() => navigate(-1)}>
          Назад
        </div>
      </div>
      <Title>Экскурсии, в которых участвовал ученик</Title>
      <StudentsExcursions name={name} surname={surname} />
    </>
  );
};
