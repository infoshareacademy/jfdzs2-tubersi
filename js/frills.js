var heightDiv;
var widthDiv;

$(function ()
{
 $('#flipper-3').mouseenter(function ()
 {
     $(this).css('transform','rotateY(0deg)');
     $(this).css('transition','0.6s');
     heightDiv = document.getElementById('team-foto-3').offsetHeight;
     widthDiv =document.getElementById('team-foto-3').offsetWidth;
     $('.btn-group').css('line-height', heightDiv + 'px');
     $('.back-3').css('height', heightDiv + 'px');
     $('.back-3').css('width', widthDiv + 'px');
     $('.back-3').css('border-radius', heightDiv/2 + 'px');
     $('.front-3').css('display', 'none')
     $('.back-3').css('display', 'block');
 });
    $('#flipper-3').mouseleave(function ()
    {
        $(this).css('transform','rotateY(180deg)');
        $(this).css('transition','0.6s');
        $(this).css('transition','0.6s');
        $('.back-3').css('display', 'none');
        $('.front-3').css('display', 'block');
    })

});