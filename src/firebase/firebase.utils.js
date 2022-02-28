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

export const createUserProfileDocument = async (userAuth, additionalData)=>{
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    
    if(!snapshot.exists){
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })

        } catch(error){
            console.log('Error creating user', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;