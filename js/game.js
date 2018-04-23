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
var tableRanking = $("#table-ranking");
class Ranking {
    constructor(){
        this.listActually = 1;
    }

    addList() {
        this.listActually += 5;
    }
    deductList() {
        if(this.listActually !== 1) {
            this.listActually -= 5;
        }
    }
}

var rankings = new Ranking();

function showGame() {
    $("#start-game").slideDown("slow");
    setTimeout(function () {
        $('.game-area').css("opacity", "1");
    },750);
    setTimeout(function () {
        menuGame.slideDown("fast");
    },1500)
}
$("#easy-level").click(function() {
    init(1);
});
$("#hard-level").click(function() {
    init(2);
});
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
$("#ranking").click(ranking)
$("#back-with-ranking").click(function (){
    backToMenuGame("#table-ranking");
})
$("#prev-score").click(prevScore);
$("#next-score").click(nextScore);

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

function ranking() {
    menuGame.fadeOut(250);
    setTimeout(function(){
        $("#table-ranking").fadeIn(250);
    },250);
}

function prevScore() {
    rankings.deductList();
    for(let i = 0; i< 5 ;i++){
        $("#score-" + (i + 1)).text(rankings.listActually + i);
    }

}

function nextScore(){
    rankings.addList();
    tableRanking.animate({"left" : "1000px"});
    setTimeout(function(){
        tableRanking.css("left", "-1000px");
    },250);
    setTimeout(function(){
        tableRanking.animate({"left" : "10%"});
        for(let i = 0; i< 5 ;i++){
            $("#score-" + (i + 1)).text(rankings.listActually + i);
        }
    },500);

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
var timeToFinish = 60;
var screenWidth = window.innerWidth;
var folder;
var tunes = [];
var moveInterval;
var setActiveTunes;
var accesCheckCollision = true;

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
    constructor(x, y, selector, speed) {
        super(x, y, selector);
        this.active = false;
        this.speed = speed;
    }
    moveY() {
        this.y += this.speed;
    }
}

function init(speed) {
    selectLevel.fadeOut("fast");
    folder = new Folder(406, 355, "#music-folder");
    setTimeout(setStartGame,400);
    let nextPos = 101
    for(let i = 1; i <= 3; i++) {
        tunes.push(new Tune (nextPos, 90, "#tune-" + i, speed * 2));
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
    $(".speaker").fadeIn("fast");
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
        timeToFinish = 60;
        $(folder.selector).css("opacity", 0.1);
        gameActive = !gameActive;
        resetPosition();
        tunes.forEach(function(tune){
            $(tune.selector).css({"opacity" : 0, "transition" : "1s"});
        });
        $(".speaker").fadeOut("slow");
        tunes.splice(0,3);
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

function addPoint(value){
    var scoreNumber = parseInt($("#score").text());
    $("#score").text(scoreNumber + value);
}


function checkCollision(){
    let screenWidthDesktop = screenWidth>1170;
    tunes.forEach(function(tune, index) {
        if(folder.x === tune.x && tune.y > 355 && tune.y < 389 && screenWidthDesktop) {
            tune.y = 90;
            tune.renderAfterColiisionFolder = true;
            youtubeFolderAnimation();
            $("#thumb-up-" + (index + 1)).fadeIn("fast").fadeOut("slow");
            animatePoint("#point-" + (index + 1));
            if($(tune.selector + " img").attr("src") === "images/tune_evil.png") {
                addPoint(-5);
            }
            else {
                addPoint(1);
            }
            randomEvilTune(tune.selector);
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
    if(accesCheckCollision){
        checkCollision();
    }
    else {
        setTimeout(function() {
            accesCheckCollision = true;
        },250);
    }
    tunes.forEach(function(tune, index) {
        if(tune.y >= 390  && screenWidth>1170) {
            tune.y = 90;
            $("#thumb-down-" + (index + 1)).fadeIn("fast").fadeOut("slow");
            randomEvilTune(tune.selector);
        }

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

function randomEvilTune(selector){
    let random = Math.round(Math.random()*2)
    if(random === 2){
        $(selector + " img").attr("src", "images/tune_evil.png")
    }
    else {
        $(selector + " img").attr("src", "images/tune.png")
    }
}

const folderMove = (e) => {
    if(gameActive) {
        folder.moveX(e);
        if (accesCheckCollision) {
            accesCheckCollision = false;
        }
    }
}

document.addEventListener("keydown",folderMove);

