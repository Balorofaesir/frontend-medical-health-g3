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
        newState.error = false;
        return newState;
      })
      .addCase(createLogin.fulfilled, (state, action) => {
        const newState = { ...state };
        newState.loading = false;
        newState.login = action.payload;
        newState.error = false;
        return newState;
      })
      .addCase(createLogin.rejected, (state) => {
        const newState = { ...state };
        newState.loading = false;
        newState.error = true;
        return newState;
      });
  },
});

export default loginSlice.reducer;
