console.log('OK');
var firebaseConfig = {
  apiKey: "AIzaSyCqxmB8bNARGv7doN0HNr4fE4BZc_Fuj78",
  authDomain: "passtick-login.firebaseapp.com",
  databaseURL: "https://passtick-login.firebaseio.com",
  projectId: "passtick-login",
  storageBucket: "passtick-login.appspot.com",
  messagingSenderId: "55579632020",
  appId: "1:55579632020:web:382031ff847a78ba31af81",
  measurementId: "G-FSSEH86LRB"
};
// Initialize Firebase
const myFirebase = firebase.initializeApp(firebaseConfig);
// Initialize Firebase
const authJaa = myFirebase.auth()
authJaa.onAuthStateChanged(function(user) {
    if (user) {
      //alert("Signed in user!");
      console.log(user);
      const name = user.displayName;
      const email = user.email;
      const uid = user.uid;
      if ( document.getElementById("userName")) {
      document.getElementById("userName").innerText = name;
      document.getElementById("userEmail").innerText = email;
      }
      sessionStorage.setItem('userId', uid);
      //sessionStorage.setItem('userName', name)
    } else {
      //alert("No user!");
      console.log(user)
      sessionStorage.setItem('userId', null);
      //sessionStorage.setItem('userName', null)
    }
});
