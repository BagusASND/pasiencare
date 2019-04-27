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

    $('.single-slider').slick({
        autoplay: true,
        dots: false,
        arrows: true,
        focusOnSelect: false
    });


    // SideBar

    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
    });
});


var scrollPixel = 0;
$(window).scroll(function() {
    if($(this).scrollTop() > scrollPixel) {
        if ($(this).scrollTop() > 150){
            $('header').addClass("after-scroll");
        }
    } else {
        if ($(this).scrollTop() < 150){
            $('header').removeClass("after-scroll");
        }
    }
    scrollPixel = $(this).scrollTop();
});