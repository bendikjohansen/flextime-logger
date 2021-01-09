import dayjs from "dayjs";
import FormValues from "../../components/entryForm/FormValues";
import { Entry } from "../types";

const toEntry = (formEntry: FormValues): Entry => {
  const start = dayjs(formEntry.from).date(dayjs(formEntry.date).date()).unix();
  return {
    id: null,
    startTimestamp: start,
    endTimestamp:
      start + dayjs(formEntry.to).unix() - dayjs(formEntry.from).unix(),
    dayOff: formEntry.dayOff === "true",
    lunchDuration: formEntry.lunch,
  };
};

export default toEntry;
