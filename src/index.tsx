import React from "react";
import ReactDOM from "react-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import AppContainer from "./containers/AppContainer/AppContainer";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import firebase from 'firebase/app';
import firebaseConfig from "./firebaseConfig";

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline />
      <Router>
        <AppContainer />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
