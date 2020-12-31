import firebase from "firebase/app";
import "firebase/firestore";

const fetchWorkdayLength = async (): Promise<number> => {
  const user = firebase.auth().currentUser;
  if (!user) {
    return 0;
  }

  const docRef = firebase.firestore().doc(`entries/${user?.uid}`);
  const doc = await docRef.get();
  if (doc.exists) {
    const data = doc.data();
    return data?.workdayLength as number ?? 0;
  } else {
    firebase.firestore().doc(`entries/${user?.uid}`).update({
      workdayLength: 425,
    });
  }
  return 425;
};

export default fetchWorkdayLength;
