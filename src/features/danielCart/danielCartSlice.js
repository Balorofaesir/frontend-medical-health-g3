import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getCarts from './danielCartAPI';

export const setCarts = createAsyncThunk('carts/getCarts', async () => {
  const response = await getCarts();

  return response;
});

const initialState = {
  cart: [],
  amount: 0,
  total: 0,
  status: 'idle',
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      const newState = { ...state };
      newState.cart = [];
      return newState;
    },
    removeItem: (state, action) => {
      const newState = { ...state };
      const itemId = action.payload;
      newState.cart = newState.cart.filter((item) => item.id !== itemId);
      return newState;
    },
    increase: (state, { payload }) => {
      const cart = state.cart.find((item) => item.id === payload);
      cart.quantity += 1;
    },
    decrease: (state, { payload }) => {
      const cart = state.cart.find((item) => item.id === payload);
      cart.quantity -= 1;
    },
    calculateTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.cart.forEach((item) => {
        amount += item.quantity;
        total += item.quantity * item.price;
      });
      const newState = { ...state };
      newState.quantity = amount;
      newState.total = total;
      return newState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setCarts.pending, (state) => {
        const newState = { ...state };
        newState.status = 'loading';
        return newState;
      })
      .addCase(setCarts.fulfilled, (state, action) => {
        const newState = { ...state };
        newState.status = 'succeded';
        newState.cart = action.payload;
        return newState;
      })
      .addCase(setCarts.rejected, (state, action) => {
        const newState = { ...state };
        newState.status = 'failed';
        newState.error = action.payload;
      });
  },
});

export const { clearCart, removeItem, increase, decrease, calculateTotal } =
  cartSlice.actions;

export default cartSlice.reducer;
