function initApp() {
  newfirebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      //alert("Signed in user!");
      name = user.displayName;
      email = user.email;
      uid = user.uid;
      document.getElementById("userName").innerText = name;
      document.getElementById("userEmail").innerText = email;
      console.log(user)
      sessionStorage.setItem('userId', uid)
      //sessionStorage.setItem('userName', name)
    } else {
      //alert("No user!");
      sessionStorage.setItem('userId', null)
      //sessionStorage.setItem('userName', null)
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
