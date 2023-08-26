import { FC, FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import { IReview, useLoadReviews } from 'hooks/use-load-reviews';
import { useLoadUserData } from 'hooks/use-load-user-data';

import { db } from '../../firebase';
import { getSession, isLoggedIn } from '../../session';

import './styles.scss';

export interface IReviewForm {
  excursion: string;
}

export const ReviewForm: FC<IReviewForm> = ({ excursion }) => {
  const [review, setReview] = useState('');
  const [isNotLogged, setIsNotLogged] = useState(true);

  const [email, setEmail, user] = useLoadUserData();
  const [reviews, loading] = useLoadReviews(excursion);
  const navigate = useNavigate();

  useEffect(() => {
    const session = getSession();
    session && setEmail(session.email as string);
  }, [navigate]);

  // TODO нужен redux чтобы обновлять глобальный стейт и уведомлять о комментариях в реальном времени

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!isLoggedIn()) {
      setIsNotLogged(false);
    }

    if (!review) {
      setReview('');

      return;
    }

    try {
      isNotLogged &&
        (await addDoc(collection(db, 'reviews'), {
          id: 0,
          excursion: 'Вороново-Лида',
          review: review,
          email: email,
        }));
      setReview('');
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  };

  return (
    <div className='reviews'>
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
          placeholder='Присоединиться к обсуждению'
        />
        {!isNotLogged && (
          <span>только авторизированные пользователи могут оставлять комментарии</span>
        )}
        <button className='reviews__button' type='submit' value={review}>
          Отправить
        </button>
      </form>
      {!loading && reviews.map((review) => <p key={review.id}>{review.review}</p>)}
    </div>
  );
};
