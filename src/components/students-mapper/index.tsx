import { Fragment } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { getStudentsDataFromDB } from 'api/get-students-data-from-db';
import { Loader } from 'components/ui/loader';
import { Title } from 'components/ui/title';
import { userUniversalLoader } from 'hooks/use-universal-loader';

import './styles.scss';

export const StudentsMapper = () => {
  const { data: students, error, loading } = userUniversalLoader(getStudentsDataFromDB);

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
