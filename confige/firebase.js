import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";
var firebaseConfig = {
  apiKey: "AIzaSyBNh1_WBEAHLgSvp5n3LUlhPiOUikTfdzM",
  authDomain: "sanjaimathrani.firebaseapp.com",
  databaseURL: "https://sanjaimathrani.firebaseio.com",
  projectId: "sanjaimathrani",
  storageBucket: "sanjaimathrani.appspot.com",
  messagingSenderId: "962050156396",
  appId: "1:962050156396:web:991623b829b275e62db549",
  measurementId: "G-5GBW9TFRGX",
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
