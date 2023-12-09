import { createAction, createSlice } from '@reduxjs/toolkit';
import { put } from 'redux-saga/effects';

import { getTimeZone } from 'api/get-time-zone';
import { getWeather } from 'api/get-weather';

export interface IAsyncTimeZoneSlice {
  asyncTimeZone: string | null;
}
const initialState: IAsyncTimeZoneSlice = {
  asyncTimeZone: null,
};

const DEFAULT_LAT = 54.1483;
const DEFAULT_LON = 25.3131;

export function* getTimeZoneSaga(lat: number = DEFAULT_LAT, lon: number = DEFAULT_LON): any {
  const payload = yield getTimeZone(lat, lon).then((response) => response.json);

  yield put(getWeather(payload));
}

export const timeZoneSlice = createSlice({
  name: 'asyncTimeZone',
  initialState,
  reducers: {},
});

export const GET_TIME_ZONE = 'timeZone/getTimezone';
export const getTimezone = createAction(GET_TIME_ZONE);

export default timeZoneSlice.reducer;
