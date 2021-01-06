import firebase from 'firebase/app';
import { toEntry } from '../../app/converters';
import { persistEntry } from '../../app/database';
import FormValues from './FormValues';


const submitForm = async (values: FormValues) => {
  const user = firebase.auth().currentUser;
  if (!user) {
    return;
  }

  const entry = toEntry(values);

  await persistEntry(user.uid, entry);
};

export default submitForm;
