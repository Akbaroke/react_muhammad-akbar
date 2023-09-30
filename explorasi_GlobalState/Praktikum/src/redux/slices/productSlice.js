import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setOrUpdateProducts: (state, action) => {
      const index = state.products.findIndex(
        (data) => data.id === action.payload.id
      );
      if (index !== -1) {
        state.products[index] = action.payload;
      } else {
        state.products.push(action.payload);
      }
    },
    deleteProdcuts: (state, action) => {
      state.products = state.products.filter(
        (data) => data.id !== action.payload.id
      );
    },

    resetProducts: (state) => {
      state.products = [];
    },
  },
});

export const { setOrUpdateProducts, deleteProdcuts, resetProducts } =
  productSlice.actions;
export default productSlice.reducer;
