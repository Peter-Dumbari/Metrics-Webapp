import { configureStore } from '@reduxjs/toolkit';
import CurrencySlice from './CurrencySlice';

const store = configureStore({
  reducer: {
    currency: CurrencySlice,
  },
});

export default store;
