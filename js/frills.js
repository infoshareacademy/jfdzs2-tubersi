var heightDiv;
var widthDiv;

$(function ()
{
    $('#front-1').mouseenter(function ()
    {
        heightDiv = document.getElementById('front-1').offsetHeight;
        widthDiv = document.getElementById('picture-team-1').offsetWidth;
        $('#back-1').css('height', heightDiv + 'px');
        $('.social-media').css('width' , widthDiv + 'px');
        heightDiv = document.getElementById('picture-team-2').offsetHeight;
        $('.social-media').css('width' , widthDiv + 'px');
        $('.social-media').css('border-radius', heightDiv / 2 + 'px');
        $('.social-media').css('height', heightDiv + 'px');
    });

    $('#front-2').mouseenter(function ()
    {
        heightDiv = document.getElementById('front-2').offsetHeight;
        widthDiv = document.getElementById('picture-team-2').offsetWidth;
        $('#back-3').css('height', heightDiv + 'px');
        $('.social-media').css('width' , widthDiv + 'px');
        heightDiv = document.getElementById('picture-team-2').offsetHeight;
        $('.social-media').css('width' , widthDiv + 'px');
        $('.social-media').css('border-radius', heightDiv / 2 + 'px');
        $('.social-media').css('height', heightDiv + 'px');
    });

    $('#front-3').mouseenter(function ()
    {
        heightDiv = document.getElementById('front-3').offsetHeight;
        widthDiv = document.getElementById('picture-team-3').offsetWidth;
        $('#back-3').css('height', heightDiv + 'px');
        $('.social-media').css('width' , widthDiv + 'px');
        heightDiv = document.getElementById('picture-team-3').offsetHeight;
        $('.social-media').css('width' , widthDiv + 'px');
        $('.social-media').css('border-radius', heightDiv / 2 + 'px');
        $('.social-media').css('height', heightDiv + 'px');
    });
});

resizeMediaIcon = function()
{

    if(innerWidth < 350)
    {
        $(function ()
        {
            $('.btn').css('width' , innerWidth / 8 + 'px').css('font-size' , innerWidth / 60 + 'px');
            $('.fa-linkedin').css('font-size' , innerWidth / 40 + 'px').css('padding' , innerWidth / 60 + 'px');
            $('.fa-github').css('font-size' , innerWidth / 40 + 'px').css('padding' , innerWidth / 60 + 'px');
            $('.social-media-text').css('font-size' , innerWidth / 40 + 'px').css('padding-top', innerWidth / 25 + 'px');
        })
    }

     else if(innerWidth < 500)
     {
        $(function ()
        {
            $('.btn').css('width' , innerWidth / 6 + 'px').css('font-size' , innerWidth / 50 + 'px');
            $('.fa-linkedin').css('font-size' , innerWidth / 30 + 'px').css('padding' , innerWidth / 50 + 'px');
            $('.fa-github').css('font-size' , innerWidth / 30 + 'px').css('padding' , innerWidth / 50 + 'px');
            $('.social-media-text').css('font-size' , innerWidth / 40 + 'px').css('padding-top', innerWidth / 15 + 'px');
        })
    }

    else if(innerWidth < 767)
    {
       $(function ()
       {
            $('.btn').css('width' , innerWidth / 4 + 'px').css('font-size' , innerWidth / 40 + 'px');
            $('.fa-linkedin').css('font-size' , innerWidth / 20 + 'px').css('padding' , innerWidth / 40 + 'px');
            $('.fa-github').css('font-size' , innerWidth / 20 + 'px').css('padding' , innerWidth / 40 + 'px');
            $('.social-media-text').css('font-size' , innerWidth / 40 + 'px').css('padding-top', innerWidth / 12 + 'px');
       })
    }

    else if((innerWidth >= 768) && (innerWidth <= 991))
    {
        $(function ()
        {
            $('.btn').css('width' , '50px').css('font-size' , '8px');
            $('.fa-linkedin').css('font-size' , '10px').css('padding', '2px');
            $('.fa-github').css('font-size' , '10px').css('padding', '2px');
            $('.social-media-text').css('font-size' , '10px').css('padding-top', '10px')
        })
    }

    else if ((innerWidth >= 992) && (innerWidth <= 1199))
    {
        $(function ()
        {
            $('.btn').css('width' , '70px').css('font-size' , '10px');
            $('.fa-linkedin').css('font-size' , '15px').css('padding', '3px');
            $('.fa-github').css('font-size' , '15px').css('padding', '3px');
            $('.social-media-text').css('font-size' , '15px').css('padding-top', '18px')
        })
    }

    else
    {
        $('.btn').css('width' , '100px').css('font-size' , '12px');
        $('.fa-linkedin').css('font-size' , '20px').css('padding', '6px');
        $('.fa-github').css('font-size' , '20px').css('padding', '6px');
        $('.social-media-text').css('font-size' , '20px').css('padding-top', '23px')
    }
};

resizeMediaIcon();
window.addEventListener('resize', resizeMediaIcon);