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
