import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface AuthState {
  userId: string | null;
};

const initialState: AuthState = {
  userId: 'bendik'
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserId: (state, { payload }: PayloadAction<string>) => {
      state.userId = payload;
    }
  }
})

export default authSlice.reducer;
export const { setUserId } = authSlice.actions;
export const selectUserId = (state: RootState) => state.auth.userId;
