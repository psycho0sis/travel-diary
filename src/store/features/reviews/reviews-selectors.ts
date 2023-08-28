import type { RootState } from 'store';

export const selectAsyncReviews = (state: RootState) => state.asyncReviews.asyncReviews;
export const selectAsyncStatus = (state: RootState) => state.asyncReviews.status;
