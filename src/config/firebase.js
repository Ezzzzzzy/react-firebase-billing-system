import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

import { firebaseConfig } from "./dev";
firebase.initializeApp(firebaseConfig);

const databaseRef = firebase.database().ref();
export const authRef = firebase.auth();

export const FIREBASE_AUTH_PERSIST = firebase.auth.Auth.Persistence.LOCAL;

export const createToken = () => {
    const currentUser = firebase.auth().currentUser
    let token = "";
    currentUser.getIdToken(true).then(idToken => {
        token = idToken
        localStorage.setItem('billingToken', idToken);
    }).catch(error => {
        console.log(error)
    })

    return {
        token: token,
        uid: currentUser.uid
    }

}

export const userRef = (uid) => databaseRef.child("users/" + uid)
export const singleUserRef = databaseRef.child('users')
export const transactionRef = databaseRef.child("transactions")
export const singleTransactionRef = (uid) => databaseRef.child("transactions/"+uid)
