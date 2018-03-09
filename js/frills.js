$(setIconMedia = function setPicture ()
{
    for(var i = 1; i <= 3; i++ )
    {
        setDivClassBtnSocialWidthAndFontSize(i);
        setDivClassBtnGroupPosition(i);
        setDivIdBack(i);
        setDivClassSocialMedia(i);
    }
});

window.addEventListener('resize', setIconMedia);

setDivClassBtnSocialWidthAndFontSize = function (number)
{
    $('.btn-social').css('width' , document.getElementById('picture-team-' + number).offsetWidth / 2 - document.getElementById('picture-team-' + number).offsetWidth / 10 + 'px').css('font-size', document.getElementById('picture-team-' + number).offsetHeight / 14);
};

setDivClassBtnGroupPosition = function (number)
{
    $('.btn-group').css('top', document.getElementById('picture-team-' + number).offsetHeight / 2 - document.getElementById('btn-' + number).offsetHeight / 1.5 + 'px');
};

setDivIdBack = function (number)
{
    $('#back-' + number).css('height', document.getElementById('front-' + number).offsetHeight + 'px');
};

setDivClassSocialMedia = function (number)
{
    $('.social-media').css('width' , document.getElementById('picture-team-' + number).offsetWidth + 'px');
    $('.social-media').css('width' , document.getElementById('picture-team-' + number).offsetWidth + 'px');
    $('.social-media').css('border-radius', document.getElementById('picture-team-' + number).offsetHeight / 2 + 'px');
    $('.social-media').css('height', document.getElementById('picture-team-' + number).offsetHeight + 'px');
};