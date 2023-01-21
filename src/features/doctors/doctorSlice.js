import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {getDoctors, getEspecificDoctor } from './doctorAPI';

const initialState = {
  doctors: [],
  status: 'idle',
  error: null,
};

export const setDoctors = createAsyncThunk('doctors/getDoctors', async () => {
  const response = await getDoctors();
  return response;
});

export const getDoctor = createAsyncThunk(
  'doctors/getDoctor',
  async (id) => {
    const response = await getEspecificDoctor(id);
    return response;
  }
);
const doctorSlice = createSlice({
  name: 'doctors',
  initialState,
  extraReducers: (builder) => {
    builder

      .addCase(setDoctors.pending, (state) => {
        const newState = { ...state };
        newState.status = 'loading';
        return newState;
      })
      .addCase(setDoctors.fulfilled, (state, action) => {
        const newState = { ...state };
        newState.status = 'succeeded';
        newState.doctors = action.payload;
        return newState;
      })
      .addCase(setDoctors.rejected, (state, action) => {
        const newState = { ...state };
        newState.status = 'failed';
        newState.error = action.payload;
      })
      .addCase(getDoctor.pending, (state) => {
        const newState = { ...state };
        newState.loading = true;
        return newState;
      })
      .addCase(getDoctor.fulfilled, (state, action) => {
        const newState = { ...state };
        newState.loading = false;
        newState.doctor = action.payload;
        return newState;
      })
      .addCase(getDoctor.rejected, (state, action) => {
        const newState = { ...state };
        newState.loading = false;
        newState.error = action.payload;
      });
  },
});

export const selectDoctor = (state) => state.doctor.doctors;

export const setData = () => {};
export default doctorSlice.reducer;
