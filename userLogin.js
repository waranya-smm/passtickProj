function initApp() {
  newfirebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      //alert("Signed in user!");
      name = user.displayName;
      email = user.email;
      uid = user.uid;
      document.getElementById("userEmail").innerText = email;
      console.log(name);
      console.log(email);
      console.log(uid);
    } else {
      alert("No user!");
    }
  });
}

window.onload = function() {
  initApp();
};

function handleSignUpShop(e) {
  newfirebase
    .auth()
    .signOut()
    .then(function() {
        alert("Sign Out Success!");
    })
    .catch(function(error) {
      // An error happened.
    });
}
