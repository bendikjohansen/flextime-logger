import firebase from 'firebase/app';
import "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  login,
  logout,
  selectUserId,
} from "../../../app/slices/authSlice";

const useAuth = (): string | null => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector(selectUserId);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      if (user && !loggedInUser) {
        dispatch(login(user.uid));
      } else if (!user && loggedInUser) {
        dispatch(logout());
      }
    });

    return () => unsubscribe();
  }, [dispatch, loggedInUser]);

  return loggedInUser;
};

export default useAuth;
