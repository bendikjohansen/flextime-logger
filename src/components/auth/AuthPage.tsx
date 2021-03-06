import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import app from "firebase/app";
import "firebase/auth";
import React from "react";

interface Props {
  children: JSX.Element;
  isAuthenticated: boolean;
}

const login = async () => {
  const provider = new app.auth.GoogleAuthProvider();
  await app.auth().signInWithPopup(provider);
};

const AuthPage = ({ children, isAuthenticated }: Props) => {
  return (
    <>
      <Dialog open={!isAuthenticated}>
        <DialogTitle>You are not logged in</DialogTitle>
        <Button onClick={login}>Log in</Button>
      </Dialog>
      {isAuthenticated && children}
    </>
  );
};

export default AuthPage;
