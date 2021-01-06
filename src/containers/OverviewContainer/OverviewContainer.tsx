import React from "react";
import EntryListContainer from "./containers/EntryListContainer/EntryListContainer";
import ResultContainer from "./containers/ResultContainer/ResultContainer";
import useEntries from "./useEntries";
import useWorkdayLength from "./useWorkdayLength";

const OverviewContainer = () => {
  const entries = useEntries();
  const workdayLength = useWorkdayLength();

  return (
    <>
      <ResultContainer entries={entries} workdayLength={workdayLength} />
      <EntryListContainer entries={entries} workdayLength={workdayLength} />
    </>
  );
};

export default OverviewContainer;
