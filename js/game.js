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
        time.innerHTML='Pozostało <b>'+sek+'</b> sekund.';
        setTimeout(function(){timeStart(time,--sek)},1000)
    } else {
        time.innerHTML='Koniec czasu';
    }
}






var positionFolder;
var screenWidth = window.innerWidth;


function init() {
    document.getElementById('select-level').style.display='none';


    document.getElementById('music-folder').style.left ='0';
    positionFolder = parseInt(document.getElementById('music-folder').style.left);

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


