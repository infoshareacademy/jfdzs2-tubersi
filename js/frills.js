 $(setPictureTeam = function setPicture ()
{
    var heightDiv;
    var widthDiv;

    for(var i = 1; i <= 3; i++ )
    {
        heightDiv = document.getElementById('front-' + i).offsetHeight;
        widthDiv = document.getElementById('picture-team-' + i).offsetWidth;
        $('#back-' + i).css('height', heightDiv + 'px');
        $('.social-media').css('width' , widthDiv + 'px');
        heightDiv = document.getElementById('picture-team-' + i).offsetHeight;
        $('.social-media').css('width' , widthDiv + 'px');
        $('.social-media').css('border-radius', heightDiv / 2 + 'px');
        $('.social-media').css('height', heightDiv + 'px');
    }
});

resizeMediaIcon = function()
{
    if(innerWidth < 350)
    {
        $(function ()
        {
            $('.btn-social').css('width' , innerWidth / 8 + 'px').css('font-size' , innerWidth / 60 + 'px');
            $('.fa-linkedin').css('font-size' , innerWidth / 40 + 'px').css('padding' , innerWidth / 60 + 'px');
            $('.fa-github').css('font-size' , innerWidth / 40 + 'px').css('padding' , innerWidth / 60 + 'px');
            $('.social-media-text').css('font-size' , innerWidth / 40 + 'px').css('padding-top', innerWidth / 25 + 'px');
        })
     }

    else if(innerWidth < 450)
    {
        $(function ()
        {
            $('.btn-social').css('width' , innerWidth / 7 + 'px').css('font-size' , innerWidth / 55 + 'px');
            $('.fa-linkedin').css('font-size' , innerWidth / 35 + 'px').css('padding' , innerWidth / 55 + 'px');
            $('.fa-github').css('font-size' , innerWidth / 35 + 'px').css('padding' , innerWidth / 55 + 'px');
            $('.social-media-text').css('font-size' , innerWidth / 40 + 'px').css('padding-top', innerWidth / 20 + 'px');
        })
    }

     else if(innerWidth < 550)
     {
        $(function ()
        {
            $('.btn-social').css('width' , innerWidth / 6 + 'px').css('font-size' , innerWidth / 50 + 'px');
            $('.fa-linkedin').css('font-size' , innerWidth / 30 + 'px').css('padding' , innerWidth / 50 + 'px');
            $('.fa-github').css('font-size' , innerWidth / 30 + 'px').css('padding' , innerWidth / 50 + 'px');
            $('.social-media-text').css('font-size' , innerWidth / 40 + 'px').css('padding-top', innerWidth / 15 + 'px');
        })
    }

    else if(innerWidth < 650)
    {
        $(function ()
        {
            $('.btn-social').css('width' , innerWidth / 5 + 'px').css('font-size' , innerWidth / 45 + 'px');
            $('.fa-linkedin').css('font-size' , innerWidth / 25 + 'px').css('padding' , innerWidth / 45 + 'px');
            $('.fa-github').css('font-size' , innerWidth / 25 + 'px').css('padding' , innerWidth / 45 + 'px');
            $('.social-media-text').css('font-size' , innerWidth / 40 + 'px').css('padding-top', innerWidth / 12 + 'px');
        })
    }

    else if(innerWidth < 767)
    {
       $(function ()
       {
            $('.btn-social').css('width' , innerWidth / 4 + 'px').css('font-size' , innerWidth / 40 + 'px');
            $('.fa-linkedin').css('font-size' , innerWidth / 20 + 'px').css('padding' , innerWidth / 40 + 'px');
            $('.fa-github').css('font-size' , innerWidth / 20 + 'px').css('padding' , innerWidth / 40 + 'px');
            $('.social-media-text').css('font-size' , innerWidth / 40 + 'px').css('padding-top', innerWidth / 12 + 'px');
       })
    }

    else if((innerWidth >= 768) && (innerWidth <= 991))
    {
        $(function ()
        {
            $('.btn-social').css('width' , '50px').css('font-size' , '8px');
            $('.fa-linkedin').css('font-size' , '10px').css('padding', '2px');
            $('.fa-github').css('font-size' , '10px').css('padding', '2px');
            $('.social-media-text').css('font-size' , '10px').css('padding-top', '10px')
        })
    }

    else if ((innerWidth >= 992) && (innerWidth <= 1199))
    {
        $(function ()
        {
            $('.btn-social').css('width' , '70px').css('font-size' , '10px');
            $('.fa-linkedin').css('font-size' , '15px').css('padding', '3px');
            $('.fa-github').css('font-size' , '15px').css('padding', '3px');
            $('.social-media-text').css('font-size' , '15px').css('padding-top', '18px')
        })
    }

    else
    {
        $('.btn-social').css('width' , '100px').css('font-size' , '12px');
        $('.fa-linkedin').css('font-size' , '20px').css('padding', '6px');
        $('.fa-github').css('font-size' , '20px').css('padding', '6px');
        $('.social-media-text').css('font-size' , '20px').css('padding-top', '23px')
    }

    setPictureTeam();
};

resizeMediaIcon();
window.addEventListener('resize', resizeMediaIcon);