$(document).ready(function () {
    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        fade: true,
    });
    var prev = 0;
    var $window = $(window);
    var nav = $('.navbar');

    $window.on('scroll', function(){
        var scrollTop = $window.scrollTop();
        nav.toggleClass('hidden', scrollTop < prev);
        prev = scrollTop;
    });
    var scrol = 0;
     $(window).on('scroll', function(){
        var scrolltop=$(window).scrollTop();
         $('.nav').toggleClass('hidden', scrolltop > scrol);
         scrol = scrolltop;
         console.log('scroll');
     })

});
