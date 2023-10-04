import { type FC } from 'react';

import { getReviewAuthorFromDB } from 'api/get-review-author-from-db';
import { DEFAULT_AVATAR } from 'constants/index';
import { formatDate } from 'helpers/format-date';
import { userUniversalLoader } from 'hooks/use-universal-loader';

import { TReview } from '../../../../hooks/types';

import styles from '../../styles.module.scss';

export const Review: FC<TReview> = ({ date, email, review }) => {
  const {
    data: { photo, name, surname },
  } = userUniversalLoader(() => getReviewAuthorFromDB(email));

  const formattedDate = date && formatDate(date);

  return (
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
  );
};
