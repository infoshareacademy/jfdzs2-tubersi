// START GAME
//

var level1 = document.getElementById("level-1");
var level2 = document.getElementById("level-2");
var time = document.getElementById('time-to-end');
var sek = 60;

level1.addEventListener("click", init);
level1.addEventListener("click", timeStart);
level2.addEventListener("click", init);
level2.addEventListener("click", timeStart);


function timeStart(){
    if(sek>0) {
        time.innerHTML='<b>'+sek+'</b>'+' sekund';
        setTimeout(function(){timeStart(time,--sek)},1000)
    } else {
        time.innerHTML='Koniec czasu';
    }
}



var positionFolder;
var positionTune;
var screenWidth = window.innerWidth;


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
    document.getElementById('select-level').style.display='none';

    startPositionFolder();


    positionFolder = parseInt(document.getElementById('music-folder').style.left);

    //pozycja startowa nuta
    document.getElementById('tune-1').style.top = '90';
    positionTune = parseInt(document.getElementById('tune-1').style.top);
    setInterval(moveTunes,60);
    setTimeout(activeTune,500);
    setTimeout(activeTune1,800);



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

}




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


