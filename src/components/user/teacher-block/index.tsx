import { type FocusEvent,FormEvent, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

import { Title } from 'components/ui/title';
import { createPassword } from 'helpers/create-password';
import { onFocus } from 'helpers/form-helpers';
import type { IUser } from 'hooks/types';
import { fetchExcursions } from 'store/features/excursions/excursions-action';
import { fetchStudents } from 'store/features/students/students-action';
import { useAppDispatch } from 'store/hooks';

import { db } from '../../../firebase';
import { useLoadStudents } from '../hooks/use-load-students-group';

import { StudentsMapper } from './students-mapper.tsx';

export const TeacherBlock = () => {
  const [student, setStudent] = useState<IUser>({
    name: '',
    surname: '',
    role: 'student',
    email: '',
    password: '',
    photo: '',
  });
  const [isStudentAdded, setIsStudentAdded] = useState(false);
  const [error, setError] = useState(false);
  const { students, asyncStatus: status } = useLoadStudents();
  const dispatch = useAppDispatch();

  const handleChange = (event: FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setIsStudentAdded(false);
    setError(false);

    setStudent((prevStudentData) => {
      return {
        ...prevStudentData,
        [name]: value,
      };
    });
  };

  const checkIfStudentDataReady = (student: IUser) =>
    student.name && student.surname && student.email;

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!checkIfStudentDataReady(student)) {
      return;
    }

    try {
      if (checkIfStudentDataReady(student)) {
        await setDoc(doc(db, 'children', student.email), {
          name: student.name,
          surname: student.surname,
          role: 'student',
          email: student.email,
          password: createPassword(student.name, student.surname),
          photo: '',
        });

        const auth = getAuth();

        createUserWithEmailAndPassword(
          auth,
          student.email,
          createPassword(student.name, student.surname)
        )
          .then(() => {
            setIsStudentAdded(true);

            setStudent({
              name: '',
              surname: '',
              role: 'student',
              email: '',
              password: '',
              photo: '',
            });
            dispatch(fetchStudents(''));
            dispatch(fetchExcursions({ name: student.name, surname: student.surname }));
          })
          .catch((error) => {
            if (error.code === 'auth/email-already-in-use') {
              setError(true);
              setIsStudentAdded(false);
            }
          });
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  };

  return (
    <>
      <StudentsMapper students={students} status={status} />

      <Title fontSize={22}>Добавьте нового ученика в группу!</Title>

      <Form onSubmit={onSubmit}>
        <Form.Group className='mb-3' controlId='form.ControlInput2'>
          <Form.Label>Ведите имя ученика: </Form.Label>
          <Form.Control
            type='text'
            name='name'
            placeholder='Иван'
            onFocus={onFocus}
            onChange={handleChange}
            value={student.name}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='form.ControlInput3'>
          <Form.Label>Ведите фамилию ученика: </Form.Label>
          <Form.Control
            type='text'
            name='surname'
            placeholder='Иванов'
            onFocus={onFocus}
            onChange={handleChange}
            value={student.surname}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='form.ControlInput2'>
          <Form.Label>Ведите email ученика: </Form.Label>
          <Form.Control
            type='email'
            name='email'
            placeholder='email@mail.ru'
            onFocus={onFocus}
            onChange={handleChange}
            value={student.email}
          />
        </Form.Group>

        <Button className='mb-5' variant='warning' type='submit'>
          Добавьте нового ученика
        </Button>

        {error && <Alert variant='danger'>Такой email уже используется!</Alert>}
        {!error && isStudentAdded && (
          <Alert variant='success'>Новый ученик успешно добавлен в группу!</Alert>
        )}
      </Form>
    </>
  );
};
