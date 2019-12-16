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

export const createUserProfileDocument = async (userAuth, additionalData) => {

    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {
            displayName, email
        } = userAuth;
        const createdAt = new Date();

        try{

            await userRef.set({
                displayName, email, createdAt, ...additionalData
            })

        }catch (error){

            console.log('error creating user', error.message);

        }
    }

    return userRef;     

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollections = collections.docs.map(doc => {
        const {title, items} = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });

    //Converts array to object map
    return transformedCollections.reduce((accumulator, collection) =>{
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {})
}

/*export const addCollectionAndDocuments = async (collectionKey, documentsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();

    documentsToAdd.forEach((document) => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, document);
    });

    return await batch.commit();
}*/