// google translator lang en/pl pl/en

$('#eng-lang').click(function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {pageLanguage: 'pl'},
        'google_translate_element',
        window.location='#googtrans(en)',
        $('nav.navbar.navbar-default.navbar-fixed-top').css({"top":"40px"})
    )}
);

$('#pol-lang').click(function () {
    window.location='#googtrans(pl)';
    window.location.reload();
    return event.returnValue=true;
});

