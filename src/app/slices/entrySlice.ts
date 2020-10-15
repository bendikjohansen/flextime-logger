import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { persistEntry } from "../database";
import { AppThunk, RootState } from "../store";
import { Entry } from "../types";

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
    addEntry: (state, { payload }: PayloadAction<Entry>) => {
      state.list.push(payload);
    },
    removeEntry: (state, { payload }: PayloadAction<Entry>) => {
      state.list = state.list.filter((entry) => entry.id !== payload.id);
    },
  },
});

export default entrySlice.reducer;
export const { addEntry, removeEntry } = entrySlice.actions;

export const selectEntries = (state: RootState) => state.entry.list;

export const storeEntry = (
  userId: string,
  newEntry: Entry
): AppThunk => async (dispatch) => {
  const result = await persistEntry(userId, newEntry);

  const entry: Entry = {
    ...newEntry,
    id: result.id
  };

  dispatch(addEntry(entry));
};
