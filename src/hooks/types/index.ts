export interface IExcursion {
  id: number;
  excursion: string;
  date: string;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
  surname: string;
  photo: string;
  excursions?: IExcursion[];
  role: 'student' | 'teacher';
  showAvatarBlock?: boolean;
}

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
