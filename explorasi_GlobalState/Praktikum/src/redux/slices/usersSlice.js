import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setOrUpdateUsers: (state, action) => {
      const index = state.users.findIndex(
        (data) => data.id === action.payload.id
      );
      if (index !== -1) {
        state.users[index] = action.payload;
      } else {
        state.users.push(action.payload);
      }
    },
    deleteProdcuts: (state, action) => {
      state.users = state.users.filter((data) => data.id !== action.payload);
    },

    resetUsers: (state) => {
      state.users = [];
    },
  },
});

export const { setOrUpdateUsers, deleteProdcuts, resetUsers } =
  userSlice.actions;
export default userSlice.reducer;
