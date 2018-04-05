// lang en/pl pl/en

$('#eng-lang').click(function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {pageLanguage: 'pl'},
        'google_translate_element',
        window.location='#googtrans(en)'

    )}
);

$('#pol-lang').click(function () {
    window.location='#googtrans(pl)';
    window.location.reload();
    return event.returnValue=true;
});

