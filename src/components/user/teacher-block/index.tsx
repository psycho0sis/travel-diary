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
import type { IUser } from 'hooks/types';
import { useLoadStudents } from 'hooks/use-load-students-group';
import { fetchStudents } from 'store/features/students/students-action';
import { useAppDispatch } from 'store/hooks';

import { db } from '../../../firebase';

import { StudentsMapper } from './students-mapper.tsx';

const DEFAULT_USER: IUser = {
  name: '',
  surname: '',
  role: 'student',
  email: '',
  password: '',
  photo: '',
};

export const TeacherBlock = () => {
  const [student, setStudent] = useState<IUser>(DEFAULT_USER);
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

  const checkIfStudentDataReady = (student: IUser) =>
    student.name && student.surname && student.email;

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!checkIfStudentDataReady(student)) {
      setError(true);
      setErrorText('Нужно заполнить поля');
      return;
    }

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
        setStudent(DEFAULT_USER);
        dispatch(fetchStudents(''));
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
