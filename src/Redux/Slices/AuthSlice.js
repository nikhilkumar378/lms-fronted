import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: localStorage.getItem('isLoggedIn') || false,
  role: localStorage.getItem('role') || "",
  data: localStorage.getItem('data') || {}
};

const AuthSliceReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export const {} = AuthSliceReducer.actions;

export default authSlice.reducer