import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyANPScSidJr0tRpDi5JACSMt1WdOm3s8AU',
  authDomain: 'lux-clothing.firebaseapp.com',
  databaseURL: 'https://lux-clothing.firebaseio.com',
  projectId: 'lux-clothing',
  storageBucket: 'lux-clothing.appspot.com',
  messagingSenderId: '763883872834',
  appId: '1:763883872834:web:ea66f57cdbc184a4ae43db',
  measurementId: 'G-8Z1CKR41GG',
};

// get user profile

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  //retrieving user from the db
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // retrieving user ref
  // snapShot represent the data of the user
  const snapShot = await userRef.get;
  if (!snapShot.exist) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// to trigger google auth when log in
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
