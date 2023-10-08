import { createSlice } from '@reduxjs/toolkit';

import type { TReview } from 'hooks/types';
import type { Status } from 'store/types';

import { fetchReview } from './review-action';

export interface IAsyncReviewSlice {
  status: Status;
  asyncReview: TReview | null;
}

const initialState: IAsyncReviewSlice = {
  status: 'idle',
  asyncReview: null,
};

export const reviewSlice = createSlice({
  name: 'asyncReview',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReview.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchReview.fulfilled, (state, action) => {
        state.status = 'finishing';
        state.asyncReview = action.payload;
      })
      .addCase(fetchReview.rejected, (state) => {
        state.status = 'error';
      });
  },
});

export default reviewSlice.reducer;
