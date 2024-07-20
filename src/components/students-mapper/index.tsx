import { Fragment } from 'react';
import Card from 'react-bootstrap/Card';

import { getStudentsDataFromDB } from 'api/get-students-data-from-db';
import { CustomAlert } from 'components/ui/alert';
import { ButtonLink } from 'components/ui/button-link';
import { Loader } from 'components/ui/loader';
import { Title } from 'components/ui/title';
import { userUniversalLoader } from 'hooks/use-universal-loader';

import styles from './styles.module.scss';

export const StudentsMapper = () => {
  const { data: students, error, loading } = userUniversalLoader(getStudentsDataFromDB);

  const isStudentsExist = students.length > 0;

  return (
    <>
      {loading && <Loader />}
      {isStudentsExist && <Title>10 "Б" класс</Title>}
      <div className={styles.students}>
        {students
          ?.filter((student) => student.role !== 'teacher')
          .map(({ email, name, surname, photo }) => (
            <Fragment key={email}>
              <Card bg='light' style={{ width: '18rem' }}>
                <Card.Img className={styles.image} variant='bottom' src={photo} />
                <Card.Body>
                  <Card.Title>
                    {name} {surname}
                  </Card.Title>
                  <ButtonLink
                    variant='dark'
                    href={`/students/${name}-${surname}`}
                    text='Перейти к пройденным экскурсиям'
                  />
                </Card.Body>
              </Card>
            </Fragment>
          ))}
      </div>
      <CustomAlert isShown={error} text='Мы не можем загрузить данные пользователей' />
    </>
  );
};
