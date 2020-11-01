import React from "react";
import { AuthPage } from "../../components/auth";
import AppContainer from "../AppContainer/AppContainer";
import { useAuth } from "./hooks";

const AuthContainer = () => {
  const userId = useAuth();

  return (
    <AuthPage userId={userId}>
      <AppContainer />
    </AuthPage>
  );
};

export default AuthContainer;
