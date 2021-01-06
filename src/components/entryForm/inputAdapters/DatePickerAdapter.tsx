import { DatePicker } from "@material-ui/pickers";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import React from "react";
import { FieldRenderProps } from "react-final-form";

const DatePickerAdapter = ({
  input,
  meta,
  ...rest
}: FieldRenderProps<MaterialUiPickersDate>) => (
  <DatePicker {...input} {...rest} onChange={(date) => input.onChange(date)} />
);

export default DatePickerAdapter;
