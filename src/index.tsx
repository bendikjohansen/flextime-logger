import CssBaseline from "@material-ui/core/CssBaseline";
import firebase from 'firebase/app';
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import AuthContainer from "./containers/AuthContainer/AuthContainer";
import firebaseConfig from "./firebaseConfig";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
      <CssBaseline />
      <Router>
        <AuthContainer />
      </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
