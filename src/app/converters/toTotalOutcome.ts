import dayjs from "dayjs";
import { Entry } from "../types";

type DateOutcomeDict = {
  [date: string]: {
    isWeekend: boolean;
    workdayLength: number;
  };
};

const isWeekend = (timestamp: number): boolean =>
  [0, 6].includes(dayjs.unix(timestamp).day());

const toTotalOutcome = (
  entries: Entry[],
  workdayLength: number
): { hours: number; minutes: number } => {
  const workdayLengths = entries.map((entry) => ({
    date: dayjs.unix(entry.startTimestamp).format(),
    workdayLength:
      entry.endTimestamp -
      entry.startTimestamp -
      entry.lunchDuration +
      (isWeekend(entry.startTimestamp) ? workdayLength : 0),
  }));
  const workdayLengthsPerDate = workdayLengths.reduce(
    (result, workday) => ({
      ...result,
      [workday.date]: {
        workdayLength: (result[workday.date]?.workdayLength ?? 0) + workday.workdayLength,
        isWeekend: result[workday.date]?.isWeekend ?? isWeekend(dayjs(workday.date).unix())
      },
    }),
    {} as DateOutcomeDict
  );
  const totalOutcome = Object.values(workdayLengthsPerDate).reduce(
    (result, workday) => result + (workday.workdayLength - (workday.isWeekend ? 0 : workdayLength)) / 60,
    0
  );

  const hours = Math.floor(totalOutcome / 60);
  const minutes = Math.round(totalOutcome - hours * 60);
  return {
    hours,
    minutes,
  };
};

export default toTotalOutcome;
