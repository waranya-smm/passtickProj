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

function handleLoginShop(e) {
  e.preventDefault();
  var email = document.getElementById("emailSh").value;
  var password = document.getElementById("passwordSh").value;
  
  console.log(email);
  console.log(password);

  myFirebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function(result) {
      console.log("OK");
      console.log("email");
      console.log(result);
      window.location = "shop_manage_interface.html";
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

function handleLoginAdmin(e) {
    e.preventDefault();
    var email = document.getElementById("emailAM").value;
    var password = document.getElementById("passwordAM").value;
    
    console.log(email);
    console.log(password);
    if (email !== 'admin@passtick.com') {
        document.getElementById('detect').innerText = "Please, enter admin accout!"
        return false;
    } else if (email === 'admin@passtick.com'){
        document.getElementById('detect').innerText = "";
    }
  
    myFirebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function(result) {
        console.log("OK");
        console.log("email");
        console.log(result);
        window.location = "project_Admin.html";
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
  
