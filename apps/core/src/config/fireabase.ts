import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env['NX_FIREBASE_API_KEY'],
  authDomain: process.env['NX_FIREBASE_AUTH_DOMAIN'],
  projectId: process.env['NX_FIREBASE_PROJECT_ID'],
  storageBucket: process.env['NX_FIREBASE_STORAGE_BUCKET'],
  messagingSenderId: process.env['NX_FIREBASE_MESSAGING_SENDER_ID'],
  appId: process.env['NX_FIREBASE_APPID'],
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebaseApp;
