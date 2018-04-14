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



// ##### Piotrek - cookies #####


$('.cookies').click(function () {
    $('.cookies').fadeOut();
    document.cookie = "tubers";
});

function checkAndDeletPopUp() {
    if(document.cookie === "tubers"){
        $('.cookies').remove();
    }
}

checkAndDeletPopUp();
