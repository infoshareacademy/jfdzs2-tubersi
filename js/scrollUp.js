window.onscroll = function() {scrollButtonCheck()};

function scrollButtonCheck() {
    if (document.documentElement.scrollTop > 100) {
        $('button.btn-scroll').show('slow') ;
        document.getElementById("scroll-up").style.display = "block";
    } else {
        $('button.btn-scroll').hide('slow') ;
    }
}

function goTop(start) {
    $('html,body').animate({scrollTop: $(start).offset().top}, 1000);
    return false;
}
