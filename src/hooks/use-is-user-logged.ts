import { useEffect, useState } from 'react';

import { useLoadUserData } from './use-load-user-data';

export const useIsUserLogged = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [isLoggedError, setIsLoggedError] = useState('');
  const { user } = useLoadUserData();

  useEffect(() => {
    if (!user.email) {
      setIsLogged(false);
    } else {
      setIsLogged(true);
    }
  }, [user]);

  return { isLogged, isLoggedError, setIsLoggedError, user };
};
