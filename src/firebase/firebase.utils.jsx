import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC-Bo2KV5P9aNnhbsLZH7gnvlL6_XxQSJM",
    authDomain: "crwn-db-674a3.firebaseapp.com",
    databaseURL: "https://crwn-db-674a3.firebaseio.com",
    projectId: "crwn-db-674a3",
    storageBucket: "crwn-db-674a3.appspot.com",
    messagingSenderId: "160178901025",
    appId: "1:160178901025:web:19d746ff6fca8f44fe9360",
    measurementId: "G-T5XYNYC02Z"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;