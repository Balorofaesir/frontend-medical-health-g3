import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import sendUser from './signupAPI';

const initialState = {
  signup: [],
  status: 'idle',
  error: null,
};

export const createUser = createAsyncThunk(
  'login/createLogin',
  async (values) => {
    const response = await sendUser(values);

    return response;
  }
);

export const verifyUser = createAsyncThunk(
  'login/validateUser',
  async (values) => {
    const response = await sendUser(values);

    return response;
  }
);

const loginSlice = createSlice({
  name: 'signup',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        const newState = { ...state };
        newState.status = 'loading';
        newState.error = false;
        return newState;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        const newState = { ...state };
        newState.status = 'succeeded';
        newState.login = action.payload;
        return newState;
      })
      .addCase(createUser.rejected, (state, action) => {
        const newState = { ...state };
        newState.status = 'failed';
        newState.error = action.payload;
        return newState;
      })
      .addCase(verifyUser.pending, (state) => {
        const newState = { ...state };
        newState.status = 'loading';
        return newState;
      })
      .addCase(verifyUser.fulfilled, (state, action) => {
        const newState = { ...state };
        newState.status = 'succeeded';
        newState.login = action.payload;
        return newState;
      })
      .addCase(verifyUser.rejected, (state, action) => {
        const newState = { ...state };
        newState.status = 'failed';
        newState.error = action.payload;
        return newState;
      });
  },
});

export const selectUser = (state) => state.signup.signup;
export const selectToken = (state) => state.login.login.token;
export const selectStatus = (state) => state.login.status;

export default loginSlice.reducer;
