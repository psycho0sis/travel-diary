import { useEffect, useState } from 'react';
import { collection, DocumentData, getDocs, query, where } from 'firebase/firestore';

import { db } from '../firebase';

export interface IReview {
  id: number;
  excursion: string;
  email: string;
  review: string;
}

type IUseReviews = (excursion: string) => [IReview[], boolean];

const getReviewsFromDB = async (excursion: string) => {
  const reviews: DocumentData[] = [];
  const q = query(collection(db, 'reviews'), where('excursion', '==', excursion));

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    reviews.push(doc.data());
  });

  return reviews;
};

export const useLoadReviews: IUseReviews = (excursion: string) => {
  const [reviews, setReviews] = useState<IReview[]>([] as IReview[]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      const data = (await getReviewsFromDB(excursion)) as IReview[];

      setReviews(data);
      setLoading(false);
    };

    getData();
  }, []);

  return [reviews, loading];
};
