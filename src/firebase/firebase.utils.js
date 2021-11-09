import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyDRAqs78ZcRsTMJXWZkRCXTBKIrz0FsatE",
  authDomain: "healthy-food-8ab22.firebaseapp.com",
  projectId: "healthy-food-8ab22",
  storageBucket: "healthy-food-8ab22.appspot.com",
  messagingSenderId: "941066992199",
  appId: "1:941066992199:web:67c6bb393aab9889314f62",
  measurementId: "G-MPSBC3D7HX"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;