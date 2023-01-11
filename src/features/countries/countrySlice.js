import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getCountries from './countriesAPI';

const initialState = {
  countries: [],
  loading: false,
  error: null,
};

export const setCountries = createAsyncThunk(
  'countries/getCountries',
  async () => {
    const response = await getCountries();

    return response;
  }
);

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(setCountries.pending, (state) => {
        const newState = { ...state };
        newState.loading = true;
        return newState;
      })
      .addCase(setCountries.fulfilled, (state, action) => {
        const newState = { ...state };
        newState.loading = false;
        newState.countries = action.payload;
        return newState;
      })
      .addCase(setCountries.rejected, (state, action) => {
        const newState = { ...state };
        newState.loading = false;
        newState.error = action.payload;
      });
  },
});

export const selectCountries = (state) => state.countries;

export default countriesSlice.reducer;
