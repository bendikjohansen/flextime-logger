import React from "react";
import { Entry } from "../../../../app/types";
import { OverviewTable } from "../../../../components/overview";
import useEntryList from "./useEntryList";

interface Props {
  entries: Entry[];
  workdayLength: number;
}

const EntryListContainer = ({ entries, workdayLength }: Props) => {
  const outcomes = useEntryList(entries, workdayLength);

  return <OverviewTable outcomes={outcomes} onDelete={console.log} />;
};

export default EntryListContainer;
