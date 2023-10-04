import type { FC } from 'react';

import { CustomAlert } from 'components/ui/alert';
import { Title } from 'components/ui/title';
import type { IUser } from 'hooks/types';

interface IStudentsMapper {
  students: IUser[];
  status: string;
}

export const StudentsMapper: FC<IStudentsMapper> = ({ students, status }) => (
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
    <CustomAlert isShown={status === 'error'} text='Мы не можем загрузить данные учеников' />
  </div>
);
