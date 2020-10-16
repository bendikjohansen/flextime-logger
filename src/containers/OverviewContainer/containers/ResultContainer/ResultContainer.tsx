
import React from 'react';
import { useSelector } from 'react-redux';
import { selectResult } from '../../../../app/slices/resultSlice';

const ResultContainer = () => {
  const { hours, minutes } = useSelector(selectResult);

return <p>Result: {hours} hours and {minutes} minutes.</p>;
}

export default ResultContainer;
