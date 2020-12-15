import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAbNtGnABAFYFhWTpT2Tn0X7q4VqfiQ_jo",
    authDomain: "agust2020.firebaseapp.com",
    databaseURL: "https://agust2020.firebaseio.com",
    projectId: "agust2020",
    storageBucket: "agust2020.appspot.com",
    messagingSenderId: "1041207617353",
    appId: "1:1041207617353:web:76f28056e7897a359fdc98",
    measurementId: "G-E5ET6H0W3G"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};