import TextField from "@material-ui/core/TextField";
import React, { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectLunchDuration,
  setLunchDuration,
} from "../../../app/slices/entryFormSlice";

const LunchDurationInputContainer = () => {
  const dispatch = useDispatch();
  const lunchDuration = useSelector(selectLunchDuration);
  const value = useMemo(() => lunchDuration / 60, [lunchDuration]);
  const changeHandler = useCallback(
    (e) => dispatch(setLunchDuration(e.target.value * 60)),
    [dispatch]
  );

  return (
    <TextField
      value={value}
      onChange={changeHandler}
      size="small"
      label="Lunch duration"
      type="number"
    />
  );
};

export default LunchDurationInputContainer;
