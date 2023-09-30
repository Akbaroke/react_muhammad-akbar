import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  auth: {
    isAuth: false,
    id: '',
    username: '',
    email: '',
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.auth = {
        isAuth: true,
        id: action.payload.id,
        username: action.payload.username,
        email: action.payload.email,
      };
    },

    resetAuth: (state) => {
      state.auth = {
        isAuth: false,
        id: '',
        username: '',
        email: '',
      };
    },
  },
});

export const { setAuth, resetAuth } = authSlice.actions;
export default authSlice.reducer;
