$(function(){

// counter js
$('.counter').counterUp({
    delay: 5,
    time: 1500
});    
    
// navbar bg
$(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    if(scrolling > 200){
        $('.navbar').addClass('navbg');
    }
    else {
       $('.navbar').removeClass('navbg'); 
    }
});  


//animation scroll js
var html_body = $('html, body');
$('nav a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 90
            }, 1500);
            return false;
        }
    }
});


});