import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { type FC, FormEvent, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addDoc, collection } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

import { CustomAlert } from 'components/ui/alert';
import { useIsUserLogged } from 'hooks/use-is-user-logged';
import { useUploadPicture } from 'hooks/use-upload-picture';
import { fetchReviews } from 'store/features/reviews/reviews-action';
import { useAppDispatch } from 'store/hooks';

import { db } from './../../../../firebase';

import styles from '../../styles.module.scss';

interface IFormComponent {
  excursion: string;
}

export const FormComponent: FC<IFormComponent> = ({ excursion }) => {
  const { isLogged, isLoggedError, setIsLoggedError, user } = useIsUserLogged();
  const [review, setReview] = useState('');
  const dispatch = useAppDispatch();
  const { handleChange, onSubmit: onSubmitPhoto } = useUploadPicture(user.email || '', excursion);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    onSubmitPhoto(event);

    if (!review) {
      setIsLoggedError('Заполните поле');
      return;
    }

    try {
      if (isLogged) {
        await addDoc(collection(db, 'reviews'), {
          id: uuidv4(),
          date: new Date().toISOString(),
          excursion: excursion,
          review: review,
          email: user.email,
        });

        setReview('');
        dispatch(fetchReviews(excursion));
      } else {
        setIsLoggedError('Только авторизированные пользователи могут оставлять комментарии');
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
        setIsLoggedError('Что-то пошло не так на сервере');
      }
    }
  };

  return (
    <Form onSubmit={onSubmit} className={styles.form}>
      <div className={styles.formPanel}>
        <textarea
          className={styles.textarea}
          cols={20}
          name='text'
          onChange={(e) => setReview(e.target.value)}
          placeholder='Присоединиться к обсуждению...'
          value={review}
        />
        <div className={styles.formControls}>
          <FontAwesomeIcon icon={faPaperclip} size='xl' style={{ color: '#737373' }} />
          <input type='file' onChange={handleChange} />
        </div>
      </div>
      <CustomAlert isShown={!!isLoggedError} text={isLoggedError} />
      <Button className='mt-3' variant='dark' type='submit' size='lg'>
        Отправить
      </Button>
    </Form>
  );
};
