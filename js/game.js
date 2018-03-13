var positionFolder;
var screenWidth = window.innerWidth;


function init()
{
    document.getElementById('music-folder').style.left ='0';
    positionFolder = parseInt(document.getElementById('music-folder').style.left);

}
init();

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