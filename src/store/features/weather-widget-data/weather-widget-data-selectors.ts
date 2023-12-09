import type { RootState } from 'store';

export const selectAsyncWeatherWidgetData = (state: RootState) =>
  state.asyncWeatherWidgetData.asyncWeatherWidgetData;
export const selectAsyncStatus = (state: RootState) => state.asyncWeatherWidgetData.status;
