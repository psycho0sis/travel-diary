import { createAsyncThunk } from '@reduxjs/toolkit';
import { getReviewsFromDB, IReview } from 'hooks/use-load-reviews';

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
    condition: (arg, { getState }) => {
      const { status } = getState().asyncReviews;

      if (status === 'loading') return false;
    },
  }
);
