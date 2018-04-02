//language change pl-en /en - pl by google plugin

function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {pageLanguage: 'pl'},
        'google_translate_element'
    );
}

$('#eng-lang').click(function () {
    window.location='#googtrans(en)';
    window.location.reload();
    return event.returnValue=true;
});

$('#pol-lang').click(function () {
    window.location='#googtrans(pl)';
    window.location.reload();
    return event.returnValue=true;
});

