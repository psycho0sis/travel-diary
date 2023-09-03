import { FC } from 'react';
import { useLoadReviewAuthor } from 'hooks/use-load-review-author';

import { IReview } from '../../../../hooks/types';

import './styles.scss';

type IReviewAuthor = IReview;

export const ReviewAuthor: FC<IReviewAuthor> = ({ id, email, review }) => {
  const [reviewAuthor] = useLoadReviewAuthor(email);

  return (
    <div className='reviewAuthor' key={id}>
      <div className='reviews__avatar'>
        <img src={reviewAuthor.photo} alt='Avatar' />
      </div>
      <div>
        <p className='reviewAuthor__name'>
          {reviewAuthor.name} {reviewAuthor.surname}
        </p>
        {review}
      </div>
    </div>
  );
};
