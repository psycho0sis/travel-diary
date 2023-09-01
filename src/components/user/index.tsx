import { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
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

  const [email, setEmail, user, loading, error, isTeacher] = useLoadUserData();

  useEffect(() => {
    if (user.excursions?.length) {
      const markers = createMarkers(user.excursions);

      setMarkers(markers);
    }
  }, [user]);

  if (error) {
    return (
      <Alert variant='warning'>
        Извините, что-то пошло не так и мы не можем загрузить данные пользователя
      </Alert>
    );
  }

  return (
    <div className='user'>
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
          <Button as='a' variant='dark' onClick={onLogout}>
            Выйти из аккаунта
          </Button>
        </>
      )}
    </div>
  );
};
