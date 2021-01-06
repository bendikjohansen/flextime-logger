import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import React from "react";
import { FieldRenderProps } from "react-final-form";

const SwitchAdapter = ({
  input,
  meta,
  label,
  ...rest
}: FieldRenderProps<string>) => (
  <FormControlLabel label={label} control={<Switch {...input} {...rest} />} />
);

export default SwitchAdapter;
