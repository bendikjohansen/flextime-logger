import React from "react";
import { useSelector } from "react-redux";
import { selectResultsByDate } from "../../../../app/slices/resultSlice";
import { OverviewTable } from "../../../../components/overview";

const EntryListContainer = () => {
  const outcomes = useSelector(selectResultsByDate);

  return <OverviewTable outcomes={outcomes} onDelete={console.log} />
};

export default EntryListContainer;
