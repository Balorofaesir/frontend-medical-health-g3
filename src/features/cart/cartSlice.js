import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getcarts, sendCartList } from './cartAPI';

const initialState = {
  carts: [],
  loading: false,
  error: null,
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
