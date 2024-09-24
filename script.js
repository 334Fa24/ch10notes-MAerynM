/*
    student name: Aeryn Mitchell
    File name: script.js
    Date: 9/23/24
    */

//Global variable
var video =document.getElementById ("example");
var videosource = document.getElementById("vid-src");
var descriptionsource = document.getElementById("despsrc");

)//Hamburger menu functions
function hamburger () {
    var menu = document.getElementById ("menu-link");
    var logo = docment.getElementById ("ffc-logo");
    if (menu.style.display --- "block" && logo.style.display --- "none") {
        menu.style.display = "none";
        logo.style.display = "block";
    } else {
        menu.style.display = "block";
        logo.style.display = "none";
    }
} 









//Function to display the plank example video
function plank() {
    videoSource.src = "media/plank.mp4";
    descriptionSource.src = "media/plank-description.vtt";
    video.style.display = "block";
    video.load();
}

//Function to display the mountain climbers example video
function mountain() {
    videoSource.src = "media/mc.mp4";
    descriptionSource.src = "media/mountain-descriptions.vtt";
    video.style.display ="block";
    video.load();
}

//Function to display a promo code
function discount() {
    var promo = document.getElementById("special");
    promo.firstChild.nodeValue = "promo code: D25start";
    promo.style.color = "#ff0000";
    promo.style.fontsize = "2em";
}