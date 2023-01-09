import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getDepartments from './departmentAPI';

const initialState = {
  departments: [],
  loading: false,
  error: null,
};

export const setDepartments = createAsyncThunk(
  'departments/getDepartments',
  async () => {
    const response = await getDepartments();

    return response;
  }
);

const departmentSlice = createSlice({
  name: 'derpartments',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(setDepartments.pending, (state) => {
        const newState = { ...state };
        newState.loading = true;
        return newState;
      })
      .addCase(setDepartments.fulfilled, (state, action) => {
        const newState = { ...state };
        newState.loading = false;
        newState.departments = action.payload;
        return newState;
      })
      .addCase(setDepartments.rejected, (state, action) => {
        const newState = { ...state };
        newState.loading = false;
        newState.error = action.payload;
      });
  },
});

export const selectDepartment = (state) => state.department;

export default departmentSlice.reducer;
