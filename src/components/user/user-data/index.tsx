import { type FC } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { onFocus } from 'helpers/form-helpers';
import { IUser } from 'hooks/types';

import { Title } from 'components/ui/title';

import { useUploadUserPhoto } from '../hooks/use-upload-user-photo';

export const UserData: FC<IUser> = ({ email, name, surname, role }) => {
  const { currentUserPhoto, handleChange, onSubmit } = useUploadUserPhoto(email);

  return (
    <div className='user__header'>
      <img className='user__image' src={currentUserPhoto} />
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
        {role === 'teacher' && (
          <div className='user__data-group'>
            <p className='user__data-subtitle'>Роль:</p>
            <span className='user__data-item'>Руководитель проекта</span>
          </div>
        )}
        <Form className='mt-3' onSubmit={onSubmit}>
          <Form.Group controlId='formFileMultiple' className='mb-3'>
            <Form.Label>Поменять аватар: </Form.Label>
            <Form.Control type='file' name='photo' onFocus={onFocus} onChange={handleChange} />
          </Form.Group>
          <Button className='mb-5' variant='dark' type='submit'>
            Применить
          </Button>
        </Form>
      </div>
    </div>
  );
};
