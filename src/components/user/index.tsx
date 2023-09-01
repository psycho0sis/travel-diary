import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createMarkers } from 'helpers/create-markers';
import { useLoadUserData } from 'hooks/use-load-user-data';

import { GoogleMaps } from 'components/google-map';
import { IMarker } from 'components/google-map-with-markers-start/types';
import { Sortable } from 'components/table';
import { Title } from 'components/ui/title';

import { endSession, getSession, isLoggedIn } from '../../session';

import './styles.scss';

export const User = () => {
  const [currentMarkers, setMarkers] = useState<IMarker[]>([]);
  const [email, setEmail, user, loading, error, isTeacher] = useLoadUserData();
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

  useEffect(() => {
    if (user.excursions?.length) {
      const markers = createMarkers(user.excursions);

      setMarkers(markers);
    }
  }, [user]);

  return (
    <div className='user'>
      {/* {error && <div>Oops...</div>} */}
      {isTeacher && <div>Учитель</div>}
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
          <GoogleMaps
            center={{ lat: 54.15320407797462, lng: 25.319435879481013 }}
            markers={currentMarkers}
          />
          <div className='user__excursions-table'>
            {user.excursions?.length && <Sortable excursions={user.excursions} />}
          </div>
          <p className='user__logout'>Выйти из аккаунта: </p>
          <button className='user__logout-btn' onClick={onLogout}>
            Выйти
          </button>
        </>
      )}
    </div>
  );
};
