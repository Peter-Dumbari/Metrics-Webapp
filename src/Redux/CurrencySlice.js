import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import API from './Api';

const initialState = {
  currency: [],
  currencyDetails: [],
  filterCurrency: [],
  loading: false,
};

export const getCurrency = createAsyncThunk(
  'currency/fetchCurrencies',
  async () => {
    const response = await axios(`${API}.json`);
    return response.data;
  },
);

export const getCurrencyDetails = createAsyncThunk(
  'currency/fetchCurrencyDetails',
  async (currencyId) => {
    const response = await axios(`${API}/${currencyId}.json`);
    return response.data;
  },
);

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    searchCurrency: (state, action) => {
      const filterValue = action.payload.toLowerCase();
      // eslint-disable-next-line
      state.filterCurrency = Object.entries(state.currency).filter((currency) => currency[1].toLowerCase().includes(filterValue),);
      console.log(state.filterCurrency);
    },
  },
  extraReducers: {
    [getCurrency.pending]: (state) => {
      state.loading = true;
    },
    [getCurrency.fulfilled]: (state, action) => {
      state.loading = false;
      state.currency = action.payload;
      state.filterCurrency = [];
    },
    [getCurrency.rejected]: (state) => {
      state.loading = false;
    },
    [getCurrencyDetails.pending]: (state) => {
      state.loading = true;
    },
    [getCurrencyDetails.fulfilled]: (state, action) => {
      state.loading = false;
      state.currencyDetails = Object.entries(action.payload);
    },
    [getCurrencyDetails.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { searchCurrency } = currencySlice.actions;
export default currencySlice.reducer;
