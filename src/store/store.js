import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './slices/booksSlice';

// Configure Redux store
export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
