import type { FC } from 'react';

import { CustomAlert } from 'components/ui/alert';

import { IStudentsMapper } from '../../types';

export const StudentsMapper: FC<IStudentsMapper> = ({ students, status }) => (
  <>
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
  </>
);
