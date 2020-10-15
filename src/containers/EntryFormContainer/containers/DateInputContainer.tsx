import { KeyboardDatePicker } from '@material-ui/pickers';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDate, setDate } from '../../../app/slices/entryFormSlice';

const DateInputContainer = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectDate);
  const changeHandler = useCallback((value) => dispatch(setDate(value.format())), [dispatch]);

  return <KeyboardDatePicker label="Date" value={value} onChange={changeHandler} />;
}

export default DateInputContainer;
