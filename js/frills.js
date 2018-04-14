// ##### PIOTREK - scrollTOP ######

$(document).scroll(function() {
    var $toTop = $(window).scrollTop();
    if ($toTop> 100) {
        $('button.btn-scroll').show('slow') ;
        $('#scroll-up').css("display", "block");
    } else {
        $('button.btn-scroll').hide('slow') ;
    }
});

$('#scroll-up').click(function () {
    $('html,body').animate({scrollTop: 0}, 1000);
    return false;
});

function scroll_to(selector) {
    $('html,body').animate({scrollTop: $(selector).offset().top}, 1000);
    return false;
}



