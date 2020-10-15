import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectDayOff, setDayOff } from "../../../app/slices/entryFormSlice";

const DayOffInputContainer = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectDayOff);
  const changeHandler = useCallback(
    (e) => dispatch(setDayOff(e.target.checked)),
    [dispatch]
  );

  return (
    <FormControlLabel
      control={<Checkbox checked={value} onChange={changeHandler} />}
      label="Day off"
    />
  );
};

export default DayOffInputContainer;
