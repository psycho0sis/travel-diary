import { createAsyncThunk } from '@reduxjs/toolkit';
import type { IExcursion } from 'hooks/types';
import { getStudentsExcursionsDataFromDB } from 'hooks/use-load-students-excursions-data';

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
    const data = (await getStudentsExcursionsDataFromDB(name, surname)).excursions as IExcursion[];

    return data;
  },
  {
    condition: (arg, { getState }) => {
      const { status } = getState().asyncExcursions;

      if (status === 'loading') return false;
    },
  }
);
