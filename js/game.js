//Unset to refresh page all input for complete write date//
$("form").submit(function() {
    return false;
});

//Section verification e-mail//
$("#email-key-down").keydown(function(e) {
    if(e.which === 13) {
        showGame();
    }
});
$("#email-click").click(showGame);

// Section animate and set all option the window game //
var menuGame = $("#menu-game");
var selectLevel = $("#select-level");

function showGame() {
    $("#start-game").slideDown("slow");
    setTimeout(function () {
        $('.game-area').css("opacity", "1");
    },750);
    setTimeout(function () {
        menuGame.slideDown("fast");
    },1500)
}
$("#easy-level").click(init);
$("#hard-level").click(init);
$("#play-game").click(selectLevelGame);
$("#back-with-select-level").click(function() {
    backToMenuGame("#select-level");
});
$("#instruction").click(instruction);
$("#back-with-instruction").click(function() {
    backToMenuGame("#game-instruction");
});
$("#exit").click(function() {
    menuGame.slideUp("fast");
    setTimeout(function(){
        $('.game-area').css("opacity","0");
    },250);
    setTimeout(function(){
        $("#start-game").slideUp("slow");
    },1250)
});
$("#back-with-end-game").click(function(){
    backToMenuGame('#points-label');
});

function selectLevelGame() {
    menuGame.fadeOut(250);
    setTimeout(function(){
        selectLevel.fadeIn(250);
    },250);
}

function instruction(){
    menuGame.fadeOut(250);
    setTimeout(function(){
        $("#game-instruction").fadeIn(250);
    },250);
}

function backToMenuGame(selector){
    selector= $(selector);
    selector.fadeOut(250);
    setTimeout(function(){
        menuGame.fadeIn(250);
    },250);
}

function drawSector(deg) {
    let activeBorder = $("#activeBorder");
    if (deg <= 180) {
        activeBorder.css("background-image", "linear-gradient(" + (90 + deg) + "deg, transparent 50%, gray 50%),linear-gradient(90deg, gray 50%, transparent 50%)");
    }
    else {
        activeBorder.css("background-image", "linear-gradient(" + (deg - 90) + "deg, transparent 50%, black 50%),linear-gradient(90deg, gray 50%, transparent 50%)");
    }
    let startDeg = $("#startDeg").attr("class");
    activeBorder.css("transform", "rotate(" + startDeg + "deg)");
    $("#circle").css("transform", "rotate(" + (-startDeg) + "deg)");

    if(deg === 360) {
        return;
    }
    setTimeout(drawSector,1000/36,deg + 10);
}

//Section Game //

var gameActive = false;
var time = $('#time-to-end');
var timeToFinish = 5;
var screenWidth = window.innerWidth;
var folder;
var tunes = [];
var moveInterval;
var setActiveTunes;

class Coordinates {
    constructor(x, y, selector) {
        this.x = x;
        this.y = y;
        this.selector = selector
        if (new.target === Coordinates) {
            throw new TypeError("Cannot construct Abstract instances directly");
        }
    }
}
class Folder extends Coordinates {
    moveX(e){
         if (e.which == 37) {
             if(this.x !== 101 && screenWidth > 1170) {
                 $('#music-folder').css("left", (this.x - 305) + "px");
                 this.x -= 305;
             }
         }
         else if (e.which == 39 && screenWidth > 1170) {
             if(this.x !== 711) {
                 $('#music-folder').css("left", (this.x + 305) + "px");
                 this.x += 305;
             }
         }
     }
     posX() {
        return this.x + "px";
     }
}

class Tune extends Coordinates {
    constructor(x, y, selector) {
        super(x, y, selector);
        this.active = false;
    }
    moveY() {
        this.y += 3;
    }
}

function init() {
    selectLevel.fadeOut("fast");
    folder = new Folder(406, 355, "#music-folder");
    setTimeout(setStartGame,400);
    let nextPos = 101
    for(let i = 1; i <= 3; i++) {
        tunes.push(new Tune (nextPos, 90, "#tune-" + i));
        nextPos += 305;
        $(tunes[i - 1].selector).css("top", tunes[i - 1].y);
    }
}

function setStartGame() {
    $(folder.selector).css("left", folder.posX());
    gameActive = !gameActive;
    $(".timer-game").css("opacity" , 1);
    setTimer(3);
}

function setTimer(time) {
    if(time === 0){
        runGame();
        return;
    }
    drawSector(0);
    $("#seconds").text(time);
    setTimeout(setTimer,1000,time-1);
}

function runGame() {
    $(".timer-game").css("opacity" , 0);
    $(folder.selector).css("opacity", 1);
    tunes.forEach(function(tune){
        $(tune.selector).css({"opacity" : 1, "transition" : "unset"});
    })
    Update();
    moveInterval = setInterval(moveTunes,1000/60);
    activeTunes();
    setActiveTunes = setInterval(activeTunes,700);
}


function Update(){
    if(timeToFinish>0) {
        time.html('<b>'+timeToFinish+'</b>'+' sekund');
        setTimeout(function(){Update(time,--timeToFinish)},1000)
    }
    else {
        time.html("Koniec czasu");
        timeToFinish = 10;
        $(folder.selector).css("opacity", 0.1);
        gameActive = !gameActive;
        tunes.splice(0,3);
        resetPosition();
        for(var i =1;i<=3;i++) {
            document.getElementById("tune-"+i).style.transition="1s";
            document.getElementById('tune-'+i).style.opacity = "0";
        }
        clearInterval(moveInterval);
        $('#text-end-game').css("opacity", 1);
        $('#text-end-game').text('KONIEC GRY! Twój wynik : ' + $("#score").text());
        setTimeout(function (){
            $('#text-end-game').css("opacity", 0);
        },2500);
        setTimeout(stopGame,3000);
    }
}

function resetPosition(){
    $(folder.selector).css({"left":"406px", "transition":"unset"});
    setTimeout(function(){
        $(folder.selector).css("transition","0.25s linear");
    },100);
}

function stopGame() {
    $('#points-label').fadeIn(250);

    tunes.forEach(function(tune){
        $(tune.selector).css({"opacity" : 0, "transition" : "1s"});
    })
}

function addPoint(){
    var scoreNumber = parseInt($("#score").text());
    $("#score").text(scoreNumber + 1);
}

//checkCollision for three other resolutions
function checkCollision(){
    let screenWidthDesktop = screenWidth>1170;
    tunes.forEach(function(tune, index) {
        if(folder.x === tune.x && tune.y > 370 && tune.y < 389 && screenWidthDesktop) {
            tune.y = 90;
            tune.renderAfterColiisionFolder = true;
            youtubeFolderAnimation();
            $("#thumb-up-" + (index + 1)).fadeIn("fast").fadeOut("slow");
            animatePoint("#point-" + (index + 1));
            addPoint();
        }
        if(tune.y === 390 && tune.x !== folder.x && screenWidth>1170) {
            tune.y = 90;
            $("#thumb-down-" + (index + 1)).fadeIn("fast").fadeOut("slow");
        }
    })
}

function youtubeFolderAnimation() {
    $(folder.selector).css("transform", "rotate(180deg)");
    setTimeout(function () {
        $(folder.selector).css("transform", "rotate(0deg)");
    },100);
}

function animatePoint(selector) {
    selector = $(selector);
    selector.css({"opacity" : 1, "transition" : "1s", "top" : "300px"});
    setTimeout(function () {
        selector.css({"opacity" : 0, "transition" : "unset", "top" : "350px"});
    },1000);
}

// #### START - falling tunes

function moveTunes() {
    checkCollision();
    tunes.forEach(function(tune) {
        if(tune.active){
            tune.moveY();
            $(tune.selector).css("top", tune.y + "px");
        }
    })
}

function activeTunes() {
    if(tunes[0].active && tunes[1].active && tunes[2].active) {
        clearInterval(setActiveTunes)
        return;
    }
    while(true) {
        let random = Math.round(Math.random()*2);
        if(!tunes[random].active){
            tunes[random].active = true;
            break;
        }
    }
}

const folderMove = (e) => {
    if(gameActive) {
        folder.moveX(e);
    }
}

document.addEventListener("keydown",folderMove);

