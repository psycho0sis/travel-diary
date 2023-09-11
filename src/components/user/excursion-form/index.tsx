import { FC, FormEvent, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { onFocus } from 'helpers/form-helpers';
import { useLoadStudentsExcursionsData } from 'hooks/use-load-students-excursions-data';
import { v4 as uuidv4 } from 'uuid';

import { Title } from 'components/ui/title';

import { db } from '../../../firebase';

interface IExcursionForm {
  addMarkerToTheMap: (name: string, surname: string) => void;
  name: string;
  surname: string;
}

export const ExcursionForm: FC<IExcursionForm> = ({ addMarkerToTheMap, name, surname }) => {
  const [date, setDate] = useState<string>('');
  const [route, setRoute] = useState<string>('');
  const [isRouteAdded, setIsRouteAdded] = useState<boolean>(false);
  const [user] = useLoadStudentsExcursionsData(name, surname);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!route) {
      setRoute('');

      return;
    }

    if (!date) {
      setDate('');

      return;
    }

    try {
      if (route && date) {
        const student = doc(db, 'children', user.email);

        await updateDoc(student, {
          excursions: arrayUnion({
            id: uuidv4(),
            date: date,
            excursion: route,
          }),
        });

        setIsRouteAdded(true);

        setDate('');
        setRoute('');
        addMarkerToTheMap(user.name, user.surname);
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
          <Form.Label>Маршрут</Form.Label>
          <Form.Control
            onChange={(e) => {
              setRoute(e.target.value);
              setIsRouteAdded(false);
            }}
            onFocus={onFocus}
            type='text'
            placeholder='Введите название маршрута'
            value={route}
          />
          <Form.Text className='text-muted'>
            Название маршрута указывается в формате "Точка А - Точка Б"
          </Form.Text>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Дата маршрута</Form.Label>
          <Form.Control
            onChange={(e) => {
              setDate(e.target.value);
              setIsRouteAdded(false);
            }}
            onFocus={onFocus}
            type='text'
            placeholder='Введите дату маршрута'
            value={date}
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
