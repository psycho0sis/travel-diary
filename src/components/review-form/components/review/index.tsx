import { type FC, useEffect, useState } from 'react';

import { getReviewAuthorFromDB } from 'api/get-review-author-from-db';
import { DEFAULT_AVATAR } from 'constants/index';
import { formatDate } from 'helpers/format-date';
import { useIsUserLogged } from 'hooks/use-is-user-logged';
import { userUniversalLoader } from 'hooks/use-universal-loader';

import { TReview } from '../../../../hooks/types';
import { LikeInContextOfReview } from '../like-component';

import styles from '../../styles.module.scss';

export const Review: FC<TReview> = ({ id, data }) => {
  const { date, excursion, email, review, reviewLikes } = data;
  const {
    data: { photo, name, surname },
  } = userUniversalLoader(() => getReviewAuthorFromDB(email));
  const { user } = useIsUserLogged();
  const [isUserAlreadyLiked, setIsUserAlreadyLiked] = useState(false);

  const formattedDate = date ? formatDate(date) : 'Дата добавление неизвестна';

  useEffect(() => {
    if (reviewLikes.userEmails.includes(user.email)) {
      setIsUserAlreadyLiked(true);
    }
  }, [user.email, reviewLikes.userEmails]);

  return (
    <div className={styles.reviewWrapper}>
      <div className={styles.review}>
        <div className={styles.avatar}>
          <img src={photo ? photo : DEFAULT_AVATAR} alt='Avatar' />
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <p className={styles.name}>
              {name} {surname}
            </p>
            <p className={styles.date}>добавлено {formattedDate}</p>
          </div>
          {review}
        </div>
      </div>
      <LikeInContextOfReview
        isUserAlreadyLiked={isUserAlreadyLiked}
        setIsUserAlreadyLiked={setIsUserAlreadyLiked}
        review={review}
        excursion={excursion}
        likes={reviewLikes}
        reviewsDocumentId={id}
      />
    </div>
  );
};
