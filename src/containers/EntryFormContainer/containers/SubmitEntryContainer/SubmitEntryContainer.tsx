import Button from "@material-ui/core/Button";
import React from "react";
import { useSubmitHandler } from "./hooks";

const LunchDurationInputContainer = () => {
  const clickHandler = useSubmitHandler();

  return (
    <Button onClick={clickHandler} color="primary" variant="contained">
      Submit
    </Button>
  );
};

export default LunchDurationInputContainer;
