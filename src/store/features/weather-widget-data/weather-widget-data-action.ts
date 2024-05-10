import { createAsyncThunk } from '@reduxjs/toolkit';

import { getTimeZone } from 'api/get-time-zone';
import { getWeather, getWeatherInCurrentUserLocation } from 'api/get-weather';

import type {
  IPosition,
  IWeatherAPIData,
  IWeatherWidgetDataSlice,
  IWeatherWidgetDataWithTimeZone
} from './types';

export const fetchWeatherWidgetData = createAsyncThunk<
  IWeatherWidgetDataWithTimeZone,
  {
    position: IPosition;
    city?: string;
  },
  {
    state: { asyncWeatherWidgetData: IWeatherWidgetDataSlice };
  }
>(
  'weatherWidgetData/fetchWeatherWidgetData',
  async ({ position, city }: { position?: IPosition; city?: string }) => {
    let data: IWeatherAPIData = {} as IWeatherAPIData;

    if (position) {
      data = await getWeatherInCurrentUserLocation(position);
    }

    if (city) {
      data = await getWeather(city);
    }

    const timeZone = await getTimeZone(data?.coord?.lat || 0, data?.coord?.lon || 0);

    return { ...data, timeZone };
  }
);
