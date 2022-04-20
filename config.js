import firebase from "firebase";
require("@firebase/firestore");


const firebaseConfig = {
  apiKey: "AIzaSyC-SxxQwdIg0BScOQDHlx3cjRBMavzsjYQ",
  authDomain: "e-ride-app-bad2b.firebaseapp.com",
  projectId: "e-ride-app-bad2b",
  storageBucket: "e-ride-app-bad2b.appspot.com",
  messagingSenderId: "623900190097",
  appId: "1:623900190097:web:7acc49c230b788116ea630"
};

firebase.initializeApp(firebaseConfig);
export default firebase.firestore()
