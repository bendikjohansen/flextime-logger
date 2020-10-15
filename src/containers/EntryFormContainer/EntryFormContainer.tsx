import React from "react";
import { EntryForm } from "../../components/entryForm";
import {
  DateInputContainer,
  DayOffInputContainer,
  FromTimeInputContainer,
  LunchDurationInputContainer,
  SubmitEntryContainer,
  ToTimeInputContainer
} from "./containers";

const EntryFormContainer = () => (
  <EntryForm>
    <DateInputContainer />
    <FromTimeInputContainer />
    <ToTimeInputContainer />
    <LunchDurationInputContainer />
    <DayOffInputContainer />
    <SubmitEntryContainer />
  </EntryForm>
);

export default EntryFormContainer;
