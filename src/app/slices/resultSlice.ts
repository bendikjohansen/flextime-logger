import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Entry } from "../types";

interface ResultState {
  difference: number;
}

const initialState: ResultState = {
  difference: 0,
};

const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    setTime: (state, { payload }: PayloadAction<Entry[]>) => {
      const add = (value: number, entry: Entry) =>
        value + entry.endTimestamp - entry.startTimestamp;

      state.difference = payload.reduce(add, 0);
    },
    addTime: (state, { payload }: PayloadAction<Entry>) => {
      state.difference +=
        (payload.endTimestamp - payload.startTimestamp) * 1000;
    },
    removeTime: (state, { payload }: PayloadAction<Entry>) => {
      state.difference -=
        (payload.endTimestamp - payload.startTimestamp) * 1000;
    },
  },
});

export default resultSlice.reducer;
export const { setTime, addTime, removeTime } = resultSlice.actions;

export const selectDifference = (state: RootState) => state.result.difference;
