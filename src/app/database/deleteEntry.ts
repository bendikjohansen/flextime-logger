import firebase from "firebase/app";
import "firebase/firestore";

const deleteEntry = async (entryId: string): Promise<void> => {
  const user = firebase.auth().currentUser;
  if (!user) {
    return;
  }
  firebase.firestore().doc(`entries/${user?.uid}/list/${entryId}`).delete();
};

export default deleteEntry;
