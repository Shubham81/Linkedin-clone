import firebase from "firebase";
//import "firebase/compat/auth";
//import "firebase/compat/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDZd0uVyAjpPsstCfm-X78-X0kGyJUQdfQ",
    authDomain: "clone-linkedin-ca8d3.firebaseapp.com",
    databaseURL: "https://clone-linkedin-ca8d3-default-rtdb.firebaseio.com",
    projectId: "clone-linkedin-ca8d3",
    storageBucket: "clone-linkedin-ca8d3.appspot.com",
    messagingSenderId: "651925848254",
    appId: "1:651925848254:web:3015aca200bbf874bc5eef"
  };
    
  //this special line of code connect everything
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  //get the firestore database
  const db = firebaseApp.firestore();
  
  //we want to use firebase authentication
  const auth = firebase.auth();

  export {db,auth};