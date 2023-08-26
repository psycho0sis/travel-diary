import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoadUserData } from 'hooks/use-load-user-data';

import { Title } from 'components/ui/title';

import { endSession, getSession, isLoggedIn } from '../../session';

import './styles.scss';

export const User = () => {
  const [email, setEmail, user, loading] = useLoadUserData();
  const navigate = useNavigate();

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
          {user.excursions?.map((excursion) => (
            <p key={excursion.id}>{excursion.excursion}</p>
          ))}
        </>
      )}
      <p className='user__logout'>Выйти из аккаунта: </p>
      <button className='user__logout-btn' onClick={onLogout}>
        Выйти
      </button>
    </div>
  );
};
