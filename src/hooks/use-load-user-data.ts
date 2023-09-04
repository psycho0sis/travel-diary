import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';

import { db } from '../firebase';
import { getSession, isLoggedIn } from '../session';

import { IUser } from './types';

type IUseLoadData = () => [IUser, boolean, boolean, boolean];

export const getUserDataFromDB = async (email: string) => {
  try {
    const q = query(collection(db, 'children'), where('email', '==', email));

    const querySnapshot = await getDocs(q);

    return querySnapshot.docs[0].data();
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }

    throw error;
  }
};

export const useLoadUserData: IUseLoadData = () => {
  const [email, setEmail] = useState('');
  const [user, setUser] = useState<IUser>({} as IUser);
  const [isTeacher, setIsTeacher] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === '/user' && !isLoggedIn()) {
      navigate('/login');
    }

    const session = getSession();
    session && setEmail(session.email as string);
  }, [navigate]);

  useEffect(() => {
    if (email === 'kosko_galina@mail.ru') {
      setIsTeacher(true);
    }

    if (email) {
      const getData = async () => {
        try {
          const data = await getUserDataFromDB(email);

          setUser((prev) => ({ ...prev, ...data }));
        } catch (error) {
          setError(true);
        } finally {
          setLoading(false);
        }
      };

      getData();
    }
  }, [email]);

  return [user, loading, error, isTeacher];
};
