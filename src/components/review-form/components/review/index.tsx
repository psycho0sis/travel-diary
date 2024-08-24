import { type FC, useEffect, useState } from 'react';
import Lightbox, { SlideImage } from 'yet-another-react-lightbox';

import { getReviewAuthorFromDB } from 'api/get-review-author-from-db';
import { DEFAULT_AVATAR } from 'constants/index';
import { formatDate } from 'helpers/format-date';
import { useIsUserLogged } from 'hooks/use-is-user-logged';
import { userUniversalLoader } from 'hooks/use-universal-loader';
import { TReview } from 'store/types';

import { LikeInContextOfReview } from '../like-component';

import 'yet-another-react-lightbox/styles.css';
import styles from './styles.module.scss';

export const Review: FC<TReview> = ({ id, data }) => {
  const [slides, setSlides] = useState<SlideImage[]>([]);
  const [open, setOpen] = useState(false);

  const { date, excursion, email, review, reviewLikes, photos } = data;
  const {
    data: { photo, name, surname },
  } = userUniversalLoader(() => getReviewAuthorFromDB(email));
  const { user } = useIsUserLogged();
  const [isUserAlreadyLiked, setIsUserAlreadyLiked] = useState(false);

  useEffect(() => {
    setSlides(
      photos?.map((item) => ({
        src: item,
      }))
    );
  }, [photos]);

  useEffect(() => {
    if (reviewLikes.userEmails.includes(user.email)) {
      setIsUserAlreadyLiked(true);
    }
  }, [user.email, reviewLikes.userEmails]);

  return (
    <div className={styles.reviewWrapper}>
      <div className={styles.userInfo}>
        <div className={styles.avatar}>
          <img src={photo ? photo : DEFAULT_AVATAR} alt='Avatar' />
        </div>
        <div className={styles.userInfoDetails}>
          <p className={styles.name}>
            {name} {surname}
          </p>
          <p className={styles.date}>добавлено {formatDate(date)}</p>
        </div>
      </div>
      <div className={styles.review}>
        {review}
        <div className={styles.photosWrapper}>
          <div className={styles.photos}>
            {photos?.map((photo) => (
              <div className={styles.photoWrapper} key={photo}>
                <img src={photo} alt='' onClick={() => setOpen(true)} />
              </div>
            ))}
          </div>
          <Lightbox open={open} close={() => setOpen(false)} slides={slides} />
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
