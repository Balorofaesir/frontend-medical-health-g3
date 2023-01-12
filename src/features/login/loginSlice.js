import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import sendLogin from './loginAPI';

const initialState = {
  login: [],
  loading: false,
  error: null,
};

export const createLogin = createAsyncThunk(
  'login/createLogin',
  async (values) => {
    const response = await sendLogin(values);

    return response;
  }
);

const loginSlice = createSlice({
  name: 'login',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createLogin.pending, (state) => {
        const newState = { ...state };
        newState.loading = true;
        return newState;
      })
      .addCase(createLogin.fulfilled, (state, action) => {
        const newState = { ...state };
        newState.loading = false;
        newState.appointment = action.payload;
        return newState;
      })
      .addCase(createLogin.rejected, (state, action) => {
        const newState = { ...state };
        newState.loading = false;
        newState.error = action.payload;
      })
  },
});

export default loginSlice.reducer;
