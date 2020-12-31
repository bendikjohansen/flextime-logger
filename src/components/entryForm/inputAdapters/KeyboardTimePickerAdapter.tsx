import { KeyboardTimePicker } from "@material-ui/pickers";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import React from "react";
import { FieldRenderProps } from "react-final-form";

const DatePickerAdapter = ({
  input,
  meta,
  ...rest
}: FieldRenderProps<MaterialUiPickersDate>) => (
  <KeyboardTimePicker
    {...input}
    {...rest}
    onChange={(date) => input.onChange(date)}
    ampm={false}
  />
);

export default DatePickerAdapter;
