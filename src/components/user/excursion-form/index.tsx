import { ChangeEvent, FC, FormEvent, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

import { getRoutesFromDB } from 'api/get-routes-fron-db';
import { getStudentsDataFromDB } from 'api/get-students-data-from-db';
import { CustomAlert } from 'components/ui/alert';
import { Title } from 'components/ui/title';
import { userUniversalLoader } from 'hooks/use-universal-loader';

import { db } from '../../../firebase';
import { IExcursionForm } from '../types';

interface IAlertMessage {
  [key: string]: React.ReactNode;
}

const alerts: IAlertMessage = {
  isRouteAdded: <Alert variant='success'>Новый маршрут успешно добавлен на карту!</Alert>,
  isAlertVisible: <Alert variant='warning'>Сперва выберите название и дату маршрута.</Alert>,
  isCurrentRouteExist: <Alert variant='warning'>Такой маршрут уже существует.</Alert>,
};

export const ExcursionForm: FC<IExcursionForm> = ({ addMarkerToTheMap, name, surname }) => {
  const [route, setRoute] = useState({ route: '', date: '' });
  const { data: students } = userUniversalLoader(getStudentsDataFromDB);
  const { data: routes, error } = userUniversalLoader(getRoutesFromDB);
  const [alertError, setAlertError] = useState('');

  const currentUser = students.find(
    (student) => student.name === name && student.surname === surname
  );

  const isCurrentRouteExist = currentUser?.excursions?.find(
    ({ excursion }) => excursion === route.route
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRoute((prev) => ({ ...prev, date: e.target.value }));
    setAlertError('');
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!route.route) {
      setAlertError('isAlertVisible');
      return;
    }

    try {
      if (!isCurrentRouteExist) {
        const student = doc(db, 'children', currentUser!.email);

        await updateDoc(student, {
          excursions: arrayUnion({
            id: uuidv4(),
            date: route.date,
            excursion: route.route,
          }),
        });

        setAlertError('isRouteAdded');
        setRoute({ route: '', date: '' });
        addMarkerToTheMap(currentUser!.name, currentUser!.surname);
      } else {
        setAlertError('isCurrentRouteExist');
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  };

  const selectRoute = (event: ChangeEvent<HTMLSelectElement>) => {
    setRoute((prev) => ({
      ...prev,
      route: event.target.value,
      date: routes.find((elem) => elem.route === event.target.value)?.date || '',
    }));
    setAlertError('');
  };

  return (
    <>
      <div className='mt-5'>
        <Title fontSize={22}>Добавьте новый маршрут на карту!</Title>
      </div>
      {routes.length && (
        <Form onSubmit={onSubmit}>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Маршрут: </Form.Label>

            <Form.Select onChange={selectRoute} value={route.route} data-date={route.date}>
              <option>Выберите название маршрута</option>
              {routes.map(({ id, route }) => (
                <option key={id} value={route}>
                  {route}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Дата маршрута</Form.Label>
            <Form.Control
              onChange={handleChange}
              type='text'
              placeholder='Дата маршрута'
              value={route.date}
              disabled
            />
          </Form.Group>

          <Button className='mb-5' variant='warning' type='submit'>
            Добавить маршрут на карту
          </Button>

          {alertError && alerts[alertError]}
        </Form>
      )}
      {error && (
        <CustomAlert
          isShown={error}
          text='Упс..что-то пошло не так и мы не можем загрузить данные для добавления маршрута'
        />
      )}
    </>
  );
};
