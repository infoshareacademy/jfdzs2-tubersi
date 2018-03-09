setStyleFlipRotation = function setPicture ()
{
    for(var i = 0; i <= 5; i++)
    {
        setDivClassBtnSocialWidthAndFontSize(i);
    }

    for(var i = 1; i <= 3; i++ )
    {
        setDivClassBtnGroupPosition(i);
        setDivIdBack(i);
        setDivClassSocialMedia(i);
    }
};

setDivClassBtnSocialWidthAndFontSize = function (number)
{
    document.getElementsByClassName('btn-social')[number].style.width =  document.getElementsByClassName('member-foto')[0].offsetWidth / 2 - document.getElementsByClassName('member-foto')[0].offsetWidth / 10 + 'px';
    document.getElementsByClassName('btn-social')[number].style.fontSize = document.getElementsByClassName('member-foto')[0].offsetHeight / 14 + 'px';
};

setDivClassBtnGroupPosition = function (number)
{
    document.getElementsByClassName('btn-group')[number - 1].style.top = document.getElementsByClassName('member-foto')[0].offsetHeight / 2 -  document.getElementsByClassName('btn-group')[0].offsetHeight / 1.5 + 'px';
};

setDivIdBack = function (number)
{
    document.getElementById('back-' + number).style.height = document.getElementById('front-' + number).offsetHeight + 'px';
};

setDivClassSocialMedia = function (number)
{
    document.getElementsByClassName('social-media')[number - 1].style.width = document.getElementsByClassName('member-foto')[0].offsetWidth + 'px';
    document.getElementsByClassName('social-media')[number - 1].style.borderRadius = document.getElementsByClassName('member-foto')[0].offsetHeight / 2 + 'px';
    document.getElementsByClassName('social-media')[number - 1].style.height = document.getElementsByClassName('member-foto')[0].offsetHeight + 'px';
};

setStyleFlipRotation();
window.addEventListener('resize', setStyleFlipRotation);

