var positionFolder,
    tune1,
    tune2,
    tune3;
var screenWidth = window.innerWidth;


function init()
{
    console.log(123);
    document.getElementById('music-folder').style.left ='0';
    document.getElementById('tune-1').style.top ='90';
    positionFolder = parseInt(document.getElementById('music-folder').style.left);
    tune1 = parseInt(document.getElementById('tune-1').style.top);
    tune2 = parseInt(document.getElementById('tune-2').style.top);
    tune3 = parseInt(document.getElementById('tune-3').style.top);
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

// function tunesDown(tune1) {
//
//     document.getElementById('tune-1').style.top = (tune1 + 2).toString()+ 'px';
//     // document.getElementById('tune-2').style.top = (tune2 + 2).toString()+ 'px';
//     // document.getElementById('tune-3').style.top = (tune3 + 2).toString()+ 'px';
//     window.requestAnimationFrame(tunesDown);
//
// }
// window.requestAnimationFrame(tunesDown);


var start = null;
var element = document.getElementById("tune-1");

function step(timestamp) {
    if (!start) start = timestamp;
    var progress = timestamp - start;
    element.style.top = Math.min(progress/10, 1000).toString() + "px";
    if (progress < 3500) {
        window.requestAnimationFrame(step);
    }
}

window.requestAnimationFrame(step);



document.addEventListener('keydown',folderMove);