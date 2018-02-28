window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.documentElement.scrollTop > 100) {
        document.getElementById("scroll-up").style.display = "block";
    } else {
        document.getElementById("scroll-up").style.display = "none";
    }
}

function topFunction(start) {
    $('html,body').animate({scrollTop: $(start).offset().top}, 1000);
    return false;
}
