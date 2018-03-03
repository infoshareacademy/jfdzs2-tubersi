window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.documentElement.scrollTop > 100) {
        $('button.btn-scroll').slideDown('slow') ;
        document.getElementById("scroll-up").style.display = "block";
    } else {
        $('button.btn-scroll').hide('slow') ;
        // document.getElementById("scroll-up").style.display = "none";
    }
}

function topFunction(start) {
    $('html,body').animate({scrollTop: $(start).offset().top}, 1000);
    return false;
}
