import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDoQkL9DyoTDYHrBcHOpzkkNM53tZOD44g",
  authDomain: "todo-8dc69.firebaseapp.com",
  databaseURL: "https://todo-8dc69.firebaseio.com",
  projectId: "todo-8dc69",
  storageBucket: "todo-8dc69.appspot.com",
  messagingSenderId: "191099587200",
  appId: "1:191099587200:web:e4c82f47e17e6f2ba8b465",
  measurementId: "G-X3TZMNPPYV",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();
