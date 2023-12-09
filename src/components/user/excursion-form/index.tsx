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

export const ExcursionForm: FC<IExcursionForm> = ({ addMarkerToTheMap, name, surname }) => {
  const [route, setRoute] = useState({ route: '', date: '' });
  const [isRouteAdded, setIsRouteAdded] = useState(false);
  const { data: students } = userUniversalLoader(getStudentsDataFromDB);
  const { data: routes, error } = userUniversalLoader(getRoutesFromDB);

  const currentUser = students.find(
    (student) => student.name === name && student.surname === surname
  );

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!route) {
      setRoute({ route: '', date: '' });
      return;
    }

    try {
      if (Object.values(route).length) {
        const student = doc(db, 'children', currentUser!.email);

        await updateDoc(student, {
          excursions: arrayUnion({
            id: uuidv4(),
            date: route.date,
            excursion: route.route,
          }),
        });

        setIsRouteAdded(true);
        setRoute({ route: '', date: '' });
        addMarkerToTheMap(currentUser!.name, currentUser!.surname);
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
    setIsRouteAdded(false);
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
              {routes.map((route) => (
                <option value={route.route}>{route.route}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Дата маршрута</Form.Label>
            <Form.Control
              onChange={(e) => {
                setRoute((prev) => ({ ...prev, date: e.target.value }));
                setIsRouteAdded(false);
              }}
              type='text'
              placeholder='Дата маршрута'
              value={route.date}
              disabled
            />
          </Form.Group>

          <Button className='mb-5' variant='warning' type='submit'>
            Добавить маршрут на карту
          </Button>

          {isRouteAdded && (
            <Alert variant='success'>Новый маршрут успешно добавлен на карту!</Alert>
          )}
        </Form>
      )}
      {error && (
        <>
          <CustomAlert
            isShown={error}
            text='Упс..что-то пошло не так и мы не можем загрузить данные для добавления маршрута'
          />
        </>
      )}
    </>
  );
};
