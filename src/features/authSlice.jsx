import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    currentUser: null,
    loading: false,
    error: false,
    errorMessage: null,
    token: null,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    registerSuccess: (state, { payload }) => {
      state.loading = false;
      state.currentUser = payload.data.username;
      state.token = payload.data.token;
    },
    loginSuccess: (state, { payload }) => {
      state.loading = false;
      state.currentUser = payload.user.username;
      state.token = payload.user.token;
    },
    logoutSucces: (state) => {
      state.loading = false;
      state.currentUser = null;
      state.token = null;
    },

    fetchFail: (state, { payload }) => {
      state.loading = false;
      state.error = true;
      state.errorMessage = payload.response.data.message;
    },
  },
});

export const {
  fetchStart,
  fetchFail,
  registerSuccess,
  loginSuccess,
  logoutSucces,
} = authSlice.actions;
export default authSlice.reducer;
