import { configureStore } from '@reduxjs/toolkit';
import doctorReducer from '../features/doctors/doctorSlice';
import departmentReducer from '../features/departments/departmentSlice';
import appointmentReducer from '../features/appointments/appointmentSlice';
import productReducer from '../features/products/productSlice';
import cartReducer from '../features/cart/cartSlice';


const store = configureStore({
  reducer: {
    doctor: doctorReducer,
    department: departmentReducer,
    appointment: appointmentReducer,
    product: productReducer,
    cart: cartReducer,
  },
});

export default store;
