import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';

import { db } from '../firebase';

import { IUser } from './types';

type IUseLoadData = (name: string, surname: string) => [IUser, boolean, boolean];

export const getStudentsExcursionsDataFromDB = async (name: string, surname: string) => {
  try {
    const q = query(
      collection(db, 'children'),
      where('name', '==', name),
      where('surname', '==', surname)
    );

    const querySnapshot = await getDocs(q);

    return querySnapshot.docs[0].data();
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }

    throw error;
  }
};

export const useLoadStudentsExcursionsData: IUseLoadData = (name: string, surname: string) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoaded(true);
        const data = await getStudentsExcursionsDataFromDB(name, surname);
        setLoaded(false);

        setUser((prev) => ({ ...prev, ...data }));
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
        }
        setError(true);
      } finally {
        setLoaded(false);
      }
    };

    getData();
  }, [name, surname]);

  return [user, error, loaded];
};
