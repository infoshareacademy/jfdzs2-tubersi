$(document).ready(function() {

    var scrollLink = $('.scroll');

$(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function() {

        var sectionOffset = $(this.hash).offset().top - 20;

        if ( sectionOffset <= scrollbarLocation ) {
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');
        }
    })

})})