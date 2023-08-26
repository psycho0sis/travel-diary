import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';

import { db } from '../firebase';

interface IExcursion {
  id: number;
  excursion: string;
  date: string;
}

interface IUser {
  name: string;
  email: string;
  password: string;
  surname: string;
  photo: string;
  excursions?: IExcursion[];
}

type IUseLoadData = () => [string, React.Dispatch<React.SetStateAction<string>>, IUser, boolean];

const getUserDataFromDB = async (email: string) => {
  if (email) {
    const q = query(collection(db, 'children'), where('email', '==', email));

    const querySnapshot = await getDocs(q);

    return querySnapshot.docs[0].data();
  }
};

export const useLoadUserData: IUseLoadData = () => {
  const [email, setEmail] = useState('');
  const [user, setUser] = useState<IUser>({} as IUser);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      const data = await getUserDataFromDB(email);

      setUser((prev) => ({ ...prev, ...data }));
      setLoading(false);
    };

    getData();
  }, [email]);

  return [email, setEmail, user, loading];
};
