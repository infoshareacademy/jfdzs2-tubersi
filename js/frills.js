// ##### DOROTA - Rotacja zawartości w zajawce ######

$( window ).load(function() {

    if($(window).width() >=1200)
        $('.wraper').addClass("container");
    else
        $('.wraper').removeClass("container");
});