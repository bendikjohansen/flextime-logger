import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import dayjs, { Dayjs } from "dayjs";
import { persistEntry } from "../database";
import { AppThunk, RootState } from "../store";
import { Entry } from "../types";

export interface EntryFormState {
  date: string;
  fromTime: string;
  toTime: string;
  lunchDuration: number;
  dayOff: boolean;
}

const isWeekday = (date: Dayjs) =>
  ["saturday", "sunday"].includes(date.format("dddd").toLowerCase());
const copyDate = (copyFrom: Dayjs, copyTo: Dayjs) =>
  copyTo.year(copyFrom.year()).month(copyFrom.month()).date(copyFrom.date());

const initialState: EntryFormState = {
  date: dayjs().format(),
  fromTime: dayjs().hour(8).minute(0).second(0).format(),
  toTime: dayjs().hour(15).minute(35).second(0).format(),
  lunchDuration: 30 * 60,
  dayOff: isWeekday(dayjs()),
};

const entryFormSlice = createSlice({
  name: "entryForm",
  initialState,
  reducers: {
    setDate: (state, { payload }: PayloadAction<string>) => {
      const date = dayjs(payload);
      const from = dayjs(state.fromTime);
      const to = dayjs(state.toTime);
      state.date = date.format();
      state.fromTime = copyDate(date, from).format();
      state.toTime = copyDate(date, to).format();
    },
    setFromTime: (state, { payload }: PayloadAction<string>) => {
      const from = dayjs(payload);
      const date = dayjs(state.date);
      state.fromTime = copyDate(date, from).format();
    },
    setToTime: (state, { payload }: PayloadAction<string>) => {
      const from = dayjs(payload);
      const date = dayjs(state.date);
      state.toTime = copyDate(date, from).format();
    },
    setLunchDuration: (state, { payload }: PayloadAction<number>) => {
      state.lunchDuration = payload;
    },
    setDayOff: (state, { payload }: PayloadAction<boolean>) => {
      state.dayOff = payload;
    },
    submitEntry: (state, { payload }: PayloadAction<Entry>) => {
      const start = payload.startTimestamp;
      const date = dayjs.unix(start).add(1, "day");
      const from = dayjs(state.fromTime);
      const to = dayjs(state.toTime);
      state.date = date.format();
      state.fromTime = copyDate(date, from).format();
      state.toTime = copyDate(date, to).format();
      state.dayOff = isWeekday(date);
    },
  },
});

export default entryFormSlice.reducer;
export const {
  setDate,
  setFromTime,
  setToTime,
  setLunchDuration,
  setDayOff,
} = entryFormSlice.actions;

export const selectDate = (state: RootState) => state.entryForm.date;
export const selectFromTime = (state: RootState) => state.entryForm.fromTime;
export const selectToTime = (state: RootState) => state.entryForm.toTime;
export const selectLunchDuration = (state: RootState) =>
  state.entryForm.lunchDuration;
export const selectDayOff = (state: RootState) => state.entryForm.dayOff;
export const selectFormEntry = (state: RootState) => state.entryForm;

export const submitEntry = (
  userId: string,
  newEntry: Entry
): AppThunk => async (dispatch) => {
  const result = await persistEntry(userId, newEntry);

  const entry: Entry = {
    ...newEntry,
    id: result.id,
  };

  dispatch(entryFormSlice.actions.submitEntry(entry));
};
