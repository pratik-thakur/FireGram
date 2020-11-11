import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyAAU2lAgzpsgHQ05ZWnPf9OKbDcD39Ljgc",
    authDomain: "firegram-654ec.firebaseapp.com",
    databaseURL: "https://firegram-654ec.firebaseio.com",
    projectId: "firegram-654ec",
    storageBucket: "firegram-654ec.appspot.com",
    messagingSenderId: "519938219814",
    appId: "1:519938219814:web:a3f7d92bc47ea9c966ebe7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage,projectFirestore , timestamp };