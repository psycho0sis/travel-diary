import { collection, getDocs, query, where } from 'firebase/firestore';

import { db } from '../firebase';
import { TReview } from '../hooks/types';

type TGetReviewFromDb = (excursion: string, review: string) => Promise<TReview>;

export const getReviewFromDB: TGetReviewFromDb = async (excursion, review) => {
  let reviewContent: TReview = {} as TReview;

  try {
    const q = query(
      collection(db, 'reviews'),
      where('excursion', '==', excursion),
      where('review', '==', review)
    );

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      reviewContent = { ...reviewContent, id: doc.id, data: doc.data() } as TReview;
    });

    return reviewContent;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }

    throw error;
  }
};
