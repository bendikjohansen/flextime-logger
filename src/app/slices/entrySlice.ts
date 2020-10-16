import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Entry } from "../types";

interface SetEntryPayload {
  entries: Entry[];
  baseline: number;
}

interface EntryState {
  list: Entry[];
}

const initialState: EntryState = {
  list: [],
};

const entrySlice = createSlice({
  name: "entry",
  initialState,
  reducers: {
    setEntries: (state, { payload }: PayloadAction<SetEntryPayload>) => {
      state.list = payload.entries;
    }
  },
});

export default entrySlice.reducer;
export const { setEntries } = entrySlice.actions;

export const selectEntries = (state: RootState) => state.entry.list;
