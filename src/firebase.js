// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword,
  GoogleAuthProvider, signInWithPopup, updateProfile,
} from 'firebase/auth';
import {
  getFirestore, addDoc, collection, doc, setDoc, onSnapshot, getDoc, deleteDoc, updateDoc,
  arrayUnion, arrayRemove, serverTimestamp, query, orderBy,
} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA3maUa17yJd5U-6oLPwJezQ7NfOP1Ycnw',
  authDomain: 'laboratorians-music-2.firebaseapp.com',
  projectId: 'laboratorians-music-2',
  storageBucket: 'laboratorians-music-2.appspot.com',
  messagingSenderId: '603110199557',
  appId: '1:603110199557:web:1a7d20d7f0905017db276c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const database = getFirestore(app);

// export const user = auth.onAuthStateChanged;

export const user = () => {
  auth.onAuthStateChanged((us) => {
    if (us) {
      localStorage.setItem('uidUsuario', us.uid);
      localStorage.setItem('emailUser', us.email);
      localStorage.setItem('displayName', us.displayName);
      console.log(us.displayName);
      console.log('state = definitely signed in');
    } else {
      // User is signed out.
      console.log('state = definitely signed out');
    }
  });
};

export const profileUpdate = (displayName) => updateProfile(auth.currentUser, {
  displayName,
});

// eslint-disable-next-line arrow-body-style
export const loginEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logOut = () => signOut(auth);

// eslint-disable-next-line arrow-body-style
export const registerEmailAndPassword = (email, contraseña) => {
  return createUserWithEmailAndPassword(auth, email, contraseña);
};

export const googleRegister = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider);
};

export const newUserCollection = (userID, usuario, email, contraseña) => {
  setDoc(doc(database, 'users', userID), {
    user: usuario,
    correo: email,
    password: contraseña,
    id: userID,
  });
};

export const newPostCollection = (post, name, uid) => {
  addDoc(collection(database, 'posts'), {
    post,
    name,
    uid,
    likes: [],
    dateCreated: serverTimestamp(),
  });
};

const collectionFirebase = collection(database, 'posts');

export const order = () => query(collectionFirebase, orderBy('dateCreated', 'desc'));

export const onGetUsers = (callback) => onSnapshot(collection(database, 'users'), callback);

export const onGetPosts = (callback) => onSnapshot(order(), callback);

export const getUserLog = (uid) => getDoc(doc(database, 'users', uid));

export const deletePost = (uid) => deleteDoc(doc(database, 'posts', uid));

export const updatePost = (uid, newPostEdit) => updateDoc(doc(database, 'posts', uid), {
  post: newPostEdit,
});

export const updateLikePost = (uid, counterLikes) => updateDoc(doc(database, 'posts', uid), {
  likes: arrayUnion(counterLikes),
});

export const disLikePost = (uid, counterLikes) => updateDoc(doc(database, 'posts', uid), {
  likes: arrayRemove(counterLikes),
});

// export const catchData = getDocs(collection(database, 'users'));
// catchData.forEach((doc) => {
//   console.log(doc.id, doc);
//   return doc;
// });

// doc.data() is never undefined for query doc snapshots
