import { FC } from 'react';
import { getReviewAuthorFromDB } from 'api/get-review-author-from-db';
import { userUniversalLoader } from 'hooks/use-universal-loader';

import { IReview } from '../../../../hooks/types';

import './styles.scss';

export const ReviewAuthor: FC<IReview> = ({ id, email, review }) => {
  const { data: reviewAuthor } = userUniversalLoader(() => getReviewAuthorFromDB(email));

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
      <div>
        <p className='review-author__name'>
          {reviewAuthor.name} {reviewAuthor.surname}
        </p>
        {review}
      </div>
    </div>
  );
};
