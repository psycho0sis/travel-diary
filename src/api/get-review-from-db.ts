import { collection, getDocs, query, where } from 'firebase/firestore';

import { TReview } from 'store/types';

import { db } from '../firebase';

type TGetReviewFromDb = (excursion: string) => Promise<TReview>;

export const getReviewFromDB: TGetReviewFromDb = async (excursion) => {
  let reviewContent: TReview = {} as TReview;

  try {
    const q = query(collection(db, 'reviews'), where('excursion', '==', excursion));

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
