import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { getUserDataFromDB } from 'api/get-user-data-from-db';
import type { IUser } from 'store/features/students/types';

import { getSession, isLoggedIn } from '../session';

export const useLoadUserData = () => {
  const [email, setEmail] = useState('');
  const [user, setUser] = useState<IUser>({} as IUser);
  const [isTeacher, setIsTeacher] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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

  return { user, loading, error, isTeacher };
};
