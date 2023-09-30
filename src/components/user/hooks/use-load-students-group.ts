import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import type { IUser } from 'hooks/types';
import { fetchStudents } from 'store/features/students/students-action';
import { selectAsyncStatus, selectAsyncStudents } from 'store/features/students/students-selectors';
import { useAppDispatch } from 'store/hooks';

export const useLoadStudents = () => {
  const [students, setStudents] = useState<IUser[]>([]);
  const asyncStudents = useSelector(selectAsyncStudents);
  const asyncStatus = useSelector(selectAsyncStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchStudents(''));
  }, []);

  useEffect(() => {
    if (asyncStudents?.length) {
      setStudents(asyncStudents);
    }
  }, [asyncStudents]);

  return { students, asyncStatus };
};
