import type { FC } from 'react';
import Alert from 'react-bootstrap/Alert';
import { getStudentsDataFromDB } from 'api/get-students-data-from-db';
import { userUniversalLoader } from 'hooks/use-universal-loader';

import { Sortable } from 'components/table';
import { Loader } from 'components/ui/loader';

import './styles.scss';

interface IStudentsExcursions {
  name: string;
  surname: string;
}

export const StudentsExcursions: FC<IStudentsExcursions> = ({ name, surname }) => {
  const { data: students, error, loading } = userUniversalLoader(getStudentsDataFromDB);

  const currentUser = students.find(
    (student) => student.name === name && student.surname === surname
  );

  return (
    <div className='user'>
      {!loading ? (
        <>
          {currentUser && (
            <div className='user__header'>
              <img className='user__image' src={currentUser.photo} />
              <div className='user__data'>
                <div className='user__data-group'>
                  <p className='user__data-subtitle'>Имя:</p>
                  <span className='user__data-item'>{currentUser.name}</span>
                </div>
                <div className='user__data-group'>
                  <p className='user__data-subtitle'>Фамилия:</p>
                  <span className='user__data-item'>{currentUser.surname}</span>
                </div>
              </div>
            </div>
          )}
          <div className='user__excursions'>Посещенные экскурсии:</div>
          {currentUser?.excursions?.length && <Sortable excursions={currentUser.excursions} />}
        </>
      ) : (
        <Loader />
      )}
      {error && (
        <Alert className='mt-3' variant='danger'>
          Извините, что-то пошло не так/ Возможно такого пользователя не существует.
        </Alert>
      )}
    </div>
  );
};
