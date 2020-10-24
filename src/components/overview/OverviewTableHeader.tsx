import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React from "react";

const OverviewTableHeader = () => (
  <TableHead>
    <TableRow>
      <TableCell align="right">Date</TableCell>
      <TableCell align="right">Outcome</TableCell>
      <TableCell align="right">Action</TableCell>
    </TableRow>
  </TableHead>
);

export default OverviewTableHeader;
