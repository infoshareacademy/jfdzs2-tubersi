// START GAME
//

//choic of level and start
var level1 = document.getElementById("level-1"),
    level2 = document.getElementById("level-2"),
    time = document.getElementById('time-to-end'),
    instuction = document.getElementById('game-instuction'),
    timeToFinish = 10,
    score,
    positionFolder,
    screenWidth = window.innerWidth;


level1.addEventListener("click", init);
level2.addEventListener("click", init);

function timeStart(){
    if(timeToFinish>0) {
        time.innerHTML='<b>'+timeToFinish+'</b>'+' sekund';
        setTimeout(function(){timeStart(time,--timeToFinish)},1000)
    } else {
        time.innerHTML='Koniec czasu';
        stopGame();
        timeToFinish = 10;
        posYtune1 = 90;
        posYtune2 = 90;
        posYtune3 = 90;
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
        instuction.remove();
    }
}



function youtubeFolderAnimation(){
    $('#music-folder').css('transform', 'rotate(180deg)');

    setTimeout(function () {
        $('#music-folder').css('transform', 'rotate(0deg)');
    },100);
}


//checkCollision for three other resolutions
function checkCollision(){
    var positionFolder = parseInt(document.getElementById('music-folder').style.left);
    var positionTune1 = parseInt(document.getElementById('tune-1').style.top);
    var positionTune2 = parseInt(document.getElementById('tune-2').style.top);
    var positionTune3 = parseInt(document.getElementById('tune-3').style.top);
    var screenWidthDesktop = screenWidth>1170;

    //when tune put in to folder for DESKTOP
    if (positionFolder===101 && positionTune1>335 && positionTune1<389 && screenWidthDesktop){
        posYtune1 = 90;
        youtubeFolderAnimation();
        $('#thumb-up-1').fadeIn('fast').fadeOut('slow');
        return true;
    } else if (positionFolder===406 && positionTune2>335 && positionTune2<389 && screenWidthDesktop){
        posYtune2 = 90;
        $('#thumb-up-2').fadeIn('fast').fadeOut('slow');
        youtubeFolderAnimation();
        return true;
    } else if (positionFolder===711 && positionTune3>335 && positionTune3<389 && screenWidthDesktop){
        posYtune3 = 90;
        $('#thumb-up-3').fadeIn('fast').fadeOut('slow');
        youtubeFolderAnimation();
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
}


function init() {
    document.querySelector('#select-level').style.visibility='hidden';
    document.getElementById('music-folder').style.left ='406'+'px';
    positionFolder = parseInt(document.getElementById('music-folder').style.left);
    timeStart();
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
            if (positionFolder>130 && screenWidth>1170){
                document.getElementById('music-folder').style.left = (positionFolder - 305).toString() + 'px';
                document.getElementById('music-folder').style.transition= '0.25s linear';
                positionFolder-=305;
            }
            break;
        case 39:
            if (positionFolder<630 && screenWidth>1170){
                document.getElementById('music-folder').style.left = (positionFolder + 305).toString() + 'px';
                document.getElementById('music-folder').style.transition= '0.25s linear';
                positionFolder+=305;
            }
            break;
    }
}
document.addEventListener('keydown',folderMove);

