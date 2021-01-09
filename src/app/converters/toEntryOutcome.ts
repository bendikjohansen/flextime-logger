import dayjs from "dayjs";
import { Entry, EntryOutcome } from "../types";

const toEntryOutcome = (entry: Entry, baseline: number): EntryOutcome => {
  const date = dayjs.unix(entry.startTimestamp).format("DD.MM.YYYY");
  const workdayLength = (entry.endTimestamp - entry.startTimestamp) / 60;
  const expected = entry.dayOff ? 0 : baseline;
  const minuteDifference = workdayLength - expected - entry.lunchDuration;

  const hours = Math.floor(minuteDifference / 60);
  const minutes = Math.round(minuteDifference - hours * 60);

  return {
    id: entry.id as string,
    date,
    hours,
    minutes,
  };
};

export default toEntryOutcome;
