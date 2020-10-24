import Fab from "@material-ui/core/Fab";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { useCallback } from "react";
import { EntryOutcome } from "../../app/types";

interface Props {
  onDelete: (id: string) => void;
  outcome: EntryOutcome;
}

const OverviewTableRow = ({ onDelete, outcome }: Props) => {
  const handleDelete = useCallback(() => onDelete(outcome.id), [
    onDelete,
    outcome,
  ]);

  return (
    <TableRow key={outcome.id}>
      <TableCell align="right">{outcome.date}</TableCell>
      <TableCell align="right">
        {outcome.hours}h {outcome.minutes}m
      </TableCell>
      <TableCell align="right">
        <Fab size="small" color="secondary">
          <DeleteIcon onClick={handleDelete} />
        </Fab>
      </TableCell>
    </TableRow>
  );
};

export default OverviewTableRow;
