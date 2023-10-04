import { type FC, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Loader } from 'components/ui/loader';
import { checkRightPostfix } from 'helpers/check-right-postfix';
import { fetchReviews } from 'store/features/reviews/reviews-action';
import { selectAsyncReviews, selectAsyncStatus } from 'store/features/reviews/reviews-selectors';
import { useAppDispatch } from 'store/hooks';

import { Review } from '../review';

import styles from '../../styles.module.scss';

interface IReviews {
  excursion: string;
}

export const Reviews: FC<IReviews> = ({ excursion }) => {
  const dispatch = useAppDispatch();

  const asyncReviews = useSelector(selectAsyncReviews);
  const status = useSelector(selectAsyncStatus);

  useEffect(() => {
    dispatch(fetchReviews(excursion));
  }, []);

  const amountOfReviews = `${asyncReviews?.length || 0} ${checkRightPostfix(
    asyncReviews?.length || 0
  )}`;

  return (
    <div className={styles.messages}>
      <p className={styles.amount}>Всего {amountOfReviews}</p>
      {status === 'loading' ? (
        <Loader />
      ) : (
        asyncReviews?.map((review) => <Review key={review.id} {...review} />)
      )}
    </div>
  );
};
