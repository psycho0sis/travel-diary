import { type FC } from 'react';

import ErrorBoundary from 'components/ui/error-boundary';
import { DEFAULT_AVATAR } from 'constants/index';
import { useIsUserLogged } from 'hooks/use-is-user-logged';

import { FormComponent as Form } from './components/form';
import { Reviews } from './components/reviews';
import { IReviewForm } from './types';

import styles from './styles.module.scss';

export const ReviewForm: FC<IReviewForm> = ({ excursion }) => {
  const { user } = useIsUserLogged();

  return (
    <div className={styles.reviews}>
      <div className={styles.wrapper}>
        <div className={styles.avatar}>
          <img src={user.photo ? user.photo : DEFAULT_AVATAR} alt='Avatar' />
        </div>
        <Form excursion={excursion} />
      </div>
      <ErrorBoundary>
        <Reviews excursion={excursion} />
      </ErrorBoundary>
    </div>
  );
};
