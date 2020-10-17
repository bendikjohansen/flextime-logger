import React from "react";
import EntryListContainer from "./containers/EntryListContainer/EntryListContainer";
import ResultContainer from "./containers/ResultContainer/ResultContainer";
import { useEntryListener } from "./hooks";

const OverviewContainer = () => {
  useEntryListener();

  return (
    <>
      <ResultContainer />
      <EntryListContainer />
    </>
  );
};

export default OverviewContainer;
