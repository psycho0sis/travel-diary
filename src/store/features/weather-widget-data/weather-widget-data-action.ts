import { createAsyncThunk } from '@reduxjs/toolkit';

import { getTimeZone } from 'api/get-time-zone';
import { getWeather } from 'api/get-weather';

import type {
  IWeatherAPIData,
  IWeatherWidgetDataSlice,
  IWeatherWidgetDataWithTimeZone
} from './types';

export const fetchWeatherWidgetData = createAsyncThunk<
  IWeatherWidgetDataWithTimeZone,
  { city: string },
  {
    state: { asyncWeatherWidgetData: IWeatherWidgetDataSlice };
  }
>(
  'weatherWidgetData/fetchWeatherWidgetData',
  async ({ city }: { city: string }) => {
    const data = (await getWeather(city)) as IWeatherAPIData;
    const timeZone = await getTimeZone(data.coord?.lat || 0, data.coord?.lon || 0);

    return { ...data, timeZone };
  },
  {
    condition: (_, { getState }) => {
      const { status } = getState().asyncWeatherWidgetData;

      if (status === 'loading') return false;
    },
  }
);
