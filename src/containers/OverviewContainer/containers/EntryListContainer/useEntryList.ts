import { useMemo } from "react";
import { toEntryOutcome } from "../../../../app/converters";
import { Entry } from "../../../../app/types";

const useEntryList = (rawEntries: Entry[], workdayLength: number) =>
  useMemo(() => {
    const entries = rawEntries.map((e) => e);
    entries.sort((a, b) => b.startTimestamp - a.startTimestamp);
    const convert = (e: Entry) => toEntryOutcome(e, workdayLength);
    return entries.map(convert);
  }, [rawEntries, workdayLength]);

export default useEntryList;
