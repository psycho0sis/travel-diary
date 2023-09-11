import { FC } from 'react';
import { Alert } from 'react-bootstrap';
import type { IUser } from 'hooks/types';

import { Title } from 'components/ui/title';

interface IStudentsMapper {
  students: IUser[];
  status: string;
}

export const StudentsMapper: FC<IStudentsMapper> = ({ students, status }) => {
  if (status === 'error') {
    return (
      <Alert variant='warning'>
        Извините, что-то пошло не так и мы не можем загрузить данные пользователей
      </Alert>
    );
  }

  return (
    <div className='mt-3'>
      <Title fontSize={22}>Список учеников в группе:</Title>
      <ol>
        {students
          ?.filter((student) => student.role !== 'teacher')
          .map(({ name, surname, email }) => (
            <li key={email}>
              {name} {surname}
            </li>
          ))}
      </ol>
    </div>
  );
};
