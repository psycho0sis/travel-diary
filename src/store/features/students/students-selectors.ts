import type { RootState } from 'store';

export const selectAsyncStudents = (state: RootState) => state.asyncStudents.asyncStudents;
export const selectAsyncStatus = (state: RootState) => state.asyncStudents.status;
