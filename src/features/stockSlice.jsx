import { createSlice } from '@reduxjs/toolkit';

const stockSlice = createSlice({
  name: 'stock',

  initialState: {
    categories: [],
    firms: [],
    brands: [],
    products: [],
    sales: [],
    purchases: [],
    loading: false,
    error: false,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },

    fetchFail: () => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, fetchFail } = stockSlice.actions;
export default stockSlice.reducer;
