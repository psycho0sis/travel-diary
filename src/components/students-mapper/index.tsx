import { Fragment } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useLoadAllStudents } from 'hooks/use-load-all-students';

import { Loader } from 'components/ui/loader';
import { Title } from 'components/ui/title';

import './styles.scss';

export const StudentsMapper = () => {
  const { students, error, loading } = useLoadAllStudents();

  if (error) {
    return (
      <Alert variant='warning'>
        Извините, что-то пошло не так и мы не можем загрузить данные пользователей
      </Alert>
    );
  }

  return (
    <div className='students'>
      <Title>10 "Б" класс</Title>
      {loading ? (
        <Loader />
      ) : (
        <div className='students__items'>
          {students
            ?.filter((student) => student.role !== 'teacher')
            .map(({ email, name, surname, photo }) => (
              <Fragment key={email}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant='top' src={photo} />
                  <Card.Body>
                    <Card.Title>
                      {name} {surname}
                    </Card.Title>
                    <Button variant='dark' href={`/students/${name}-${surname}`}>
                      Перейти к пройденным экскурсиям
                    </Button>
                  </Card.Body>
                </Card>
              </Fragment>
            ))}
        </div>
      )}
    </div>
  );
};
