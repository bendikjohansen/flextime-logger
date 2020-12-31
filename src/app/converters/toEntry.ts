import dayjs from "dayjs";
import FormValues from "../../components/entryForm/FormValues";
import { Entry } from "../types";

const toEntry = (formEntry: FormValues): Entry => ({
  id: null,
  startTimestamp: dayjs(formEntry.from).unix(),
  endTimestamp: dayjs(formEntry.to).unix(),
  dayOff: formEntry.dayOff === 'true',
  lunchDuration: formEntry.lunch,
});

export default toEntry;
