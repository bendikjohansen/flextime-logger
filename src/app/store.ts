import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import {
  baselineReducer,
  entryReducer,
  entryFormReducer,
  resultReducer,
  authReducer,
} from "./slices";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    baseline: baselineReducer,
    entry: entryReducer,
    entryForm: entryFormReducer,
    result: resultReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
