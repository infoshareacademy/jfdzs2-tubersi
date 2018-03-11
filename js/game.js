var positionFolder;
var foldercrash;


function init()
{
    document.getElementById('music-folder').style.left ='45%';
    positionFolder = parseInt(document.getElementById('music-folder').style.left);

}

function game()
{

}

init();

const folderMove = (e) =>
{
        switch (e.keyCode)
        {
            case 37:
                if (positionFolder>0){
                    document.getElementById('music-folder').style.left = (positionFolder - 1).toString() + '%';
                    positionFolder-=1;
                }

                break;

            case 39:
                if (positionFolder<92){
                    document.getElementById('music-folder').style.left = (positionFolder + 1).toString() + '%';
                    positionFolder+=1;
                }

                break;



        }


}
document.addEventListener('keydown',folderMove);

