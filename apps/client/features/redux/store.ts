import { configureStore } from '@reduxjs/toolkit';
import studentReducer from './slices/studentSlice';

const store = configureStore({
  reducer: {
    studentReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
