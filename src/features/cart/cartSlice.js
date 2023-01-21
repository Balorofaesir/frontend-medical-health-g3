import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getcarts, sendCartList, confirmCart } from './cartAPI';

const initialState = {
  carts: [],
  total: 0,
  loading: false,
  error: null,
  total: 0,
};

export const setCarts = createAsyncThunk('carts/getcarts', async () => {
  const response = await getcarts();

  return response;
});

export const makeCartList = createAsyncThunk(
  'cartList/createcartList',
  async (values) => {
    const response = await sendCartList(values);

    return response;
  }
);

export const makeCartUser = createAsyncThunk(
  'cartList/createcartList',
  async (values) => {
    const response = await confirmCart(values);

    return response;
  },
);


const cartSlice = createSlice({
  name: 'carts',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(setCarts.pending, (state) => {
        const newState = { ...state };
        newState.loading = true;
        return newState;
      })
      .addCase(setCarts.fulfilled, (state, action) => {
        const newState = { ...state };
        newState.loading = false;
        newState.carts = action.payload;
        newState.total = ((acc, curr) => acc + curr.price, 0)
        return newState;
      })
      .addCase(setCarts.rejected, (state, action) => {
        const newState = { ...state };
        newState.loading = false;
        newState.error = action.payload;
      })
      .addCase(makeCartList.pending, (state) => {
        const newState = { ...state };
        newState.loading = true;
        return newState;
      })
      .addCase(makeCartList.fulfilled, (state, action) => {
        const newState = { ...state };
        newState.loading = false;
        newState.cartProducts = action.payload;
        return newState;
      })
      .addCase(makeCartList.rejected, (state, action) => {
        const newState = { ...state };
        newState.loading = false;
        newState.error = action.payload;
      });
  },
});

export const selectCart = (state) => state.cart;

// export const setData = () => {};
export default cartSlice.reducer;
