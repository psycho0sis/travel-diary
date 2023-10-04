import { createAsyncThunk } from '@reduxjs/toolkit';

import { getStudentByCredentialsFromDB } from 'api/get-students-excursions-data-from-db';
import type { IExcursion } from 'hooks/types';

import { IAsyncExcursionsSlice } from './excursions-slice';

export const fetchExcursions = createAsyncThunk<
  IExcursion[],
  { name: string; surname: string },
  {
    state: { asyncExcursions: IAsyncExcursionsSlice };
  }
>(
  'excursions/fetchExcursions',
  async ({ name, surname }: { name: string; surname: string }) => {
    const data = (await getStudentByCredentialsFromDB(name, surname)).excursions as IExcursion[];

    return data;
  },
  {
    condition: (_, { getState }) => {
      const { status } = getState().asyncExcursions;

      if (status === 'loading') return false;
    },
  }
);
