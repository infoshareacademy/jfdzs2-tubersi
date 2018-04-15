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



// google translator lang en/pl pl/en

$('#eng-lang').click(function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {pageLanguage: 'pl'},
        'google_translate_element',
        window.location='#googtrans(en)',
    )}
);

$('#pol-lang').click(function () {
    window.location='#googtrans(pl)';
    window.location.reload();
    return event.returnValue=true;
});

