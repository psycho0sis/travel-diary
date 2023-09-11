import { combineReducers, configureStore } from '@reduxjs/toolkit';

import excursionsSlice from './features/excursions/excursions-slice';
import reviewsSlice from './features/reviews/reviews-slice';
import studentsSlice from './features/students/students-slice';

const rootReducer = combineReducers({
  asyncReviews: reviewsSlice,
  asyncExcursions: excursionsSlice,
  asyncStudents: studentsSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
