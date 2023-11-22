import { FC, FormEvent, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

import { getStudentsDataFromDB } from 'api/get-students-data-from-db';
import { routes } from 'components/google-map-with-markers-start/config';
import { Title } from 'components/ui/title';
import { userUniversalLoader } from 'hooks/use-universal-loader';

import { db } from '../../../firebase';

interface IExcursionForm {
  addMarkerToTheMap: (name: string, surname: string) => void;
  name: string;
  surname: string;
}

export const ExcursionForm: FC<IExcursionForm> = ({ addMarkerToTheMap, name, surname }) => {
  const [route, setRoute] = useState({ route: '', date: '' });
  const [isRouteAdded, setIsRouteAdded] = useState(false);
  const { data: students } = userUniversalLoader(getStudentsDataFromDB);

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

  return (
    <>
      <div className='mt-5'>
        <Title fontSize={22}>Добавьте новый маршрут на карту!</Title>
      </div>
      <Form onSubmit={onSubmit}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Маршрут: </Form.Label>

          <Form.Select
            onChange={(e) => {
              setRoute((prev) => ({
                ...prev,
                route: e.target.value,
                date: routes.find((elem) => elem.route === e.target.value)?.date || '',
              }));
              setIsRouteAdded(false);
            }}
            value={route.route}
            data-date={route.date}
          >
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
            placeholder='Введите дату маршрута'
            value={route.date}
          />
        </Form.Group>

        <Button className='mb-5' variant='warning' type='submit'>
          Добавить маршрут на карту
        </Button>

        {isRouteAdded && <Alert variant='success'>Новый маршрут успешно добавлен на карту!</Alert>}
      </Form>
    </>
  );
};
