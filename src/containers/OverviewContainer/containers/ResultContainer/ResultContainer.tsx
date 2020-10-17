
import React from 'react';
import { useSelector } from 'react-redux';
import { selectTotalResult } from '../../../../app/slices/resultSlice';

const ResultContainer = () => {
  const { hours, minutes } = useSelector(selectTotalResult);

return <p>Result: {hours} hours and {minutes} minutes.</p>;
}

export default ResultContainer;
