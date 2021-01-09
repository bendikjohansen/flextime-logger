import React from "react";
import deleteEntry from "../../../../app/database/deleteEntry";
import { Entry } from "../../../../app/types";
import { OverviewTable } from "../../../../components/overview";
import useEntryList from "./useEntryList";

interface Props {
  entries: Entry[];
  workdayLength: number;
}

const EntryListContainer = ({ entries, workdayLength }: Props) => {
  const outcomes = useEntryList(entries, workdayLength);

  return <OverviewTable outcomes={outcomes} onDelete={deleteEntry} />;
};

export default EntryListContainer;
