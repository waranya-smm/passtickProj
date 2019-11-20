// Initialize Firebase
const authJaa = myFirebase.auth()

authJaa.onAuthStateChanged(function(user) {
    if (user) {
      //alert("Signed in user!");
      name = user.displayName;
      email = user.email;
      uid = user.uid;
      console.log(name);
      document.getElementById("userName").innerText = name;
      document.getElementById("userEmail").innerText = email;
      console.log(user);
      sessionStorage.setItem('userId', uid);
      //sessionStorage.setItem('userName', name)
    } else {
      //alert("No user!");
      sessionStorage.setItem('userId', null);
      //sessionStorage.setItem('userName', null)
    }
});
