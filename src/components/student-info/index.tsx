import { type FC } from 'react';
import Alert from 'react-bootstrap/Alert';
import { useGetCurrentUser } from 'hooks/use-get-current-user';

import { Loader } from 'components/ui/loader';

import { StudentExcursionsTable } from './student-excursions';

interface IStudentsExcursions {
  name: string;
  surname: string;
}

export const StudentInfo: FC<IStudentsExcursions> = ({ name, surname }) => {
  const { currentUser, error, loading } = useGetCurrentUser(name, surname);

  if (error) {
    return (
      <Alert className='mt-3' variant='danger'>
        Извините, что-то пошло не так/ Возможно такого пользователя не существует.
      </Alert>
    );
  }

  return (
    <div className='user'>
      {!loading ? (
        <>
          {currentUser && (
            <>
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
              <StudentExcursionsTable name={currentUser.name} surname={currentUser.surname} />
            </>
          )}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};
