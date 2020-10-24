import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import React from "react";
import { EntryOutcome } from "../../app/types";
import OverviewTableBody from "./OverviewTableBody";
import OverviewTableHeader from "./OverviewTableHeader";

interface Props {
  onDelete: (id: string) => void;
  outcomes: EntryOutcome[];
}

const OverviewTable = ({ onDelete, outcomes }: Props) => (
  <TableContainer component={Paper}>
    <Table>
      <OverviewTableHeader />
      <OverviewTableBody onDelete={onDelete} outcomes={outcomes} />
    </Table>
  </TableContainer>
);

export default OverviewTable;
