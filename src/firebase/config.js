import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyARMc_gzH1lmw7Tb7ZdzQ3EB7PBwNWAp5s",
    authDomain: "olx-demo-a3d1c.firebaseapp.com",
    projectId: "olx-demo-a3d1c",
    storageBucket: "olx-demo-a3d1c.appspot.com",
    messagingSenderId: "882344182490",
    appId: "1:882344182490:web:d5576d592c2af7ce811be3",
    measurementId: "G-TYRZ6QL19Z"
  };

export default firebase.initializeApp(firebaseConfig) 