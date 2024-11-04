'use client'
import { createReducer, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
  },
  reducers: {
    setUser: (state, action) => {
      // logic add karunga
    },
    logout: (state) => {
      // logic add karunga

    }
  }
});

const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;