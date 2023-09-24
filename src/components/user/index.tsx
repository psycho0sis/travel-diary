import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useNavigate } from 'react-router-dom';
import { useLoadUserData } from 'hooks/use-load-user-data';
import { fetchExcursions } from 'store/features/excursions/excursions-action';
import { useAppDispatch } from 'store/hooks';

import { GoogleMaps } from 'components/google-map';
import { StudentExcursionsTable } from 'components/student-info/student-excursions';
import { Loader } from 'components/ui/loader';
import { Title } from 'components/ui/title';

import { endSession } from '../../session';

import { useLoadMarkers } from './hooks/use-load-markers';
import { ExcursionForm } from './excursion-form';
import { TeacherBlock } from './teacher-block';
import { UserData } from './user-data';

import './styles.scss';

export const User = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { user, loading, error, isTeacher } = useLoadUserData();
  const { currentMarkers } = useLoadMarkers(user);

  const onLogout = () => {
    endSession();
    navigate('/login');
  };

  const addMarkerToTheMap = (name: string, surname: string) =>
    dispatch(fetchExcursions({ name, surname }));

  const handleOnclick = () => {
    onLogout();
  };

  if (error) {
    return (
      <div className='mb-3'>
        <Alert variant='warning'>
          Извините, что-то пошло не так и мы не можем загрузить данные пользователя
        </Alert>
        <Button onClick={handleOnclick} variant='dark'>
          Попробовать войти еще раз
        </Button>
      </div>
    );
  }

  return (
    <div className='user'>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Tabs defaultActiveKey='userdata' id='uncontrolled-tab-example' className='mb-3'>
            <Tab eventKey='userdata' title='Данные пользователя'>
              <UserData {...user} />
            </Tab>
            {isTeacher && (
              <Tab eventKey='teacherBlock' title='Группа и управление'>
                <TeacherBlock />
              </Tab>
            )}
            <Tab eventKey='excursions' title='Посещенные экскурсии'>
              <Title fontSize={22}>Посещенные объекты:</Title>
              <GoogleMaps
                center={{ lat: 54.15320407797462, lng: 25.319435879481013 }}
                markers={currentMarkers}
              />
              <StudentExcursionsTable name={user.name} surname={user.surname} />
              <ExcursionForm
                addMarkerToTheMap={addMarkerToTheMap}
                name={user.name}
                surname={user.surname}
              />
            </Tab>
          </Tabs>

          <Button as='a' className='mt-5' variant='dark' onClick={onLogout}>
            Выйти из аккаунта
          </Button>
        </>
      )}
    </div>
  );
};
