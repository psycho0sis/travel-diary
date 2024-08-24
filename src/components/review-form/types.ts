import type { Dispatch, SetStateAction } from 'react';

import type { TReviewLikes } from 'store/types';

export interface IReviewForm {
  excursion: string;
}

export interface ILikeInContextOfReview extends IReviewForm {
  likes: TReviewLikes;
  isUserAlreadyLiked: boolean;
  setIsUserAlreadyLiked: Dispatch<SetStateAction<boolean>>;
  review: string;
  reviewsDocumentId: string;
}
