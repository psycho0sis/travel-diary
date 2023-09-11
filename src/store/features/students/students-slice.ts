import { createSlice } from '@reduxjs/toolkit';
import type { IUser } from 'hooks/types';
import type { Status } from 'store/types';

import { fetchStudents } from './students-action';

export interface IAsyncStudentsSlice {
  status: Status;
  asyncStudents: IUser[] | null;
}

const initialState: IAsyncStudentsSlice = {
  status: 'idle',
  asyncStudents: null,
};

export const reviewsSlice = createSlice({
  name: 'asyncStudents',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.status = 'finishing';
        state.asyncStudents = action.payload;
      })
      .addCase(fetchStudents.rejected, (state) => {
        state.status = 'error';
      });
  },
});

export default reviewsSlice.reducer;
