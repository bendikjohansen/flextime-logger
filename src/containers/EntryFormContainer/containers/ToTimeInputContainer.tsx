import { KeyboardTimePicker } from "@material-ui/pickers";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectToTime, setToTime } from "../../../app/slices/entryFormSlice";

const ToTimeInputContainer = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectToTime);
  const changeHandler = useCallback(
    (value) => dispatch(setToTime(value.format())),
    [dispatch]
  );

  return (
    <KeyboardTimePicker
      label="To"
      ampm={false}
      value={value}
      onChange={changeHandler}
    />
  );
};

export default ToTimeInputContainer;
