import { configureStore } from '@reduxjs/toolkit';
import doctorReducer from '../features/doctors/doctorSlice';
import departmentReducer from '../features/departments/departmentSlice';

const store = configureStore({
  reducer: {
    doctor: doctorReducer,
    department: departmentReducer,
  },
});

export default store;
