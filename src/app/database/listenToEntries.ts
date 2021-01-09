import firebase from "firebase/app";
import "firebase/firestore";
import { Entry } from "../types";

const listenToEntries = (callback: (entries: Entry[]) => void) => {
  const user = firebase.auth().currentUser;
  if (!user) {
    return;
  }

  return firebase
    .firestore()
    .collection(`entries/${user?.uid}/list`)
    .onSnapshot((collection) => {
      const entries = collection.docs.map(
        (doc): Entry => ({
          ...(doc.data() as Entry),
          id: doc.id,
        })
      );
      callback(entries);
    });
};

export default listenToEntries;
