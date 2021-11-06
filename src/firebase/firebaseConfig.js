import firebase from 'firebase/compat/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDoM2TilD-_h77PjLfXyDehq65HOWBXsn8",
    authDomain: "gallery-b373c.firebaseapp.com",
    projectId: "gallery-b373c",
    storageBucket: "gallery-b373c.appspot.com",
    messagingSenderId: "987496383053",
    appId: "1:987496383053:web:f94061a898af3405d4d204"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage()
const auth = firebase.auth()
const db = firebase.firestore()

export { storage, auth, db }