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

// #### DOROTA - scroll-menu #####

var ele = document.getElementById("start");
var ele2 = document.getElementById("functions");
var ele3 = document.getElementById("registration");
var ele4 = document.getElementById("aboutus");
var ele5 = document.getElementById("aboutapp");

function scrollTo(selector) {
    $('html,body').animate({scrollTop: $(selector).offset().top}, 1000);
    return false;
}

$('#st').click(scrollTo(ele));

//
// $('#st').click(function() {
//     $('html,body').animate({scrollTop: $(ele).offset().top}, 1000);
//     return false;
// });
//
// $('#fu').click(function () {
//     $('html,body').animate({scrollTop: $(ele2).offset().top}, 1000);
//     return false;
// });
//
// $('#reg').click(function () {
//     $('html,body').animate({scrollTop: $(ele3).offset().top}, 1000);
//     return false;
// });
//
// $('#au').click(function () {
//     $('html,body').animate({scrollTop: $(ele4).offset().top}, 1000);
//     return false;
// });
//
// $('#aa').click(function () {
//     $('html,body').animate({scrollTop: $(ele5).offset().top}, 1000);
//     return false;
// });
//
// $('#lo').click(function () {
//     $('html,body').animate({scrollTop: $(ele).offset().top}, 1000);
//     return false;
// });
//
// $('#tu').click(function () {
//     $('html,body').animate({scrollTop: $(ele).offset().top}, 1000);
//     return false;
// });
//
//
//
