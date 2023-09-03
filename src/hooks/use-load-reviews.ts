import { useEffect, useState } from 'react';
import { collection, DocumentData, getDocs, query, where } from 'firebase/firestore';

import { db } from '../firebase';

import { IReview } from './types';

type IUseReviews = (excursion: string) => [IReview[], boolean, boolean];

export const getReviewsFromDB = async (excursion: string) => {
  const reviews: DocumentData[] = [];

  try {
    const q = query(collection(db, 'reviews'), where('excursion', '==', excursion));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      reviews.push(doc.data());
    });

    return reviews;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }

    throw error;
  }
};

export const useLoadReviews: IUseReviews = (excursion: string) => {
  const [reviews, setReviews] = useState<IReview[]>([] as IReview[]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = (await getReviewsFromDB(excursion)) as IReview[];

        setReviews(data);
        setLoading(false);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return [reviews, loading, error];
};
