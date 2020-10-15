import { KeyboardTimePicker } from "@material-ui/pickers";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFromTime,
  setFromTime,
} from "../../../app/slices/entryFormSlice";

const FromTimeInputContainer = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFromTime);
  const changeHandler = useCallback(
    (value) => dispatch(setFromTime(value.format())),
    [dispatch]
  );

  return (
    <KeyboardTimePicker
      label="From"
      ampm={false}
      value={value}
      onChange={changeHandler}
    />
  );
};

export default FromTimeInputContainer;
