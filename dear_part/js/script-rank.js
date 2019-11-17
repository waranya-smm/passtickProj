// -------------script Rank Page-----------------
var picProfile = document.getElementById("pic-profile");
var inFrame = document.getElementById("inFrame");


picProfile.style.height = "50px";
picProfile.style.width = "50px";

inFrame.appendChild(picProfile);

var numRank = document.getElementById("numRank");
var displayRank = document.getElementById("display-rank");
displayRank.className = "circle-Rank";
displayRank.style.backgroundColor = "#A9DFBF";
displayRank.style.width = "50px";
displayRank.style.height = "50px";
displayRank.style.textAlign = "center";
numRank.innerHTML = "1";


var point = document.getElementById("point");
point.innerText = "0";
