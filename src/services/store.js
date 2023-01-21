import { configureStore } from '@reduxjs/toolkit';
import doctorReducer from '../features/doctors/doctorSlice';
import appointmentReducer from '../features/appointments/appointmentSlice';
import productReducer from '../features/products/productSlice';
import cartReducer from '../features/cart/cartSlice';
import loginReducer from '../features/login/loginSlice';
import modalReducer from '../features/modal/loginmodalSlice';
import authReducer from '../features/auth/authSlice'
import danielCartReducer from '../features/danielCart/danielCartSlice';

const store = configureStore({
  reducer: {
    doctor: doctorReducer,
    appointment: appointmentReducer,
    product: productReducer,
    cart: cartReducer,
    login: loginReducer,
    modal: modalReducer,
    auth: authReducer,
    danielCart: danielCartReducer,
  },
});

export default store;
