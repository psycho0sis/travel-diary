import { createSlice } from '@reduxjs/toolkit';

import type { IReview } from 'hooks/types';
import type { Status } from 'store/types';

import { fetchReviews } from './reviews-action';

export interface IAsyncReviewsSlice {
  status: Status;
  asyncReviews: IReview[] | null;
}

const initialState: IAsyncReviewsSlice = {
  status: 'idle',
  asyncReviews: null,
};

export const reviewsSlice = createSlice({
  name: 'asyncReviews',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.status = 'finishing';
        state.asyncReviews = action.payload;
      })
      .addCase(fetchReviews.rejected, (state) => {
        state.status = 'error';
      });
  },
});

export default reviewsSlice.reducer;
