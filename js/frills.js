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

// #### DOROTA - scrollMenu #####

var $start = $("#start");
var $functions = $("#functions");
var $registration = $("#registration");
var $aboutus = $("#aboutus");
var $aboutapp = $("#aboutapp");

function scroll_to(selector) {
    $('html,body').animate({scrollTop: $(selector).offset().top}, 1000);
    return false;
}

$('#idStart').on('click', scroll_to);

//
// $('#idStart').click(function() {
//     scroll_to($start);
//     return false;
// });
//
// $('#idFunctions').click(function () {
//     scroll_to($functions);
//     return false;
// });
// $('#idRegistration').click(function () {
//     scroll_to($registration)
//     return false;
// });
// $('#idAboutus').click(function () {
//     scroll_to($aboutus)
//     return false;
// });
// $('#idAboutapp').click(function () {
//     scroll_to($aboutapp)
//     return false;
// });
// $('#logo').click(function () {
//     scroll_to($start);
//     return false;
// });
// $('#tubersi').click(function () {
//     scroll_to($start);
//     return false;
// });




// ##### Piotrek - cookies #####


$('#cookies-close').click(function () {
    $('.cookies').fadeOut();
    document.cookie = "tubers";
});

function checkAndDeletPopUp() {
    if(document.cookie === "tubers"){
        $('.cookies').remove();
    }
}

checkAndDeletPopUp();
