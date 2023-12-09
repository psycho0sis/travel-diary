import { combineReducers, configureStore } from '@reduxjs/toolkit';

import excursionsSlice from './features/excursions/excursions-slice';
import reviewSlice from './features/review/review-slice';
import reviewsSlice from './features/reviews/reviews-slice';
import studentsSlice from './features/students/students-slice';
import weatherWidgetDataSlice from './features/weather-widget-data/weather-widget-data-slice';

const rootReducer = combineReducers({
  asyncReviews: reviewsSlice,
  asyncReview: reviewSlice,
  asyncExcursions: excursionsSlice,
  asyncStudents: studentsSlice,
  asyncWeatherWidgetData: weatherWidgetDataSlice,
});

export const store = configureStore({
  devTools: true,
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
