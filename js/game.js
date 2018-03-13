var positionFolder;


function init()
{
    document.getElementById('music-folder').style.left ='1%';
    positionFolder = parseInt(document.getElementById('music-folder').style.left);

}


init();

const folderMove = (e) =>
{
    switch (e.keyCode)
    {
        case 37:
            if (positionFolder>0){
                document.getElementById('music-folder').style.left = (positionFolder - 2).toString() + 'px';
                positionFolder-=2;
            }
            break;
        case 39:
            if (positionFolder<182){
                document.getElementById('music-folder').style.left = (positionFolder + 2).toString() + 'px';
                positionFolder+=2;
            }
            break;
    }
}
document.addEventListener('keydown',folderMove);