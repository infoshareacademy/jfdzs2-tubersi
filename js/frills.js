// ##### Piotrek - cookies #####

function closeCookies() {
    var cookiesDisplay = document.querySelector('.cookies');
    cookiesDisplay.style.display= 'none';
    document.cookie = "tubers";
}

function removeCookiePopup() {
    if(document.cookie === "tubers"){
        var cookiesDisplay = document.querySelector('.cookies');
        cookiesDisplay.style.display= 'none';
    }
}

removeCookiePopup();