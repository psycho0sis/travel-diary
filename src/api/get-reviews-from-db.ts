import { collection, getDocs, query, where } from 'firebase/firestore';

import { db } from '../firebase';
import { TReview } from '../hooks/types';

type TGetReviewsFromDb = (excursion: string) => Promise<TReview[]>;

export const getReviewsFromDB: TGetReviewsFromDb = async (excursion) => {
  const reviews: TReview[] = [];

  try {
    const q = query(collection(db, 'reviews'), where('excursion', '==', excursion));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      reviews.push({ id: doc.id, data: doc.data() } as TReview);
    });

    return reviews;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }

    throw error;
  }
};
