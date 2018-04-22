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

$('#idStart').click(function() {
    $('html,body').animate({scrollTop: $($start).offset().top}, 1000);
    return false;
});

$('#idFunctions').click(function () {
    $('html,body').animate({scrollTop: $($functions).offset().top}, 1000);
    return false;
});

$('#idRegistration').click(function () {
    $('html,body').animate({scrollTop: $($registration).offset().top}, 1000);
    return false;
});

$('#idAboutus').click(function () {
    $('html,body').animate({scrollTop: $($aboutus).offset().top}, 1000);
    return false;
});

$('#idAboutapp').click(function () {
    $('html,body').animate({scrollTop: $($aboutapp).offset().top}, 1000);
    return false;
});

$('#logo').click(function () {
    $('html,body').animate({scrollTop: $($start).offset().top}, 1000);
    return false;
});

$('#tubersi').click(function () {
    $('html,body').animate({scrollTop: $($start).offset().top}, 1000);
    return false;
});


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
