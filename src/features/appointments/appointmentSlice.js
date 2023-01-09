import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import sendAppointment from './appointmentAPI';

const initialState = {
  appointment: [],
  loading: false,
  error: null,
};

export const makeAppointment = createAsyncThunk(
  'appointment/createAppointment',
  async (values) => {
    const response = await sendAppointment(values);

    return response;
  }
);

const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(makeAppointment.pending, (state) => {
        const newState = { ...state };
        newState.loading = true;
        return newState;
      })
      .addCase(makeAppointment.fulfilled, (state, action) => {
        const newState = { ...state };
        newState.loading = false;
        newState.appointment = action.payload;
        return newState;
      })
      .addCase(makeAppointment.rejected, (state, action) => {
        const newState = { ...state };
        newState.loading = false;
        newState.error = action.payload;
      });
  },
});

/* export const { makeAppointment } = appointmentSlice.actions; */

export const selectAppointment = (state) => state.appointment;

export default appointmentSlice.reducer;
