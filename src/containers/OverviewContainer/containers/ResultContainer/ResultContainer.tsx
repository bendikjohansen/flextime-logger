import React from "react";
import { Entry } from "../../../../app/types";
import useTotalResult from "./useTotalResult";

interface Props {
  entries: Entry[];
  workdayLength: number;
}

const ResultContainer = ({ entries, workdayLength }: Props) => {
  const { hours, minutes } = useTotalResult(entries, workdayLength);

  return (
    <p>
      Result: {hours} hours and {minutes} minutes.
    </p>
  );
};

export default ResultContainer;
