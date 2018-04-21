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

// function scroll_to(selector) {
//     $('html,body').animate({scrollTop: $(selector).offset().top}, 1000);
//     return false;
// }

var ele = document.getElementById("start");
var ele2 = document.getElementById("functions");
var ele3 = document.getElementById("registration");
var ele4 = document.getElementById("aboutass");
var ele5 = document.getElementById("aboutapp");

$('a#st').click(function scroll_to(ele) {
    $('html,body').animate({scrollTop: $(ele).offset().top}, 1000);
    return false;
});

$('a#fu').click(function scroll_to(ele2) {
    $('html,body').animate({scrollTop: $(ele2).offset().top}, 1000);
    return false;
});



