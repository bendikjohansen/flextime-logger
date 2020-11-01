import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface AuthState {
  userId: string | null;
}

const initialState: AuthState = {
  userId: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }: PayloadAction<string>) => {
      state.userId = payload;
    },
    logout: (state) => {
      state.userId = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export const selectUserId = (state: RootState) => state.auth.userId;

export default authSlice.reducer;
