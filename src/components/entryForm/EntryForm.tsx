import DayjsUtils from "@date-io/dayjs";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import React from "react";

interface Props {
  children: [
    JSX.Element,
    JSX.Element,
    JSX.Element,
    JSX.Element,
    JSX.Element,
    JSX.Element
  ];
}

const EntryForm = ({ children }: Props) => {
  return (
    <MuiPickersUtilsProvider utils={DayjsUtils}>
      <Typography variant="h3">New Entry</Typography>

      <Box marginTop={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            {children[0]}
          </Grid>
          <Grid item xs={12}>
            {children[1]}
          </Grid>
          <Grid item xs={12}>
            {children[2]}
          </Grid>
          <Grid item xs={12}>
            {children[3]}
          </Grid>
          <Grid item xs={12}>
            {children[4]}
          </Grid>
          <Grid item xs={12}>
            {children[5]}
          </Grid>
        </Grid>
      </Box>
    </MuiPickersUtilsProvider>
  );
};

export default EntryForm;
