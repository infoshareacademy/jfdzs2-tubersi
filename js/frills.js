var btnSocial = document.getElementsByClassName('btn-social');
var memberFoto = document.getElementsByClassName('member-foto');
var btnGroup = document.getElementsByClassName('btn-group');
var socialMedia =  document.getElementsByClassName('social-media');

setStyleFlipRotation = function setPicture () {
    setDivClassBtnSocialWidthAndFontSize(0);

    for(var i = 1; i <= 3; i++ ) {
        setDivClassBtnGroupPosition(i);
        setDivIdBack(i);
        setDivClassSocialMedia(i);
    }
};

setDivClassBtnSocialWidthAndFontSize = function (number) {

    btnSocial[number].style.width =  memberFoto[0].offsetWidth / 3 + 'px';
    btnSocial[number].style.fontSize = memberFoto[0].offsetHeight / 15 + 'px';

    if(number === 5) {
        return;
    }
    else {
        setDivClassBtnSocialWidthAndFontSize(number + 1);
    }
};

setDivClassBtnGroupPosition = function (number) {
    btnGroup[number - 1].style.top = memberFoto[0].offsetHeight / 2 -  btnGroup[0].offsetHeight / 1.5 + 'px';
};

setDivIdBack = function (number) {
    document.getElementById('back-' + number).style.height = document.getElementById('front-' + number).offsetHeight + 'px';
};

setDivClassSocialMedia = function (number)
{
    socialMedia[number - 1].style.width = memberFoto[0].offsetWidth + 'px';
    socialMedia[number - 1].style.borderRadius = memberFoto[0].offsetHeight / 2 + 'px';
    socialMedia[number - 1].style.height = memberFoto[0].offsetHeight + 'px';
};

setStyleFlipRotation();
window.addEventListener('resize', setStyleFlipRotation);

