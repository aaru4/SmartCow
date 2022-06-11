// Making the Navbar Sticky
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

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

function methanCalc() {
    var y = document.getElementById("slider").value;
    var z = 1100;
    var myResult = y * z;
    document.getElementById("methaneNumb").innerHTML = myResult;
  }

// Javascript for the Slideshow

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
