import React from "react";
import { AuthPage } from "../../components/auth";
import AppContainer from "../AppContainer/AppContainer";
import { useAuth } from "./hooks";

const AuthContainer = () => {
  const isAuthenticated = useAuth();

  return (
    <AuthPage isAuthenticated={isAuthenticated}>
      <AppContainer />
    </AuthPage>
  );
};

export default AuthContainer;
