import Alert from 'react-bootstrap/esm/Alert';
import { getTeachersFromDB } from 'api/get-teachers-from-db';
import { userUniversalLoader } from 'hooks/use-universal-loader';

import './styles.scss';

export const TeachersMapper = () => {
  const { data: teachers, error } = userUniversalLoader(getTeachersFromDB);

  if (error) {
    return (
      <Alert variant='warning'>
        Извините, что-то пошло не так и мы не можем загрузить данные пользователей
      </Alert>
    );
  }

  return (
    <div className='teachers'>
      {teachers?.map(({ id, name, subject, photo }) => (
        <div className='teachers__item' key={id}>
          <img className='teachers__image' src={photo} />
          <h5>{name}</h5>
          <p>{subject}</p>
        </div>
      ))}
    </div>
  );
};
