import { type FocusEvent, FormEvent, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

import { CustomAlert } from 'components/ui/alert';
import { Title } from 'components/ui/title';
import { createPassword } from 'helpers/create-password';
import { onFocus } from 'helpers/form-helpers';
import { useLoadStudents } from 'hooks/use-load-students-group';
import { fetchStudents } from 'store/features/students/students-action';
import type { IUser } from 'store/features/students/types';
import { useAppDispatch } from 'store/hooks';

import { db } from '../../../firebase';
import { DEFAULT_USER } from '../config';

import { StudentsMapper } from './students-mapper.tsx';

export const TeacherBlock = () => {
  const [student, setStudent] = useState<IUser>(DEFAULT_USER);
  const { email, name, surname } = student;
  const [isStudentAdded, setIsStudentAdded] = useState(false);
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState('');
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

  const checkIfStudentDataReady = ({ email, name, surname }: IUser) => name && surname && email;

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!checkIfStudentDataReady(student)) {
      setError(true);
      setErrorText('Нужно заполнить поля');
      return;
    }

    await setDoc(doc(db, 'children', email), {
      name: name,
      surname: surname,
      role: 'student',
      email: email,
      password: createPassword(name, surname),
      photo: '',
    });

    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, createPassword(name, surname))
      .then(() => {
        setIsStudentAdded(true);
        setStudent(DEFAULT_USER);
        dispatch(fetchStudents());
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          setError(true);
          setErrorText('Такой email уже используется!');
          setIsStudentAdded(false);
        }
      });
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
            value={name}
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
            value={surname}
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
            value={email}
          />
        </Form.Group>

        <Button className='mb-5' variant='warning' type='submit'>
          Добавьте нового ученика
        </Button>

        <CustomAlert isShown={error} text={errorText} />
        {!error && isStudentAdded && (
          <Alert dismissible variant='success'>
            Новый ученик успешно добавлен в группу!
          </Alert>
        )}
      </Form>
    </>
  );
};
