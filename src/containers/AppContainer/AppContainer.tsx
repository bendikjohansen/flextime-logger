import React from "react";
import { useCallback } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { App } from "../../components";
import BaselineContainer from "../BaselineContainer/BaselineContainer";
import EntryFormContainer from "../EntryFormContainer/EntryFormContainer";
import EntryListContainer from "../EntryListContainer/EntryListContainer";
import ResultContainer from "../ResultContainer/ResultContainer";

const AppContainer = () => {
  const history = useHistory();
  const listHandleClick = useCallback(() => history.push('/'), [history]);
  const addHandleClick = useCallback(() => history.push('/new'), [history]);
  const editHandleClick = useCallback(() => history.push('/edit'), [history]);

  return (
    <App listOnClick={listHandleClick} addOnClick={addHandleClick} editOnClick={editHandleClick}>
      <Switch>
        <Route exact path="/edit">
          <BaselineContainer />
        </Route>
        <Route exact path="/new">
          <EntryFormContainer />
        </Route>
        <Route path="/">
          <ResultContainer />
          <EntryListContainer />
        </Route>
      </Switch>
    </App>
  );
};

export default AppContainer;
