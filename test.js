
function onPress(){
    alert("press already");
    

}
window.onload=function(){
    var firebaseRef = firebase.database().ref("passtick-2091d");
    firebaseRef.once('value').then(function(dataSnapshot){
        console.log(dataSnapshot.value());
    });
}