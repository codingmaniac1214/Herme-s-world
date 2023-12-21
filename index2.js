let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
var currentIndex=1;
displaySlides(currentIndex);

function setSlides(num){
    displaySlides(currentIndex +=num);

}
function displaySlides(num){
    var x;
    var slides=document.getElementsByClassName("img1");
    if(num>slides.length){
        currentIndex=1;

    }
    if(num<1){
        currentIndex=slides.length;
    }
    for(x=0;x<slides.length;x++){
        slides[x].style.display="none"
    }
    slides[currentIndex-1].style.display="block";
}
var i = 0;
var txt = 'Lorem ipsum typing effect!'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}