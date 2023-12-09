import type { FC } from 'react';

import { ILike } from '../../types';
import { HeartSvg } from '../svg-heart';

import styles from '../../styles.module.scss';

export const Like: FC<ILike> = ({
  amountOfLikes,
  isUserAlreadyLiked,
  decreaseAmountOfLikes,
  increaseAmountOfLikes,
}) => (
  <div className={styles.likeWrapper}>
    <HeartSvg
      onClick={isUserAlreadyLiked ? decreaseAmountOfLikes : increaseAmountOfLikes}
      isFilled={isUserAlreadyLiked}
    />
    {amountOfLikes}
  </div>
);
