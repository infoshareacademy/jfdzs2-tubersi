// ##### Piotrek - cookies #####

function closeCookies() {
    var $cookiesDisplay = $('.cookies');
    $cookiesDisplay.fadeOut();
    document.cookie = "tubers";
}

function removeCookiePopup() {
    if(document.cookie === "tubers"){
        var $cookiesDisplay = $('.cookies');
        $cookiesDisplay.fadeOut();
    }
}

removeCookiePopup();



