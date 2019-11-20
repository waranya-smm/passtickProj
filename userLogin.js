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
  handleSignout();
};

function handleSignout(e) {
    console.log('click');
    
  newfirebase
    .auth()
    .signOut()
    .then(function() {
        console.log("Sign Out Success!");
    })
    .catch(function(error) {
      // An error happened.
    });
}
