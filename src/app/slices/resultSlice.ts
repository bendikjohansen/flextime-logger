import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Entry } from "../types";
import { setEntries } from "./entrySlice";

interface ResultState {
  difference: number;
  hours: number;
  minutes: number;
}

const initialState: ResultState = {
  difference: 0,
  hours: 0,
  minutes: 0,
};

const calculateResult = (entry: Entry, baseline: number) => {
  const workdayLength = entry.endTimestamp - entry.startTimestamp - entry.lunchDuration;
  const expected = entry.dayOff ? 0 : baseline;
  return workdayLength - expected;
};

const calculateTime = (
  timeInMinutes: number
): { hours: number; minutes: number } => {
  const hours = Math.floor(timeInMinutes / 3600);
  const minutesLeft = (timeInMinutes / 60) % (hours * 60);
  const minutes = isNaN(minutesLeft) ? 0 : minutesLeft;

  return { hours, minutes };
};

const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setEntries, (state, { payload }) => {
      const getDifference = (entry: Entry) =>
        calculateResult(entry, payload.baseline);
      const add = (a: number, b: number) => a + b;
      const differences = payload.entries.map(getDifference).reduce(add, 0);
      const { hours, minutes } = calculateTime(differences);

      state.difference = differences;
      state.hours = hours;
      state.minutes = minutes;
    });
  },
});

export default resultSlice.reducer;

export const selectResult = (state: RootState) => state.result;
