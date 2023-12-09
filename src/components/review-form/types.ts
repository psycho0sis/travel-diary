import type { Dispatch, SetStateAction } from 'react';

import type { TReviewLikes } from 'store/types';

export interface IReviewForm {
  excursion: string;
}

export interface IFormComponent {
  excursion: string;
}

export interface ILikeInContextOfReview {
  likes: TReviewLikes;
  isUserAlreadyLiked: boolean;
  setIsUserAlreadyLiked: Dispatch<SetStateAction<boolean>>;
  review: string;
  excursion: string;
  reviewsDocumentId: string;
}

export interface IReviews {
  excursion: string;
}
