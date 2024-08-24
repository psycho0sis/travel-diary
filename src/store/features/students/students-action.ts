import { createAsyncThunk } from '@reduxjs/toolkit';

import { getStudentsDataFromDB } from 'api/get-students-data-from-db';

import type { IAsyncStudentsSlice, IUser } from './types';

export const fetchStudents = createAsyncThunk<
  IUser[],
  undefined,
  {
    state: { asyncStudents: IAsyncStudentsSlice };
  }
>(
  'reviews/fetchStudents',
  async () => {
    const data = await getStudentsDataFromDB();

    return data;
  },
  {
    condition: (_, { getState }) => {
      const { status } = getState().asyncStudents;

      if (status === 'loading') return false;
    },
  }
);
