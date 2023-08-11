import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';

import { Title } from 'components/ui/title';

import { db } from '../../firebase';
import { endSession, getSession, isLoggedIn } from '../../session';

import './styles.scss';

interface IUser {
  name: string;
  email: string;
  password: string;
  surname: string;
  photo: string;
}

const getDataFromDB = async (email: string) => {
  if (email) {
    const q = query(collection(db, 'children'), where('email', '==', email));

    const querySnapshot = await getDocs(q);

    return querySnapshot.docs[0].data();
  }
};

export const User = () => {
  const [email, setEmail] = useState('');
  const [user, setUser] = useState<IUser>({} as IUser);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const data = await getDataFromDB(email);

      setUser((prev) => ({ ...prev, ...data }));
      setLoading(false);
    };

    getData();
  }, [email]);

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate('/login');
    }

    const session = getSession();
    session && setEmail(session.email as string);

    console.log('Your access token is: ' + session.accessToken);
  }, [navigate]);

  const onLogout = () => {
    endSession();
    navigate('/login');
  };

  return (
    <div className='user'>
      {loading ? (
        <h2>Загрузка</h2>
      ) : (
        <>
          <div className='user__header'>
            <img className='user__image' src={user.photo} />
            <div className='user__data'>
              <Title fontSize={24}>Ваши данные: </Title>
              <div className='user__data-group'>
                <p className='user__data-subtitle'>Электронная почта:</p>
                <span className='user__data-item'>{email}</span>
              </div>
              <div className='user__data-group'>
                <p className='user__data-subtitle'>Имя:</p>
                <span className='user__data-item'>{user.name}</span>
              </div>
              <div className='user__data-group'>
                <p className='user__data-subtitle'>Фамилия:</p>
                <span className='user__data-item'>{user.surname}</span>
              </div>
            </div>
          </div>
          <div className='user__excursions'>Посещенные экскурсии:</div>
        </>
      )}
      <p className='user__logout'>Выйти из аккаунта: </p>
      <button className='user__logout-btn' onClick={onLogout}>
        Выйти
      </button>
    </div>
  );
};
