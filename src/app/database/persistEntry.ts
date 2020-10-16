import firebase from "firebase/app";
import "firebase/firestore";
import { Entry } from "../types";

const persistEntry = (userId: string, { id, ...entry }: Entry) =>
  firebase.firestore().collection(`entries/${userId}/list`).add(entry);

export default persistEntry;
