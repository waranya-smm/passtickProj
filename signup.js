// console.log(myFirebase.auth); // Undefined
// console.log(firebase.default.auth) // Function

function handleSignUp(e) {
  e.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var comfirmPW = document.getElementById("pwConfirm").value;
  var detect = document.getElementById("detect");
  var userName = document.getElementById("userName").value;
  if (password !== comfirmPW) {
    detect.innerHTML = "wrong confirm password";
    return false;
  } else {
    detect.innerHTML = "";
  }
  console.log(email);
  console.log(password);
  myFirebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(async function(result) {
      console.log("OK");
      console.log(result);
      console.log(result.user.uid)
      var userNow = firebase.auth().currentUser;
      await userNow.updateProfile({
        displayName: userName
      })
      await db.collection('users').doc(result.user.uid).set({
        userName,
        email,
        password
      }).then(() => {
        window.location = "index.html";
      })
    })
    // .then(function(sendEmailVerify) {
    //   if (sendEmailVerify === false) {
    //     return false;
    //   } else {
    //     myFirebase.auth().currentUser.sendEmailVerification();
    //     alert("Email Verification Sent! Please check your email address. ");
    //     alert("Register Success!");
    //     window.location = "index.html";
    //     return true;
    //   }
    // })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      if (errorCode == "auth/weak-password") {
        alert("Password is weak");
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
}

function handleSignUpShop(e) {
  e.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var adminName = document.getElementById("adminName").value;
  var shopName = document.getElementById("shopName").value;
  var fbUrl = document.getElementById("fbUrl").value;
  var locationURL = document.getElementById("locationURL").value;

  console.log(email);
  console.log(password);
  myFirebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function(result) {
      console.log("OK");
      console.log(result);
    })
    .then(function(sendEmailVerify) {
      if (sendEmailVerify === false) {
        return false;
      } else {
        myFirebase.auth().sendEmailVerification();
        alert("Email Verification Sent! Please check your email address. ");
        alert("Register Success!");
        window.location = "index.html";
        return true;
      }
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      if (errorCode == "auth/weak-password") {
        alert("Password is weak");
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
}

function handleLoginUser(e) {
  e.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  console.log(email);
  console.log(password);

  myFirebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function(result) {
      console.log("OK");
      console.log("email");
      console.log(result);
      window.location = "Explore.html";
    })

    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      if (errorCode == "auth/weak-password") {
        alert("Password is weak");
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
}

