import type { FC } from 'react';
import { IUser } from 'hooks/types';

import { Title } from 'components/ui/title';

export const UserData: FC<IUser> = ({ photo, email, name, surname }) => (
  <div className='user__header'>
    <img className='user__image' src={photo} />
    <div className='user__data'>
      <Title fontSize={24}>Ваши данные: </Title>
      <div className='user__data-group'>
        <p className='user__data-subtitle'>Электронная почта:</p>
        <span className='user__data-item'>{email}</span>
      </div>
      <div className='user__data-group'>
        <p className='user__data-subtitle'>Имя:</p>
        <span className='user__data-item'>{name}</span>
      </div>
      <div className='user__data-group'>
        <p className='user__data-subtitle'>Фамилия:</p>
        <span className='user__data-item'>{surname}</span>
      </div>
    </div>
  </div>
);
