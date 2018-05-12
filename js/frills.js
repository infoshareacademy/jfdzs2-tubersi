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

$(document).ready(function(){
    $("nav a").on('click', function(event) {

        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({scrollTop: $(hash).offset().top}, 800, function(){
                window.location.hash = hash;
            });
        }
    });
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
// google translator lang en/pl pl/en

$('#eng-lang').click(function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {pageLanguage: 'pl'},
        'google_translate_element'
    )}
);

$('#pol-lang').click(function () {
    window.location.reload();
    return event.returnValue=true;
});

