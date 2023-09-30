import { createSlice } from '@reduxjs/toolkit';

import type { IExcursion } from 'hooks/types';
import type { Status } from 'store/types';

import { fetchExcursions } from './excursions-action';

export interface IAsyncExcursionsSlice {
  status: Status;
  asyncExcursions: IExcursion[] | null;
}

const initialState: IAsyncExcursionsSlice = {
  status: 'idle',
  asyncExcursions: null,
};

export const excursionsSlice = createSlice({
  name: 'asyncExcursions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExcursions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchExcursions.fulfilled, (state, action) => {
        state.status = 'finishing';
        state.asyncExcursions = action.payload;
      })
      .addCase(fetchExcursions.rejected, (state) => {
        state.status = 'error';
      });
  },
});

export default excursionsSlice.reducer;
