import dayjs from "dayjs";
import { Entry, EntryOutcome } from "../types";

const toEntryOutcome = (entry: Entry, baseline: number): EntryOutcome => {
  const date = dayjs.unix(entry.startTimestamp).format("DD.MM.YYYY");
  const workdayLength = entry.endTimestamp - entry.startTimestamp;
  const expected = baseline + entry.lunchDuration;
  const minuteDifference = (workdayLength - expected) / 60;

  const hours = Math.floor(minuteDifference / 60);
  const minutes = minuteDifference - hours * 60;

  return {
    id: entry.id as string,
    date,
    hours,
    minutes
  };
};

export default toEntryOutcome;
