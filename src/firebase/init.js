import firebase from 'firebase'
import firestore from '@firebase/firestore'

// Web app's Firebase configuration
var config = {
    apiKey: "AIzaSyBbC7zqZ5OgSZRPMluGyIYoQVqT2DcQuEA",
    authDomain: "ninjaz-smoothie.firebaseapp.com",
    databaseURL: "https://ninjaz-smoothie.firebaseio.com",
    projectId: "ninjaz-smoothie",
    storageBucket: "",
    messagingSenderId: "786892127423",
    appId: "1:786892127423:web:d5e9de6620565e37"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(config);

//firebaseApp.firestore().settings({timestampsInSnapshots : true})

// export firestore database

export default firebaseApp.firestore()