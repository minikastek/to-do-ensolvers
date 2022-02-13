import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBzxtAqCO4TjSQmSqWsCfLRxuQi46Eo6nU",
  authDomain: "to-do-ensolvers.firebaseapp.com",
  projectId: "to-do-ensolvers",
  storageBucket: "to-do-ensolvers.appspot.com",
  messagingSenderId: "878645671957",
  appId: "1:878645671957:web:5afb0df3aee3e4d5d3361c"
};

firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

export {
    db,
    firebase
}