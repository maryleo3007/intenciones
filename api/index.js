
var fb = require("firebase");
  // Initialize Firebase
var config = {
  apiKey: "AIzaSyBJpPsYRZE67OyFMgsZL3aegYuvmWiyu5A",
  authDomain: "intenciones-97a3a.firebaseapp.com",
  databaseURL: "https://intenciones-97a3a.firebaseio.com",
  projectId: "intenciones-97a3a",
  storageBucket: "intenciones-97a3a.appspot.com",
  messagingSenderId: "387829827654"
};
firebase.initializeApp(config);
var database = firebase.database();
