import firebase from "firebase/app";
import "firebase/firestore";
import { Entry } from "../types";

const listenToEntries = (
  userId: string,
  callback: (entries: Entry[]) => void
) =>
  firebase
    .firestore()
    .collection(`entries/${userId}/list`)
    .onSnapshot((collection) => {
      const entries = collection.docs.map(
        (doc): Entry => ({
          ...(doc.data() as Entry),
          id: doc.id,
        })
      );
      callback(entries);
    });

export default listenToEntries;
