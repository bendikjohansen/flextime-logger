import CssBaseline from "@material-ui/core/CssBaseline";
import firebase from 'firebase/app';
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./app/store";
import AuthContainer from "./containers/AuthContainer/AuthContainer";
import firebaseConfig from "./firebaseConfig";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline />
      <Router>
        <AuthContainer />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
