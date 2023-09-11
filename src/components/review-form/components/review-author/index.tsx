import { FC } from 'react';
import { useLoadReviewAuthor } from 'hooks/use-load-review-author';

import { IReview } from '../../../../hooks/types';

import './styles.scss';

type IReviewAuthor = IReview;

export const ReviewAuthor: FC<IReviewAuthor> = ({ id, email, review }) => {
  const { reviewAuthor } = useLoadReviewAuthor(email);

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
