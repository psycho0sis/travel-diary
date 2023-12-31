import { useEffect, useState } from 'react';

import { getStudentsDataFromDB } from 'api/get-students-data-from-db';
import { userUniversalLoader } from 'hooks/use-universal-loader';
import type { IUser } from 'store/features/students/types';

export const useGetCurrentUser = (name: string, surname: string) => {
  const [currentUser, setCurrentUser] = useState<IUser | undefined>({} as IUser);

  const { data: students, error, loading } = userUniversalLoader(getStudentsDataFromDB);

  useEffect(() => {
    if (students) {
      setCurrentUser(
        students.find((student) => student.name === name && student.surname === surname)
      );
    }
  }, [students]);

  return { currentUser, error, loading };
};
