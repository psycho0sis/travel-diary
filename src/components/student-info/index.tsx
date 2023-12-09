import { type FC } from 'react';

import { CustomAlert } from 'components/ui/alert';
import { Loader } from 'components/ui/loader';
import { UserData } from 'components/user/user-data';
import { useGetCurrentUser } from 'hooks/use-get-current-user';

import { StudentExcursionsTable } from './components/student-excursions';
import { IStudentsExcursions } from './types';

import styles from './styles.module.scss';

export const StudentInfo: FC<IStudentsExcursions> = ({ name, surname }) => {
  const { currentUser, error, loading } = useGetCurrentUser(name, surname);

  return (
    <>
      {loading && <Loader />}
      {currentUser && (
        <div className={styles.user}>
          <UserData {...currentUser} />
          <StudentExcursionsTable name={currentUser.name} surname={currentUser.surname} />
        </div>
      )}
      <CustomAlert isShown={error} text='Возможно такого пользователя не существует.' />
    </>
  );
};
