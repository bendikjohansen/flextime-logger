import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface BaselineState {
  duration: number;
};

const initialState: BaselineState = {
  duration: 425 * 60
}

const baseline = createSlice({
  name: 'baseline',
  initialState,
  reducers: {
    setDuration: (state, { payload }: PayloadAction<number>) => {
      state.duration = payload;
    }
  }
});

export default baseline.reducer;
export const { setDuration } = baseline.actions;

export const selectBaselineDuration = (state: RootState) => state.baseline.duration;
