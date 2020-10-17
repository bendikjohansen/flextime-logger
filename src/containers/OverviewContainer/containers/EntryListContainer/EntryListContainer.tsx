import Fab from "@material-ui/core/Fab";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";
import { useSelector } from "react-redux";
import { selectResultsByDate } from "../../../../app/slices/resultSlice";

const EntryListContainer = () => {
  const outcomes = useSelector(selectResultsByDate);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Outcome</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {outcomes.map((outcome) => (
            <TableRow key={outcome.id}>
              <TableCell align="right">{outcome.date}</TableCell>
              <TableCell align="right">
                {outcome.hours}h {outcome.minutes}m
              </TableCell>
              <TableCell align="right">
                <Fab size="small" color="secondary">
                  <DeleteIcon />
                </Fab>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EntryListContainer;
