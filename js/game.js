// Verification emai-l//
var email = document.getElementById("email");
var verificationEmail = document.getElementById("verification")
$("form").submit(function() { return false; });
email.addEventListener('keydown', function(e){
    showGame();
});

verificationEmail.addEventListener("click", showGame);

// / START GAME
//



var gameActive = false;
//choic of level and start
var level1 = document.getElementById("level-1"),
    level2 = document.getElementById("level-2"),
    menuGame = $('#menu-game'),
    instructionMenu = $('#game-instuction'),
    instructionSelect = document.getElementById("instruction"),
    selectLevel = $('#select-level'),
    backWithSelectLevel = document.getElementById('back-with-select-level'),
    playGame = document.getElementById('play-game'),
    exitGame = document.getElementById('exit'),
    time = document.getElementById('time-to-end'),
    backInstruction = document.getElementById("back-with-instruction"),
    timeToFinish = 10,
    score,
    positionFolder,
    screenWidth = window.innerWidth;

function drawSector() {
    var activeBorder = $("#activeBorder");
    var deg = 0;
    if (deg <= 180) {
        activeBorder.css('background-image', 'linear-gradient(' + (90 + deg) + 'deg, transparent 50%, #A2ECFB 50%),linear-gradient(90deg, #A2ECFB 50%, transparent 50%)');
    } else {
        activeBorder.css('background-image', 'linear-gradient(' + (deg - 90) + 'deg, transparent 50%, #39B4CC 50%),linear-gradient(90deg, #A2ECFB 50%, transparent 50%)');
    }

    var startDeg = $("#startDeg").attr("class");
    activeBorder.css('transform', 'rotate(' + startDeg + 'deg)');
    $("#circle").css('transform', 'rotate(' + (-startDeg) + 'deg)');
};


function showGame(){
    $("#start-game").slideDown("slow");
    setTimeout(function (){
        $('.game-area').css("opacity","1");
    },750)
    setTimeout(function (){
        menuGame.slideDown("fast");
    },1500)
}

level1.addEventListener("click", init);
level2.addEventListener("click", init);
playGame.addEventListener("click", selectLevelGame);
backWithSelectLevel.addEventListener("click", function(){
    backToMenuGame('#select-level');
});
instructionSelect.addEventListener("click", instruction);
backInstruction.addEventListener("click",function(){
    backToMenuGame('#game-instuction');
})
exitGame.addEventListener("click", function(){
    menuGame.slideUp("fast");
    setTimeout(function(){
        $('.game-area').css("opacity","0");
    },250);
    setTimeout(function(){
        $("#start-game").slideUp("slow");
    },1250)
})

function selectLevelGame() {
    menuGame.fadeOut(250);
    setTimeout(function(){
        selectLevel.fadeIn(250);
    },250);
}

function instruction(){
    menuGame.fadeOut(250);
    setTimeout(function(){
        instructionMenu.fadeIn(250);
    },250);
}

function backToMenuGame(selector){
    selector= $(selector);
    selector.fadeOut(250);
    setTimeout(function(){
        menuGame.fadeIn(250);
    },250);
}

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
        document.getElementById('music-folder').style.opacity="0.1";
        for(var i =1;i<=3;i++) {
            document.getElementById('tune-'+i).style.top = "90px";
        }
        gameActive=false;

        resetPosition();
    }
}

function resetPosition(){

    $('#music-folder').css({"left":"406px", "transition":"unset"});
    setTimeout(function(){
        $('#music-folder').css("transition","0.25s linear");
    },100);
}

function stopGame() {
    document.querySelector('#select-level').style.visibility= 'visible';
    clearInterval(moveInterval);
    clearTimeout(tune2Timeout);
    clearTimeout(tune3Timeout);
    for(var i = 1; i <=3;i++){
        document.getElementById('tune-'+i).style.opacity= "0";
    }
}

function addPoint(){
    if (checkCollision() === true){
        var score = document.getElementById('score');
        var scoreNumber = parseInt(document.getElementById('score').innerText);
        var i = +1;
        score.innerHTML = scoreNumber+i;
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
        animatePoint('point-1');
        return true;
    } else if (positionFolder===406 && positionTune2>335 && positionTune2<389 && screenWidthDesktop){
        posYtune2 = 90;
        $('#thumb-up-2').fadeIn('fast').fadeOut('slow');
        youtubeFolderAnimation();
        animatePoint('point-2');
        return true;
    } else if (positionFolder===711 && positionTune3>335 && positionTune3<389 && screenWidthDesktop){
        posYtune3 = 90;
        $('#thumb-up-3').fadeIn('fast').fadeOut('slow');
        youtubeFolderAnimation();
        animatePoint('point-3');
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
    document.getElementById('music-folder').style.opacity= '1';
    positionFolder = parseInt(document.getElementById('music-folder').style.left);
    gameActive= true;
    for(var i = 1; i <=3;i++){
        document.getElementById('tune-'+i).style.opacity= "1";
    }
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

function animatePoint(selector){
    selector = document.getElementById(selector);
    selector.style.opacity='1';
    selector.style.transition = "1s";
    selector.style.top='300px';
    setTimeout(function () {
        selector.style.transition = "unset";
        selector.style.top='350px';
        selector.style.opacity='0';
    },1000);
}

//move folder desktops
const folderMove = (e) =>
{
    if(gameActive){
        switch (e.keyCode)
        {
            case 37:
                if (positionFolder>130 && screenWidth>1170){
                    document.getElementById('music-folder').style.left = (positionFolder - 305).toString() + 'px';
                    positionFolder-=305;
                }
                break;
            case 39:
                if (positionFolder<630 && screenWidth>1170){
                    document.getElementById('music-folder').style.left = (positionFolder + 305).toString() + 'px';
                    positionFolder+=305;
                }
                break;
        }
    }

}
document.addEventListener('keydown',folderMove);

