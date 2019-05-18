import firebase from '@firebase/app';
import '@firebase/firestore'
import 'firebase/auth';


var config = {
    apiKey: "AIzaSyAg0VM8M23NOdj9iDZykGHfKsbRMc7zoLM",
    authDomain: "bdguild-04.firebaseapp.com",
    databaseURL: "https://bdguild-04.firebaseio.com",
    projectId: "bdguild-04",
    storageBucket: "bdguild-04.appspot.com",
    messagingSenderId: "1072720111468"
  };
 firebase.initializeApp(config);


  export default firebase;