import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getDoctors from './doctorAPI';

const initialState = {
  doctors: [],
  loading: false,
  error: null,
};

export const setDoctors = createAsyncThunk('doctors/getDoctors', async () => {
  const response = await getDoctors();

  return response;
});

const doctorSlice = createSlice({
  name: 'doctors',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(setDoctors.pending, (state) => {
        const newState = { ...state };
        newState.loading = true;
        return newState;
      })
      .addCase(setDoctors.fulfilled, (state, action) => {
        const newState = { ...state };
        newState.loading = false;
        newState.doctors = action.payload;
        return newState;
      })
      .addCase(setDoctors.rejected, (state, action) => {
        const newState = { ...state };
        newState.loading = false;
        newState.error = action.payload;
      });
  },
});

export const selectDoctor = (state) => state.doctor.doctors;

export const setData = () => {};
export default doctorSlice.reducer;
