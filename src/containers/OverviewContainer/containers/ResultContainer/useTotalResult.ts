import { useMemo } from "react";
import { toTotalOutcome } from "../../../../app/converters";
import { Entry } from "../../../../app/types";

const useTotalResult = (entries: Entry[], workdayLength: number) =>
  useMemo(() => toTotalOutcome(entries, workdayLength), [entries, workdayLength]);

export default useTotalResult;
