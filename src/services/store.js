import { configureStore } from '@reduxjs/toolkit';
import doctorReducer from '../features/doctors/doctorSlice';
import departmentReducer from '../features/departments/departmentSlice';
import appointmentReducer from '../features/appointments/appointmentSlice';

const store = configureStore({
  reducer: {
    doctor: doctorReducer,
    department: departmentReducer,
    appointment: appointmentReducer,
  },
});

export default store;
