import { createSlice } from '@reduxjs/toolkit';

import type { IWeatherWidgetDataSlice } from './types';
import { fetchWeatherWidgetData } from './weather-widget-data-action';

const initialState: IWeatherWidgetDataSlice = {
  status: 'idle',
  asyncWeatherWidgetData: null,
};

export const weatherWidgetDataSlice = createSlice({
  name: 'asyncWeatherWidgetData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherWidgetData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchWeatherWidgetData.fulfilled, (state, action) => {
        state.status = 'finishing';
        state.asyncWeatherWidgetData = action.payload;
      })
      .addCase(fetchWeatherWidgetData.rejected, (state) => {
        state.status = 'error';
      });
  },
});

export default weatherWidgetDataSlice.reducer;
