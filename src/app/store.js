import { configureStore } from '@reduxjs/toolkit';
import feerReducer from '../features/feed/feedSlice';

export const store = configureStore({
  reducer: {
    feed: feerReducer,
  },
});
