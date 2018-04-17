// START GAME
//

//choic of level and start
var level1 = document.getElementById("level-1");
var level2 = document.getElementById("level-2");
var time = document.getElementById('time-to-end');
var timeToFinish = 60;
var score;
var positionFolder;
var screenWidth = window.innerWidth;


level1.addEventListener("click", init);
level2.addEventListener("click", init);

function timeStart(){
    if(timeToFinish>0) {
        time.innerHTML='<b>'+timeToFinish+'</b>'+' sekund';
        setTimeout(function(){timeStart(time,--timeToFinish)},1000)
    } else {
        time.innerHTML='Koniec czasu';
        stopGame();
        timeToFinish = 60;
    }
}

function stopGame() {
    document.querySelector('#select-level').style.visibility= 'visible';
    clearInterval(moveInterval);
    clearTimeout(tune2Timeout);
    clearTimeout(tune3Timeout);
}

function addPoint(){
    if (checkCollision() === true){
        var score = document.getElementById('score');
        var scoreNumber = parseInt(document.getElementById('score').innerText);
        var i = +1;
        score.innerHTML = scoreNumber+i;
    }
}


//checkCollision for three other resolutions
function checkCollision(){
    var positionFolder = parseInt(document.getElementById('music-folder').style.left);
    var positionTune1 = parseInt(document.getElementById('tune-1').style.top);
    var positionTune2 = parseInt(document.getElementById('tune-2').style.top);
    var positionTune3 = parseInt(document.getElementById('tune-3').style.top);
    var screenWidthMobile = screenWidth<768;
    var screenWidthTablet = screenWidth>768 && screenWidth<1170;
    var screenWidthDesktop = screenWidth>1170;

    //when tune put in to folder for DESKTOP
    if (positionFolder===121 && positionTune1===360 && screenWidthDesktop){
        posYtune1 = 90;
        $('#thumb-up-1').fadeIn('fast').fadeOut('slow');
        return true;
    } else if (positionFolder===426 && positionTune2===360 && screenWidthDesktop){
        posYtune2 = 90;
        $('#thumb-up-2').fadeIn('fast').fadeOut('slow');
        return true;
    } else if (positionFolder===731 && positionTune3===360 && screenWidthDesktop){
        posYtune3 = 90;
        $('#thumb-up-3').fadeIn('fast').fadeOut('slow');
        return true;
    }
    //when tune put in to folder for TABLET
    if (positionFolder===55 && positionTune1===360 && screenWidthTablet){
        posYtune1 = 90;
        $('#thumb-up-1').fadeIn('fast').fadeOut('slow');
        return true;
    } else if (positionFolder===260 && positionTune2===360 && screenWidthTablet) {
        posYtune2 = 90;
        $('#thumb-up-2').fadeIn('fast').fadeOut('slow');
        return true;
    } else if (positionFolder===465 && positionTune3===360 && screenWidthTablet){
        posYtune3 = 90;
        $('#thumb-up-3').fadeIn('fast').fadeOut('slow');
        return true;
    }
    //when tune put in to folder for MOBILE
    if (positionFolder===20 && positionTune1===360 && screenWidthMobile){
        posYtune1 = 90;
        $('#thumb-up-1').fadeIn('fast').fadeOut('slow');
        return true;
    } else if (positionFolder===96 && positionTune2===360 && screenWidthMobile){
        posYtune2 = 90;
        $('#thumb-up-2').fadeIn('fast').fadeOut('slow');
        return true;
    } else if (positionFolder===172 && positionTune3===360 && screenWidthMobile) {
        posYtune3 = 90;
        $('#thumb-up-3').fadeIn('fast').fadeOut('slow');
        return true;
    }

    //when tune crash with floor DESKTOP
    if (positionTune1===390 && screenWidth>1170){
        posYtune1 = 90;
        $('#thumb-down-1').fadeIn('fast').fadeOut('slow');  // trzebe zamienić na JS
        return false;
    } else if (positionTune2 ===390 && screenWidth>1170){
        posYtune2 = 90;
        $('#thumb-down-2').fadeIn('fast').fadeOut('slow');
        return false;
    } else if (positionTune3 === 390 && screenWidth>1170){
        posYtune3 = 90;
        $('#thumb-down-3').fadeIn('fast').fadeOut('slow');
        return false;
    }
    //when tune crash with floor TABLET
    if (positionTune1===390 && screenWidthTablet){
        posYtune1 = 90;
        $('#thumb-down-1').fadeIn('fast').fadeOut('slow');  // trzebe zamienić na JS
        return false;
    } else if (positionTune2 ===390 && screenWidthTablet){
        posYtune2 = 90;
        $('#thumb-down-2').fadeIn('fast').fadeOut('slow');
        return false;
    } else if (positionTune3 === 390 && screenWidthTablet){
        posYtune3 = 90;
        $('#thumb-down-3').fadeIn('fast').fadeOut('slow');
        return false;
    }
    //when tune crash with floor MOBILE
    if (positionTune1===390 && screenWidthMobile){
        posYtune1 = 90;
        $('#thumb-down-1').fadeIn('fast').fadeOut('slow');  // trzebe zamienić na JS
        return false;
    } else if (positionTune2 ===390 && screenWidthMobile){
        posYtune2 = 90;
        $('#thumb-down-2').fadeIn('fast').fadeOut('slow');
        return false;
    } else if (positionTune3 === 390 && screenWidthMobile){
        posYtune3 = 90;
        $('#thumb-down-3').fadeIn('fast').fadeOut('slow');
        return false;
    }


}

// function sets the star position of the folder for different resolutions
function startPositionFolder (){
    if (screenWidth<768) {
        document.getElementById('music-folder').style.left ='96'+'px';
    } else if (screenWidth>768 && screenWidth<1170) {
        document.getElementById('music-folder').style.left ='260'+'px';
    } else if (screenWidth>1170){
        document.getElementById('music-folder').style.left ='426'+'px';
    }
}

function init() {
    document.querySelector('#select-level').style.visibility='hidden';
    startPositionFolder();
    timeStart();

    positionFolder = parseInt(document.getElementById('music-folder').style.left);
    moveInterval = setInterval(moveTunes,60);
    tune2Timeout = setTimeout(activeTune2,500);
    tune3Timeout = setTimeout(activeTune3,800);

}


var activeTunes1 = true;
var activeTunes2 = false;
var activeTunes3 = false;
var posYtune1 = 90,
    posYtune2 = 90,
    posYtune3 = 90;

function activeTune2(){
    activeTunes2 = true;
}

function activeTune3(){
    activeTunes3 = true;
}

function moveTunes() {
    addPoint();
    var tune1 = document.getElementById("tune-1");
    var tune2 = document.getElementById("tune-2");
    var tune3 = document.getElementById("tune-3");

    if(activeTunes1 === true){
        posYtune1+=10;
        tune1.style.top = posYtune1+'px' ;
        if(posYtune1 > 390){
            posYtune1 = 90;
        }
    }
    if(activeTunes2 === true){
        posYtune2+=5;
        tune2.style.top = posYtune2+'px' ;
        if(posYtune2 > 390){
            posYtune2 = 90;
        }
    }
    if(activeTunes3 === true){
        posYtune3+=15;
        tune3.style.top = posYtune3+'px' ;
        if(posYtune3 > 390){
            posYtune3 = 90;
        }
    }
}

//move folder desktops
const folderMove = (e) =>
{
    switch (e.keyCode)
    {
        case 37:
            if (positionFolder>20 && screenWidth<768){
                document.getElementById('music-folder').style.left = (positionFolder - 76).toString() + 'px';
                positionFolder-=76;
            } else if (positionFolder>130 && screenWidth>768 && screenWidth<1170) {
                document.getElementById('music-folder').style.left = (positionFolder - 205).toString() + 'px';
                positionFolder-=205;
            } else if (positionFolder>130 && screenWidth>1170){
                document.getElementById('music-folder').style.left = (positionFolder - 305).toString() + 'px';
                positionFolder-=305;
            }
            break;
        case 39:
            if (positionFolder<172 && screenWidth<768){
                document.getElementById('music-folder').style.left = (positionFolder + 76).toString() + 'px';
                positionFolder+=76;
            } else if (positionFolder<460 && screenWidth>768 && screenWidth<1170){
                document.getElementById('music-folder').style.left = (positionFolder + 205).toString() + 'px';
                positionFolder+=205;
            } else if (positionFolder<730 && screenWidth>1170){
                document.getElementById('music-folder').style.left = (positionFolder + 305).toString() + 'px';
                positionFolder+=305;
            }
            break;
    }
}
document.addEventListener('keydown',folderMove);


// //touchmove for mobile.
//
// var musicFolder = document.getElementById('music-folder');
// musicFolder.addEventListener('touchmove', function(e){
//    var
//     e.preventDefault();
// });
//
//
// //Set .touchmove() listener for basket for mobile devices
// $('.basket').bind('touchmove', function (e) {
//     e.preventDefault();
//     var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
//     var newX = Math.floor(env.calcPct(touch.pageX) - basket.width / 2 - env.calcPct($('.game-board').offset().left));
//     if ((newX + basket.width < env.maxPosX) && (newX > env.minPosX)) {
//         basket.positionX = newX;
//     } else if (newX + basket.width >= env.maxPosX) {
//         basket.positionX = env.maxPosX - basket.width;
//     } else {
//         basket.positionX = env.minPosX;
//     }
//     basket.moveBasket(basket.positionX);
// });
//
//
