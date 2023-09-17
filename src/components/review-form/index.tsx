import { FC, FormEvent, useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import { useSelector } from 'react-redux';
import { addDoc, collection } from 'firebase/firestore';
import { useLoadUserData } from 'hooks/use-load-user-data';
import { fetchReviews } from 'store/features/reviews/reviews-action';
import { selectAsyncReviews, selectAsyncStatus } from 'store/features/reviews/reviews-selectors';
import { useAppDispatch } from 'store/hooks';
import { v4 as uuidv4 } from 'uuid';

import { Loader } from 'components/ui/loader';

import { db } from '../../firebase';

import { ReviewAuthor } from './components/review-author';
import { checkRightForm } from './config';

import './styles.scss';

export interface IReviewForm {
  excursion: string;
}

export const ReviewForm: FC<IReviewForm> = ({ excursion }) => {
  const [review, setReview] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const { user } = useLoadUserData();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchReviews(excursion));
  }, []);

  useEffect(() => {
    if (!user) {
      setIsLogged(false);
    } else {
      setIsLogged(true);
    }
  }, [user]);

  const asyncReviews = useSelector(selectAsyncReviews);
  const status = useSelector(selectAsyncStatus);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!review) {
      setReview('');

      return;
    }

    try {
      if (isLogged) {
        await addDoc(collection(db, 'reviews'), {
          id: uuidv4(),
          excursion: excursion,
          review: review,
          email: user.email,
        });

        setReview('');
        dispatch(fetchReviews(excursion));
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  };

  const onFocus = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    event.target.placeholder = '';

    return;
  };

  return (
    <div className='reviews'>
      <div className='reviews__wrapper'>
        <div className='reviews__avatar'>
          <img
            src={
              user.photo
                ? user.photo
                : 'https://secure.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=56'
            }
            alt='Avatar'
          />
        </div>
        <form onSubmit={onSubmit} className='reviews__form'>
          <textarea
            className='reviews__textarea'
            onChange={(e) => setReview(e.target.value)}
            onFocus={onFocus}
            placeholder='Присоединиться к обсуждению...'
            value={review}
          />
          {!isLogged && (
            <Alert className='mt-3' variant='danger'>
              Только авторизированные пользователи могут оставлять комментарии
            </Alert>
          )}
          <button className='reviews__button' type='submit' value={review}>
            Отправить
          </button>
        </form>
      </div>
      <div className='reviews__messages'>
        <p className='reviews__amount'>
          Всего {asyncReviews?.length || 0} {checkRightForm(asyncReviews?.length)}
        </p>
        {status !== 'loading' &&
          asyncReviews?.map((review) => <ReviewAuthor key={review.id} {...review} />)}
        {status === 'loading' && <Loader />}
      </div>
    </div>
  );
};
