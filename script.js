// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= 500) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function showValue1(newValue) { 
    document.getElementById("SlideValue").innerHTML= newValue;
}
function changeRangeValue(val){
    document.getElementById("slider").value = isNaN(parseInt(val, 50000)) ? 0 : parseInt(val, 50000);
    showValue1(val);
}

function changeInputValue(val){
    document.getElementById("number").value = isNaN(parseInt(val, 50000)) ? 0 : parseInt(val, 50000);
    showValue1(val);
}

//function take showValue1 {
function methanCalc() {
    var y = document.getElementById("slider").value;
    var z = 1100;
    var myResult = y * z;
    document.getElementById("methaneNumb").innerHTML = myResult;
  }

//

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
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += "";
}
