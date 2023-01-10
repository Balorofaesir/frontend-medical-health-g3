import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getproducts from './productAPI';

const initialState = {
  products: [],
  loading: false,
  error: null,
};

export const setProducts = createAsyncThunk('products/getproducts', async () => {
  const response = await getproducts();

  return response;
});

const productSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(setProducts.pending, (state) => {
        const newState = { ...state };
        newState.loading = true;
        return newState;
      })
      .addCase(setProducts.fulfilled, (state, action) => {
        const newState = { ...state };
        newState.loading = false;
        newState.products = action.payload;
        return newState;
      })
      .addCase(setProducts.rejected, (state, action) => {
        const newState = { ...state };
        newState.loading = false;
        newState.error = action.payload;
      });
  },
});

export const selectProduct = (state) => state.product;

export const setData = () => {};
export default productSlice.reducer;
