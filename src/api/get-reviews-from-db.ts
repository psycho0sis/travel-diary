import { collection, getDocs, query, where } from 'firebase/firestore';

import { db } from '../firebase';
import { IReview } from '../hooks/types';

type TGetReviewsFromDb = (excursion: string) => Promise<IReview[]>;

export const getReviewsFromDB: TGetReviewsFromDb = async (excursion) => {
  const reviews: IReview[] = [];

  try {
    const q = query(collection(db, 'reviews'), where('excursion', '==', excursion));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      reviews.push(doc.data() as IReview);
    });

    return reviews;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }

    throw error;
  }
};
