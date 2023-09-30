import { type FC } from 'react';
import Alert from 'react-bootstrap/Alert';

import { Loader } from 'components/ui/loader';
import { UserData } from 'components/user/user-data';
import { useGetCurrentUser } from 'hooks/use-get-current-user';

import { StudentExcursionsTable } from './student-excursions';

import styles from './styles.module.scss';

interface IStudentsExcursions {
  name: string;
  surname: string;
}

export const StudentInfo: FC<IStudentsExcursions> = ({ name, surname }) => {
  const { currentUser, error, loading } = useGetCurrentUser(name, surname);

  if (error) {
    return (
      <Alert className='mt-3' variant='danger'>
        Извините, что-то пошло не так. Возможно такого пользователя не существует.
      </Alert>
    );
  }

  return (
    <div className={styles.user}>
      {!loading ? (
        <>
          {currentUser && (
            <>
              <UserData {...currentUser} />
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
