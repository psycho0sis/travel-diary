import { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createMarkers } from 'helpers/create-markers';
import { useLoadUserData } from 'hooks/use-load-user-data';
import { fetchExcursions } from 'store/features/excursions/excursions-action';
import {
  selectAsyncExcursions,
  selectAsyncStatus
} from 'store/features/excursions/excursions-selectors';
import { useAppDispatch } from 'store/hooks';

import { GoogleMaps } from 'components/google-map';
import { IMarker } from 'components/google-map-with-markers-start/types';
import { Sortable } from 'components/table';
import { Loader } from 'components/ui/loader';

import { endSession, getSession, isLoggedIn } from '../../session';

import { ExcursionForm } from './excursion-form';
import { UserData } from './user-data';

import './styles.scss';

export const User = () => {
  const [currentMarkers, setMarkers] = useState<IMarker[]>([]);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate('/login');
    }

    const session = getSession();
    session && setEmail(session.email as string);
  }, [navigate]);

  const onLogout = () => {
    endSession();
    navigate('/login');
  };

  const [email, setEmail, user, loading, error, isTeacher] = useLoadUserData();

  useEffect(() => {
    const { name, surname } = user;

    dispatch(fetchExcursions({ name, surname }));
  }, [user.name, user.surname]);

  const addMarkerToTheMap = (name: string, surname: string) =>
    dispatch(fetchExcursions({ name, surname }));

  const asyncExcursions = useSelector(selectAsyncExcursions);
  const status = useSelector(selectAsyncStatus);

  useEffect(() => {
    if (asyncExcursions?.length) {
      const markers = createMarkers(asyncExcursions);

      setMarkers(markers);
    }
  }, [asyncExcursions]);

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
        <Loader />
      ) : (
        <>
          <UserData {...user} />
          <div className='user__excursions'>Посещенные экскурсии:</div>
          <GoogleMaps
            center={{ lat: 54.15320407797462, lng: 25.319435879481013 }}
            markers={currentMarkers}
          />
          <div className='user__excursions-table'>
            {asyncExcursions?.length && <Sortable excursions={asyncExcursions} />}
          </div>

          <ExcursionForm
            addMarkerToTheMap={addMarkerToTheMap}
            name={user.name}
            surname={user.surname}
          />

          <Button as='a' variant='dark' onClick={onLogout}>
            Выйти из аккаунта
          </Button>
        </>
      )}
    </div>
  );
};
