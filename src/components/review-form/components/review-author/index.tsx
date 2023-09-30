import { FC } from 'react';
import { getReviewAuthorFromDB } from 'api/get-review-author-from-db';
import { formatDate } from 'helpers/format-date';
import { userUniversalLoader } from 'hooks/use-universal-loader';

import { TReview } from '../../../../hooks/types';

import './styles.scss';

export const ReviewAuthor: FC<TReview> = ({ id, date, email, review }) => {
  const { data: reviewAuthor } = userUniversalLoader(() => getReviewAuthorFromDB(email));

  const formattedDate = date && formatDate(date);

  return (
    <div className='review-author' key={id}>
      <div className='reviews__avatar'>
        <img
          src={
            reviewAuthor.photo
              ? reviewAuthor.photo
              : 'https://secure.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=56'
          }
          alt='Avatar'
        />
      </div>
      <div className='review-author__contentWrapper'>
        <div className='review-author__content'>
          <p className='review-author__name'>
            {reviewAuthor.name} {reviewAuthor.surname}
          </p>
          <p className='review-author__date'>добавлено {formattedDate}</p>
        </div>
        {review}
      </div>
    </div>
  );
};
