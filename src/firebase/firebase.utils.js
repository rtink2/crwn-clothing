import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCi_ZSPxMrBoZyCS_BXnZQftkOqbtOd_uA",
  authDomain: "crwn-clothing-7a51e.firebaseapp.com",
  databaseURL: "https://crwn-clothing-7a51e.firebaseio.com",
  projectId: "crwn-clothing-7a51e",
  storageBucket: "crwn-clothing-7a51e.appspot.com",
  messagingSenderId: "831745618773",
  appId: "1:831745618773:web:4fc5a567be2922c7c775dc"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;