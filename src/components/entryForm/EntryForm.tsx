import DayjsUtils from "@date-io/dayjs";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import dayjs, { Dayjs } from "dayjs";
import React from "react";
import { Field, Form } from "react-final-form";
import {
  DatePickerAdapter,
  KeyboardTimePickerAdapter,
  SwitchAdapter,
  TextFieldAdapter,
} from "./inputAdapters";
import submitForm from "./submitForm";

const isWeekday = (date: Dayjs) =>
  ["saturday", "sunday"].includes(date.format("dddd").toLowerCase());

const EntryForm = () => {
  return (
    <MuiPickersUtilsProvider utils={DayjsUtils}>
      <Typography variant="h3">New Entry</Typography>

      <Box marginTop={3}>
        <Form
          onSubmit={submitForm}
          initialValues={{
            date: dayjs().format(),
            from: dayjs().hour(8).minute(0).second(0).format(),
            to: dayjs().hour(15).minute(35).second(0).format(),
            lunch: 30,
            dayOff: isWeekday(dayjs()).toString(),
          }}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Field
                    name="date"
                    label="Date"
                    component={DatePickerAdapter}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="from"
                    label="From"
                    component={KeyboardTimePickerAdapter}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="to"
                    label="To"
                    component={KeyboardTimePickerAdapter}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="lunch"
                    type="number"
                    label="Lunch duration"
                    component={TextFieldAdapter}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="dayOff"
                    label="Day off"
                    type="checkbox"
                    component={SwitchAdapter}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" color="primary" variant="contained">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          )}
        />
      </Box>
    </MuiPickersUtilsProvider>
  );
};

export default EntryForm;
