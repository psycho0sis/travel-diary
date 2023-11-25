import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useNavigate } from 'react-router-dom';

import { GoogleMaps } from 'components/google-map';
import { StudentExcursionsTable } from 'components/student-info/components/student-excursions';
import { CustomAlert } from 'components/ui/alert';
import { Loader } from 'components/ui/loader';
import { Title } from 'components/ui/title';
import { DEFAULT_MAPS_POSITION } from 'constants/index';
import { useLoadMarkers } from 'hooks/use-load-markers';
import { useLoadUserData } from 'hooks/use-load-user-data';
import { fetchExcursions } from 'store/features/excursions/excursions-action';
import { useAppDispatch } from 'store/hooks';

import { endSession } from '../../session';

import { ExcursionForm } from './excursion-form';
import { TeacherBlock } from './teacher-block';
import { UserData } from './user-data';

import styles from './styles.module.scss';

export const User = () => {
  const { user, loading, error, isTeacher } = useLoadUserData();
  const { email, name, surname } = user;
  const { currentMarkers } = useLoadMarkers(user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    endSession();
    navigate('/login');
  };

  const addMarkerToTheMap = (name: string, surname: string) =>
    dispatch(fetchExcursions({ name, surname }));

  return (
    <>
      {loading && <Loader />}
      {email && (
        <div className={styles.user}>
          <Tabs defaultActiveKey='userdata' className='mb-3'>
            <Tab eventKey='userdata' title='Данные пользователя'>
              <UserData {...user} showAvatarBlock />
            </Tab>

            {isTeacher && (
              <Tab eventKey='teacherBlock' title='Группа и управление'>
                <TeacherBlock />
              </Tab>
            )}

            <Tab eventKey='excursions' title='Посещенные экскурсии'>
              <Title fontSize={22}>Посещенные объекты:</Title>
              <GoogleMaps center={DEFAULT_MAPS_POSITION} markers={currentMarkers} />
              <StudentExcursionsTable name={name} surname={surname} />
              <ExcursionForm addMarkerToTheMap={addMarkerToTheMap} name={name} surname={surname} />
            </Tab>
          </Tabs>

          <Button as='a' className='mt-5' variant='dark' onClick={onLogout}>
            Выйти из аккаунта
          </Button>
        </div>
      )}
      {error && (
        <>
          <CustomAlert isShown={error} text='Mы не можем загрузить данные пользователя' />
          <Button onClick={onLogout} variant='dark'>
            Попробовать войти еще раз
          </Button>
        </>
      )}
    </>
  );
};
