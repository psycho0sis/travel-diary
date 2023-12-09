export type Status = 'idle' | 'loading' | 'finishing' | 'error';

export type TReviewLikes = {
  userEmails: string[];
  likes: number;
};

export type TReviewDate = {
  id: string;
  date: string;
  excursion: string;
  email: string;
  review: string;
  reviewLikes: TReviewLikes;
  photos: string[];
};

export type TReview = {
  id: string;
  data: TReviewDate;
};

export interface ILikes {
  likes: TReviewLikes;
  reviewsDocumentId: string;
  reviewsCollectionId: string;
}
