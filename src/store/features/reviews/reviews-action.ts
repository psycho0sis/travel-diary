import { createAsyncThunk } from '@reduxjs/toolkit';

import { getReviewsFromDB } from 'api/get-reviews-from-db';
import { sortArrayByDate } from 'helpers/sort-array-by-date';

import type { TReview, TReviewDate } from '../../types';

import { IAsyncReviewsSlice } from './reviews-slice';

export const fetchReviews = createAsyncThunk<
  TReview[],
  string,
  { state: { asyncReviews: IAsyncReviewsSlice } }
>(
  'reviews/fetchReviews',
  async (excursion: string) => {
    const data = (await getReviewsFromDB(excursion)) as TReview[];

    return sortArrayByDate<TReviewDate, TReview>(data);
  },
  {
    condition: (_, { getState }) => {
      const { status } = getState().asyncReviews;

      if (status === 'loading') return false;
    },
  }
);
