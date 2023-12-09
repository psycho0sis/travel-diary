import { createAsyncThunk } from '@reduxjs/toolkit';

import { getReviewFromDB } from 'api/get-review-from-db';

import { TReview } from '../../types';

import { IAsyncReviewSlice } from './review-slice';

export const fetchReview = createAsyncThunk<
  TReview,
  { excursion: string },
  { state: { asyncReview: IAsyncReviewSlice } }
>(
  'review/fetchReview',
  async ({ excursion }) => {
    const data = (await getReviewFromDB(excursion)) as TReview;

    return data;
  },
  {
    condition: (_, { getState }) => {
      const { status } = getState().asyncReview;

      if (status === 'loading') return false;
    },
  }
);
