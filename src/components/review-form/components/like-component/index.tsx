import { type FC, Dispatch, SetStateAction, useEffect, useState } from 'react';
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';

import { CustomAlert } from 'components/ui/alert';
import { Like } from 'components/ui/likes/components/like';
import type { TReviewLikes } from 'hooks/types';
import { useIsUserLogged } from 'hooks/use-is-user-logged';
import { fetchReview } from 'store/features/review/review-action';
import { useAppDispatch } from 'store/hooks';

import { db } from '../../../../firebase';

interface ILikeInContextOfReview {
  likes: TReviewLikes;
  isUserAlreadyLiked: boolean;
  setIsUserAlreadyLiked: Dispatch<SetStateAction<boolean>>;
  review: string;
  excursion: string;
  reviewsDocumentId: string;
}

export const LikeInContextOfReview: FC<ILikeInContextOfReview> = ({
  likes,
  isUserAlreadyLiked,
  setIsUserAlreadyLiked,
  excursion,
  review,
  reviewsDocumentId,
}) => {
  const [amountOfLikes, setAmountOfLikes] = useState(0);
  const dispatch = useAppDispatch();

  const {
    isLogged,
    isLoggedError,
    setIsLoggedError,
    user: { email },
  } = useIsUserLogged();

  useEffect(() => {
    setAmountOfLikes(Number(likes.likes));
  }, [likes.likes]);

  const likesDoc = doc(db, 'reviews', reviewsDocumentId);

  const increaseAmountOfLikes = async () => {
    if (isLogged) {
      setAmountOfLikes((prev) => prev + 1);
      setIsUserAlreadyLiked((prev: boolean) => !prev);

      await updateDoc(likesDoc, {
        'reviewLikes.likes': amountOfLikes + 1,
        'reviewLikes.userEmails': arrayUnion(email),
      });

      dispatch(fetchReview({ excursion, review }));
    }
    setIsLoggedError('Реакции доступны только авторизированным пользователям');
  };

  const decreaseAmountOfLikes = async () => {
    if (isLogged) {
      setAmountOfLikes((prev) => prev - 1);
      setIsUserAlreadyLiked((prev: boolean) => !prev);

      await updateDoc(likesDoc, {
        'reviewLikes.likes': amountOfLikes - 1,
        'reviewLikes.userEmails': arrayRemove(email),
      });

      dispatch(fetchReview({ excursion, review }));
    }
    setIsLoggedError('Реакции доступны только авторизированным пользователям');
  };

  return (
    <>
      <Like
        amountOfLikes={amountOfLikes}
        decreaseAmountOfLikes={decreaseAmountOfLikes}
        isUserAlreadyLiked={isUserAlreadyLiked}
        increaseAmountOfLikes={increaseAmountOfLikes}
      />
      <div className='mt-3'>
        <CustomAlert
          isShown={!!isLoggedError}
          text='Реакции доступны только авторизированным пользователям'
          variant='warning'
        />
      </div>
    </>
  );
};
