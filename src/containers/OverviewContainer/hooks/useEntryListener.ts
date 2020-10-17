import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listenToEntries } from "../../../app/database";
import { selectUserId } from "../../../app/slices/authSlice";
import { selectBaselineDuration } from "../../../app/slices/baselineSlice";
import { setEntries } from "../../../app/slices/entrySlice";

const useEntryListener = () => {
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
};

export default useEntryListener;
