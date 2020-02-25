import * as firebase from 'firebase';




var firebaseConfig = {
    apiKey: "AIzaSyAemX5HVwQcVPvJplBf_et1lfePjn1xmlY",
    authDomain: "ball-64ec7.firebaseapp.com",
    databaseURL: "https://ball-64ec7.firebaseio.com",
    projectId: "ball-64ec7",
    storageBucket: "ball-64ec7.appspot.com",
    messagingSenderId: "1066006726152",
    appId: "1:1066006726152:web:13563df2c35bcdf0e873bd"
  };

  
  firebase.initializeApp(firebaseConfig);

  export default firebase;