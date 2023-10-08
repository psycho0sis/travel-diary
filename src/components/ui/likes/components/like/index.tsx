import type { FC } from 'react';

import { HeartSvg } from '../svg-heart';

import styles from '../../styles.module.scss';

interface ILike {
  amountOfLikes: number;
  isUserAlreadyLiked: boolean;
  decreaseAmountOfLikes: () => void;
  increaseAmountOfLikes: () => void;
}

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
