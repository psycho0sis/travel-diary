import { type FC } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import defaultAvatar from 'assets/default-avatar.png';
import { onFocus } from 'helpers/form-helpers';
import { useUploadUserPhoto } from 'hooks/use-upload-user-photo';
import type { IUser } from 'store/features/students/types';

import styles from './styles.module.scss';

export const UserData: FC<IUser> = ({ email, name, surname, role, showAvatarBlock = false }) => {
  const { currentUserPhoto, handleChange, onSubmit } = useUploadUserPhoto(email);

  return (
    <div className={styles.header}>
      <img className={styles.userImage} src={currentUserPhoto || defaultAvatar} />

      <div className={styles.userData}>
        <h3 className='mb-4'>Ваши данные: </h3>
        <div className={styles.userDataGroup}>
          <p className={styles.userDataSubtitle}>Имя:</p>
          <span className={styles.userDataItem}>{name || 'Unknown'}</span>
        </div>
        <div className={styles.userDataGroup}>
          <p className={styles.userDataSubtitle}>Фамилия:</p>
          <span className={styles.userDataItem}>{surname || 'Unknown'}</span>
        </div>
        <div className={styles.userDataGroup}>
          <p className={styles.userDataSubtitle}>Электронная почта:</p>
          <span className={styles.userDataItem}>{email}</span>
        </div>

        {role === 'teacher' && (
          <div className={styles.userDataGroup}>
            <p className={styles.userDataSubtitle}>Роль:</p>
            <span className={styles.userDataItem}>Руководитель проекта</span>
          </div>
        )}

        {showAvatarBlock && (
          <Form className='mt-3' onSubmit={onSubmit}>
            <Form.Group controlId='formFileMultiple' className='mb-3'>
              <Form.Label>Поменять аватар: </Form.Label>
              <Form.Control type='file' name='photo' onFocus={onFocus} onChange={handleChange} />
            </Form.Group>
            <Button className='mb-5' variant='dark' type='submit'>
              Применить
            </Button>
          </Form>
        )}
      </div>
    </div>
  );
};
