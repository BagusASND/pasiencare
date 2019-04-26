$(document).ready(function () {
    $('.slider-testimony-home').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        centerMode: false,
        leftMode: true,
        focusOnSelect: false
    });
});


var scrollPixel = 0;
$(window).scroll(function() {
    if($(this).scrollTop() > scrollPixel) {
        if ($(this).scrollTop() > 150){
            $('header').addClass("after-scroll");
            $('header .app-logo').removeClass("text-primary");
            $('header a:first-child .btn').removeClass("text-primary");
            $('header a:first-child .btn').addClass("text-white");
        }
    } else {
        if ($(this).scrollTop() < 150){
            $('header').removeClass("after-scroll");
            $('header .app-logo').addClass("text-primary");
            $('header a:first-child .btn').addClass("text-primary");
            $('header a:first-child .btn').removeClass("text-white");
        }
    }
    scrollPixel = $(this).scrollTop();
});