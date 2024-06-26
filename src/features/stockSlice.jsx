import { createSlice } from '@reduxjs/toolkit';

const stockSlice = createSlice({
  name: 'stock',

  initialState: {
    categories: [],
    brands: [],
    firms: [],
    products: [],
    purchases: [],
    sales: [],
    loading: false,
    error: false,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getSuccess: (state, { payload: { data, url } }) => {
      state.loading = false;
      state[url] = data; // state["brands"] - state["firms"]
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, getSuccess, fetchFail } = stockSlice.actions;
export default stockSlice.reducer;
