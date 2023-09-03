import type { RootState } from 'store';

export const selectAsyncExcursions = (state: RootState) => state.asyncExcursions.asyncExcursions;
export const selectAsyncStatus = (state: RootState) => state.asyncExcursions.status;
