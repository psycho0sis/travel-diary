import { type FC, FormEvent, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { faCircleXmark,faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addDoc, collection } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

import { CustomAlert } from 'components/ui/alert';
import { onFocus } from 'helpers/form-helpers';
import { useIsUserLogged } from 'hooks/use-is-user-logged';
import { useUploadPicture } from 'hooks/use-upload-picture';
import { fetchReviews } from 'store/features/reviews/reviews-action';
import { useAppDispatch } from 'store/hooks';

import { db } from './../../../../firebase';

import styles from './styles.module.scss';

interface IFormComponent {
  excursion: string;
}

export const FormComponent: FC<IFormComponent> = ({ excursion }) => {
  const [review, setReview] = useState('');

  const { isLogged, isLoggedError, setIsLoggedError, user } = useIsUserLogged();
  const { pictureUrls, setPictureUrls, handleChange, deletePhoto } = useUploadPicture();

  const dispatch = useAppDispatch();

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!review) {
      setIsLoggedError('Заполните, пожалуйста, поле.');
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
          reviewLikes: {
            likes: 0,
            userEmails: [],
          },
          photos: pictureUrls,
        });

        setReview('');
        setPictureUrls([]);
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
          <Form.Group className={styles.paperClipWrapper} controlId='formFileMultiple'>
            <Form.Label>
              <FontAwesomeIcon icon={faPaperclip} size='xl' style={{ color: '#737373' }} />
            </Form.Label>
            <Form.Control type='file' name='photo' onFocus={onFocus} onChange={handleChange} />
          </Form.Group>

          <div className={styles.imagesWrapper}>
            {pictureUrls?.map((pictureUrl, index) => (
              <div className={styles.imageWrapper} key={pictureUrl}>
                <button className={styles.deleteBtn} onClick={() => deletePhoto(index)}>
                  <FontAwesomeIcon icon={faCircleXmark} size='xl' style={{ color: '#737373' }} />
                </button>
                <img className={styles.image} src={pictureUrl} alt='Фотография к отзыву' />
              </div>
            ))}
          </div>
        </div>
      </div>
      <CustomAlert isShown={!!isLoggedError} text={isLoggedError} />
      <Button className='mt-3' variant='dark' type='submit' size='lg'>
        Отправить
      </Button>
    </Form>
  );
};
