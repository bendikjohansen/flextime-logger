import firebase from "firebase/app";
import "firebase/auth";
import { useState } from "react";

const useAuth = (): boolean => {
  const [authenticated, setAuthenticated] = useState(false);

  firebase.auth().onAuthStateChanged((user) => {
    setAuthenticated(user !== null);
  });

  return authenticated;
};

export default useAuth;
