import type { FC } from 'react';
import { useLoadStudentsExcursionsData } from 'hooks/use-load-students-excursions-data';

import { Sortable } from 'components/table';
import { Loader } from 'components/ui/loader';

import './styles.scss';

interface IStudentsExcursions {
  name: string;
  surname: string;
}

export const StudentsExcursions: FC<IStudentsExcursions> = ({ name, surname }) => {
  const [user, loaded] = useLoadStudentsExcursionsData(name, surname);

  const { name: userName, surname: userSurname, photo, excursions } = user;

  return (
    <div className='user'>
      {loaded ? (
        <>
          <div className='user__header'>
            <img className='user__image' src={photo} />
            <div className='user__data'>
              <div className='user__data-group'>
                <p className='user__data-subtitle'>Имя:</p>
                <span className='user__data-item'>{userName}</span>
              </div>
              <div className='user__data-group'>
                <p className='user__data-subtitle'>Фамилия:</p>
                <span className='user__data-item'>{userSurname}</span>
              </div>
            </div>
          </div>
          <div className='user__excursions'>Посещенные экскурсии:</div>
          {excursions?.length && <Sortable excursions={excursions} />}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};
