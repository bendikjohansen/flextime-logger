import dayjs from "dayjs";
import { Entry } from "../types";

interface Outcome {
  [date: string]: number;
}
interface DayOffDict {
  [date: string]: boolean;
}

const getDate = (entry: Entry) =>
  dayjs.unix(entry.startTimestamp).toISOString();

const getWorkTime = (entry: Entry) =>
  (entry.endTimestamp - entry.startTimestamp) / 60 - entry.lunchDuration;

const addWork = (result: Outcome, entry: Entry) => ({
  ...result,
  [getDate(entry)]: (result[getDate(entry)] ?? 0) + getWorkTime(entry),
});

const isDayOff = (result: DayOffDict, entry: Entry) => ({
  ...result,
  [getDate(entry)]: result[getDate(entry)] || entry.dayOff,
});

const toTotalOutcome = (
  entries: Entry[],
  workdayLength: number
): { hours: number; minutes: number } => {
  const workdayLengths = entries.reduce<Outcome>(addWork, {});
  const dayOffMap = entries.reduce<DayOffDict>(isDayOff, {});

  const getMinutesToSpare = ([date, value]: [string, number]) =>
    value - (dayOffMap[date] ? 0 : workdayLength);
  const actualWork = Object.entries(workdayLengths).map(getMinutesToSpare);
  const totalMinutes = actualWork.reduce((a, b) => a + b, 0);

  return {
    hours: Math.floor(totalMinutes / 60),
    minutes: totalMinutes % 60,
  };
};

export default toTotalOutcome;
