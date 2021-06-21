var main = document.querySelector(".main");
var slider = document.querySelector(".slider");
var logo = document.querySelector("#logo");
// var menu = document.querySelector(".mobile-btn");
var headline = document.querySelector(".headline");
var menutxt = document.querySelector(".menutxt");

var tl = new TimelineMax();
tl.fromTo(main, 1, {height: "0%"}, {height:"80%", ease: Power2.easeInOut})
.fromTo(main, 1.2, {width:"100%"}, {width:"80%",  ease: Power2.easeInOut})
.fromTo(slider, 1.2, {x:"-100%"}, {x: "0%", ease: Power2.easeInOut}, "-=1.2")
.fromTo(logo, 0.5, {opacity:0, x: 30}, {opacity:1, x: 0}, "-=0.5")
// .fromTo(mobile-btn, 0.5, {opacity:0, x: 30}, {opacity:1, x: 0}, "-=0.5")
.fromTo(headline, 0.5, {opacity:0, x: 30}, {opacity:1, x: 0}, "-=0.5")
.fromTo(menutxt, 0.5, {opacity:0, x: 30}, {opacity:1, x: 0}, "-=0.5")

// $(document).ready(function(){
//     $(".mobile-btn").click(function(){
//         $(".menudrop").show('slow');
//     });
//     $("active").click(function(){
//         $(".menudrop").hide('slow');
//     });
// });
$(function(){
    $('.mobile-btn').click(function(){
        $(this).toggleClass('active');
        $(".menudrop").toggle();
    });
});

