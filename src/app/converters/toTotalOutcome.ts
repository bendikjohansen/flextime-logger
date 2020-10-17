import dayjs from "dayjs";
import { Entry } from "../types";

type DateOutcomeDict = { [date: string]: number };

const toTotalOutcome = (
  entries: Entry[],
  baseline: number
): { hours: number; minutes: number } => {
  const workdayLengths = entries.map((entry) => ({
    date: dayjs.unix(entry.startTimestamp).format(),
    workdayLength:
      entry.endTimestamp - entry.startTimestamp - entry.lunchDuration,
  }));
  const workdayLengthsPerDate = workdayLengths.reduce(
    (result, workday) => ({
      ...result,
      [workday.date]: (result[workday.date] ?? 0) + workday.workdayLength,
    }),
    {} as DateOutcomeDict
    );
    const totalOutcome = Object.values(workdayLengthsPerDate).reduce(
      (result, workdayLength) => result + (workdayLength - baseline) / 60,
      0
      );

  const hours = Math.floor(totalOutcome / 60);
  const minutes = totalOutcome - hours * 60;
  return {
    hours,
    minutes,
  };
};

export default toTotalOutcome;
