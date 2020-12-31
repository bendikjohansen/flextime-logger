import TextField from "@material-ui/core/TextField";
import React from "react";
import { FieldRenderProps } from "react-final-form";

const TextFieldAdapter = ({
  input,
  meta,
  ...rest
}: FieldRenderProps<string>) => <TextField {...input} {...rest} />;

export default TextFieldAdapter;
