var positionFolder;
var positionTune;
var screenWidth = window.innerWidth;


function init()
{
    document.getElementById('music-folder').style.left ='0';
    positionFolder = parseInt(document.getElementById('music-folder').style.left);

    //pozycja startowa nuta
    document.getElementById('tune-1').style.top = '90';
    positionTune = parseInt(document.getElementById('tune-1').style.top);
    setInterval(moveTunes,60);
    setTimeout(activeTune,500);
    setTimeout(activeTune1,800);
}
init();

var element1 = document.getElementById("tune-1");
var element2 = document.getElementById("tune-2");
var element3 = document.getElementById("tune-3");

var posY1 = 90, posY2 = 90, posY3 = 90;

var activeTunes1 = true;
var activeTunes2 = false;
var activeTunes3 = false;

function activeTune(){
    activeTunes2 = true;
}

function activeTune1(){
    activeTunes3 = true;
}

function moveTunes() {

    if(activeTunes1 === true){
        posY1+=10;
        element1.style.top = posY1+'px' ;
        if(posY1 > 390){
            posY1 = 90;
        }
    }
    if(activeTunes2 === true){
        posY2+=5;
        element2.style.top = posY2+'px' ;
        if(posY2 > 390){
            posY2 = 90;
        }
    }
    if(activeTunes3 === true){
        posY3+=15;
        element3.style.top = posY3+'px' ;
        if(posY3 > 390){
            posY3 = 90;
        }
    }
}

const folderMove = (e) =>
{
    switch (e.keyCode)
    {
        case 37:
            if (positionFolder>0) {
                document.getElementById('music-folder').style.left = (positionFolder - 2).toString() + 'px';
                positionFolder-=2;
            }
            break;
        case 39:
            if (positionFolder<182 && screenWidth<768){
                document.getElementById('music-folder').style.left = (positionFolder + 2).toString() + 'px';
                positionFolder+=2;
            } else if (positionFolder<542 && screenWidth>768){
                document.getElementById('music-folder').style.left = (positionFolder + 2).toString() + 'px';
                positionFolder+=2;
            } else if (positionFolder<842 && screenWidth>1170){
                document.getElementById('music-folder').style.left = (positionFolder + 2).toString() + 'px';
                positionFolder+=2;
            }
            break;
    }
}



document.addEventListener('keydown',folderMove);