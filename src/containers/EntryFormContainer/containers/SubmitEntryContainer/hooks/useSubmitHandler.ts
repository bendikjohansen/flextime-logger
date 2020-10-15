import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toEntry } from "../../../../../app/converters";
import { selectUserId } from "../../../../../app/slices/authSlice";
import { selectFormEntry } from "../../../../../app/slices/entryFormSlice";
import { storeEntry } from "../../../../../app/slices/entrySlice";

const useSubmitHandler = () => {
  const dispatch = useDispatch();
  const formEntry = useSelector(selectFormEntry);
  const userId = useSelector(selectUserId);

  return useCallback(() => {
    if (!userId) return;
    const entry = toEntry(formEntry);
    dispatch(storeEntry(userId, entry));
  }, [dispatch, formEntry, userId]);
};

export default useSubmitHandler;
