import { configureStore } from '@reduxjs/toolkit';
import doctorReducer from '../features/doctors/doctorSlice';
import departmentReducer from '../features/departments/departmentSlice';
import appointmentReducer from '../features/appointments/appointmentSlice';
import countriesReducer from '../features/countries/countrySlice';

const store = configureStore({
  reducer: {
    doctor: doctorReducer,
    department: departmentReducer,
    appointment: appointmentReducer,
    countries: countriesReducer,
  },
});

export default store;
