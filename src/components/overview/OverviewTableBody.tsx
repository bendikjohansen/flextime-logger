import TableBody from "@material-ui/core/TableBody";
import React from "react";
import { EntryOutcome } from "../../app/types";
import OverviewTableRow from "./OverviewTableRow";

interface Props {
  onDelete: (id: string) => void;
  outcomes: EntryOutcome[];
}

const OverviewTableBody = ({ onDelete, outcomes }: Props) => (
  <TableBody>
    {outcomes.map((outcome) => (
      <OverviewTableRow
        key={outcome.id}
        onDelete={onDelete}
        outcome={outcome}
      />
    ))}
  </TableBody>
);

export default OverviewTableBody;
