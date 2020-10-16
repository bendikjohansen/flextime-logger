import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listenToEntries } from "../../app/database";
import { selectUserId } from "../../app/slices/authSlice";
import { selectBaselineDuration } from "../../app/slices/baselineSlice";
import { setEntries } from "../../app/slices/entrySlice";
import EntryListContainer from "./containers/EntryListContainer/EntryListContainer";
import ResultContainer from "./containers/ResultContainer/ResultContainer";

const OverviewContainer = () => {
  const userId = useSelector(selectUserId);
  const baseline = useSelector(selectBaselineDuration);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!userId) {
      return;
    }

    const unsubscribe = listenToEntries(userId, (entries) => {
      dispatch(setEntries({ entries, baseline }));
    });

    return unsubscribe;
  }, [baseline, dispatch, userId]);

  return (
    <>
      <ResultContainer />
      <EntryListContainer />
    </>
  );
};

export default OverviewContainer;
