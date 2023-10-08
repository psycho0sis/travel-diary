import type { RootState } from 'store';

export const selectAsyncReview = (state: RootState) => state.asyncReview.asyncReview;
export const selectAsyncStatus = (state: RootState) => state.asyncReview.status;
