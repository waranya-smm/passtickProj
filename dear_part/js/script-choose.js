var slideIndex = 1;
showSlides(slideIndex);



function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
var   firebaseConfig = {
    apiKey: "AIzaSyDilDOj4krjyoLendzdQR3wPflZ_Pw2iqo",
    authDomain: "passtick-2091d.firebaseapp.com",
    databaseURL: "https://passtick-2091d.firebaseio.com",
    projectId: "passtick-2091d",
    storageBucket: "passtick-2091d.appspot.com",
    messagingSenderId: "72068778853",
    appId: "1:72068778853:web:ccb24aad52696ab6bc2f8c",
    measurementId: "G-JKG1E5W8T6"
};

const myFirebase = firebase.initializeApp(firebaseConfig);
let firestore = myFirebase.firestore();

var shop_select = document.getElementById('shop_select');
var arrayoption = '';

firestore.collection("SHOP").get()
.then((values) => {
        values.forEach(element => {
        element.shopId = element.id;
        arrayoption += '<option value='+element.id+'>'+ element.data().NAME +'</option>';
    });
    shop_select.innerHTML = arrayoption;
})

var shopclick = shop_select.value;
    console.log('choose shop: ' + shopclick)
var money ;
var piece ;
var shopname ;


firestore.collection("SHOP").get()
.then((values) => {
    values.forEach(element => {
        if(shop_select.value == element.data().VALUE){
            shopname = element.data().NAME;
            piece = element.data().piece;
            money = element.data().money;
        }
    });
    console.log();
})
    var nextbutt = document.getElementById('button-next');
        nextbutt.addEventListener('click',function () {
        var dots = document.getElementsByClassName("dot");
        var onz;
            
            if(dots[0].className == 'dot active'){
                onz =  2;

            }else if(dots[1].className == 'dot active'){
                onz = 4 ;
            }

        // Add a new document in collection "cities"
        console.log(onz)
        console.log(money)
        firestore.collection("SHOP").doc(shop_select.value).update({ 
            VALUE: shop_select.value,
            piece: piece +1,
            money: money + onz
            
        }).then(() => {
            window.location.href='../thankYou.html'
        });
});
    