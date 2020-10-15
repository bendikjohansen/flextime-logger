import dayjs from "dayjs";
import { EntryFormState } from "../slices/entryFormSlice";
import { Entry } from "../types";

const toEntry = (formEntry: EntryFormState): Entry => ({
  id: null,
  startTimestamp: dayjs(formEntry.fromTime).unix(),
  endTimestamp: dayjs(formEntry.toTime).unix(),
  dayOff: formEntry.dayOff,
  lunchDuration: formEntry.lunchDuration,
});

export default toEntry;
