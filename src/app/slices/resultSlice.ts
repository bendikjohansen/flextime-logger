import { createSlice } from "@reduxjs/toolkit";
import { toEntryOutcome } from "../converters";
import toTotalOutcome from "../converters/toTotalOutcome";
import { RootState } from "../store";
import { Entry, EntryOutcome } from "../types";
import { setEntries } from "./entrySlice";

interface ResultState {
  total: {
    hours: number;
    minutes: number;
  };
  entries: EntryOutcome[];
}

const initialState: ResultState = {
  total: {
    hours: 0,
    minutes: 0,
  },
  entries: [],
};

const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setEntries, (state, { payload }) => {
      const convert = (e: Entry) => toEntryOutcome(e, payload.baseline);
      const entries = payload.entries.map(e => e);
      entries.sort((a, b) => b.startTimestamp - a.startTimestamp);

      state.entries = entries.map(convert);
      state.total = toTotalOutcome(payload.entries, payload.baseline);
    });
  },
});

export default resultSlice.reducer;

export const selectTotalResult = (state: RootState) => state.result.total;
export const selectResultsByDate = (state: RootState) => state.result.entries;
