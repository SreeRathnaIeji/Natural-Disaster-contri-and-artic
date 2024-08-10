$(document).ready(function(){
    $('.carousel').slick({
        infinite: true,       // Loop through the slides infinitely
        slidesToShow: 3,      // Number of slides to show at once
        slidesToScroll: 1,    // Number of slides to scroll at once
        autoplay: true,       // Autoplay the carousel
        autoplaySpeed: 2000,  // Autoplay speed in milliseconds
        arrows: true,         // Show navigation arrows
        dots: true,          // Show pagination dots
        nextArrow: $(".next"),
        prevArrow: $(".prev")
    });

    
});

function toggleVisibility(id) {
    var element = document.getElementById(id);
    if (element.style.display === "block") {
        element.style.display = "none";
    } else {
        element.style.display = "block";
    }
}