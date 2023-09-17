import { createAsyncThunk } from '@reduxjs/toolkit';
import { getReviewsFromDB } from 'api/get-reviews-from-db';
import type { IReview } from 'hooks/types';

import { IAsyncReviewsSlice } from './reviews-slice';

export const fetchReviews = createAsyncThunk<
  IReview[],
  string,
  {
    state: { asyncReviews: IAsyncReviewsSlice };
  }
>(
  'reviews/fetchReviews',
  async (excursion: string) => {
    const data = (await getReviewsFromDB(excursion)) as IReview[];

    return data;
  },
  {
    condition: (_, { getState }) => {
      const { status } = getState().asyncReviews;

      if (status === 'loading') return false;
    },
  }
);
