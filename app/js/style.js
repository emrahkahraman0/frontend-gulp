//Owl
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

var str = "Visit W3Schools!"; 
var n = str.search(/w3Schools/i);
document.getElementById("demo").innerHTML = n;

var str = "Visit W3Schools!"; 
var n = str.search(/w3Schools/i);
document.getElementById("demo").innerHTML = n;