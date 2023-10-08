import { createAsyncThunk } from '@reduxjs/toolkit';

import { getReviewFromDB } from 'api/get-review-from-db';
import type { TReview } from 'hooks/types';

import { IAsyncReviewSlice } from './review-slice';

export const fetchReview = createAsyncThunk<
  TReview,
  { excursion: string; review: string },
  { state: { asyncReview: IAsyncReviewSlice } }
>(
  'review/fetchReview',
  async ({ excursion, review }) => {
    const data = (await getReviewFromDB(excursion, review)) as TReview;

    return data;
  },
  {
    condition: (_, { getState }) => {
      const { status } = getState().asyncReview;

      if (status === 'loading') return false;
    },
  }
);
