import { createAsyncThunk } from '@reduxjs/toolkit';
import type { IUser } from 'hooks/types';
import { getStudentsDataFromDB } from 'hooks/use-load-all-students';

import { IAsyncStudentsSlice } from './students-slice';

export const fetchStudents = createAsyncThunk<
  IUser[],
  string,
  {
    state: { asyncStudents: IAsyncStudentsSlice };
  }
>(
  'reviews/fetchReviews',
  async () => {
    const data = (await getStudentsDataFromDB()) as IUser[];

    return data;
  },
  {
    condition: (arg, { getState }) => {
      const { status } = getState().asyncStudents;

      if (status === 'loading') return false;
    },
  }
);
