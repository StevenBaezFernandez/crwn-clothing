import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyDAA1s4Cnx0_6cnDUF-P2Yu7oQmb1TJiFg",
    authDomain: "crwn-db-da6f0.firebaseapp.com",
    projectId: "crwn-db-da6f0",
    storageBucket: "crwn-db-da6f0.appspot.com",
    messagingSenderId: "593030962239",
    appId: "1:593030962239:web:80c394f605c20bc2402c8a",
    measurementId: "G-ZMRNS6BYJP"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;