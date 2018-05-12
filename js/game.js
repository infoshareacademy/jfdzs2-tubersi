//Unset to refresh page all input for complete write date//
$("form").submit(function() {
    return false;
});

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAw4E-zblpi5ej4gm0VZxmijU3DrxIEp0E",
    authDomain: "tubersi-score-game.firebaseapp.com",
    databaseURL: "https://tubersi-score-game.firebaseio.com",
    projectId: "tubersi-score-game",
    storageBucket: "",
    messagingSenderId: "738673376669"
};
firebase.initializeApp(config);
var database = firebase.database();
var ref = database.ref('scores');
var allScore = [];
var showRanking = false;
var saveRanking = false;
var email;
var selectorText;

function gotData(data){
    var scores = data.val();
    var keys = Object.keys(scores);
    allScore = [];
    for(let i = 0; i < keys.length; i++) {
        allScore.push(scores[keys[i]]);
    }
    // Algorithm to sort with database points player //
    allScore.sort(function(obj1 ,obj2){
        if(obj1.points > obj2.points) {
            return -1;
        }
        else if(obj1.points < obj2.points) {
            return 1;
        } else {
            return 0;
        }
    })

    rankings.score = allScore;
    if(showRanking) {
        showRanking = false;
        setRanking();
        menuGame.fadeOut(250);
        setTimeout(function() {
            $("#table-ranking").fadeIn(250);
        },250);
    }
    if(saveRanking) {
        saveRanking = false;
        let nick = $("#points-send").val();
        for(let i = 0; i <allScore.length; i++){
            if(nick.toLowerCase() === allScore[i].name.toLowerCase()){
                $(".already-nick").fadeIn("fast");
                return;
            }
        }
        $(".already-nick").fadeOut();
        addRanking();
    }
}

function errData(err) {
    console.log("Error!")
    console.log(err);
}

//Section verification e-mail//

$("#email-key-down").keydown(function(e) {
    if(e.which === 13 && !activeGame) {
        if(checkEmail()){
        activeGame = true;
        showGame();
        selectorText.text("");
        }
    }
});

$("#email-click").click(function(){
 if(!activeGame) {
     if(checkEmail()){
         showGame();
         activeGame = true;
         selectorText.text("");
     }
 }
});

function checkEmail() {
    selectorText = $("#valid-email");
    let selectorInputValue = $("#email-key-down").val();
    if(selectorInputValue === "") {
        selectorText.text("Musisz podać email!");
        return false;
    }
    for(let i = 0; i < selectorInputValue.length; i++) {
        if(selectorInputValue.charAt(i) === "@") {
            break;
        }
        if(selectorInputValue.charAt(i) !== "@" && i === selectorInputValue.length - 1 ) {
            selectorText.text("Brakuje @ w twoim emailu!");
            return false;
        }
    }
    for(let i = 0; i < selectorInputValue.length; i++) {
        if(selectorInputValue.charAt(i) === "@") {
            if(selectorInputValue.substr(i + 1, i + 7)!== "wp.pl" &&
                selectorInputValue.substr(i + 1, i + 10)!== "gmail.com" &&
                selectorInputValue.substr(i + 1, i + 9)!== "onet.pl") {
                selectorText.text("Brakuje nazwy poczty lub znaków w twoim emailu!");
                return false;
            }
        }
    }
    if(screenWidth <1024){
        return false;
    }
    return true;
}

// Section animate and set all option the window game //
var menuGame = $("#menu-game");
var selectLevel = $("#select-level");
var tableRanking = $("#table-ranking");
var animationScore;
var setOpacity = 1;
var progressLoad;
var percentToLoad ;
var activeGame = false;

class Ranking {
    constructor(){
        this.listActually = 1;
        this.score = null;
    }

    addList() {
        this.listActually += 5;
    }
    deductList() {
        if(this.listActually !== 1) {
            this.listActually -= 5;
            return true;
        }
        else {
            return false;
        }
    }
}

var rankings = new Ranking();

$("#points-send").keydown(function (e){
    if(e.which === 13) {
        addPointsToRanking();
    }
})

$("#points-send-button").click(addPointsToRanking)

function addPointsToRanking() {
    saveRanking = true;
    ref.on("value", gotData, errData);
}

function addRanking() {
    var data = {
        name: $("#points-send").val(),
        points: parseInt($("#score").text()),
        email: email
    }
    ref.push(data);
    backToMenuGame("#points-label");
    $("#score").text(0);
}

function showGame() {
    email = $("#email-key-down").val();
    $("#start-game").slideDown("slow");
    setTimeout(function(){
        $(".intro-game").fadeIn("slow");
        $('.game-area').css("opacity", "1");
        percentToLoad = 0;
        progressLoad = setInterval(function(){
            percentToLoad++;
            if(percentToLoad === 100){
                clearInterval(progressLoad);
            }
            $(".progress-bar").css({"width" : percentToLoad + "%"});
            $(".progress-bar").text(percentToLoad + "%");
        },50);
    },1000)
    setTimeout(function(){
        $(".intro-game").fadeOut("slow");
    },7500);
    setTimeout(function () {
        $("#score-info").fadeIn("fast");
        $(".progress-bar").css({"width" : "0%"});
        $(".progress-bar").text("0%")
        $("#floor").fadeIn("slow");
        $(".game-area").css({"background-image" : "url('images/gameArea.jpg')", "border": "solid 5px #2D2E32", "border-radius": "5px"})
    },8500);
    setTimeout(function () {
        menuGame.slideDown("fast");
    },9000)
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
        $("#score-info").fadeOut();
        $("#floor").fadeOut();
        $(".game-area").css({"background-image" : "unset", "border": "unset"})
    },1250)
    activeGame = false;
});

$("#back-with-end-game").click(function(){
    backToMenuGame('#points-label');
});

$("#ranking").click(function () {
    rankings.listActually = 1;
    updateRanking();
})

$("#back-with-ranking").click(function (){
    backToMenuGame("#table-ranking");
    clearInterval(animationScore);
})

$("#prev-score").click(prevScore);

$("#next-score").click(nextScore);

function selectLevelGame() {
    menuGame.fadeOut(250);
    setTimeout(function(){
        selectLevel.fadeIn(250);
    },250);
}

function instruction() {
    menuGame.fadeOut(250);
    setTimeout(function(){
        $("#game-instruction").fadeIn(250);
    },250);
}

function updateRanking() {
    showRanking = true;
    ref.on('value', gotData, errData);
}

function setRanking() {
    let nextId = 1;
    clearInterval(animationScore);
    for(let i = rankings.listActually; i < rankings.listActually + 5; i++){
        if(rankings.score[i - 1]) {
            if(rankings.score[i - 1].email === email) {
                setOwnPlayerScore(nextId, i);
            }
            else {
                setAllPlayerScore(nextId, i);
            }
            nextId++;
            continue;
        }
        resetEmptyTable(nextId, i);
        nextId++;
    }
    animationScore = setInterval(animateOwnScore, 500);
}

function setOwnPlayerScore(nextId, i) {
    $("#score-" + nextId).css({"color" : "white", "background-color" : "black"});
    $("#score-" + nextId).text(i);
    $("#name-" + nextId).css({"color" : "white", "background-color" : "black"});
    $("#name-" + nextId).text(rankings.score[i - 1].name);
    $("#result-" + nextId).css({"color" : "white", "background-color" : "black"});
    $("#result-" + nextId).text(rankings.score[i - 1].points);
}

function setAllPlayerScore(nextId, i) {
    $("#score-" + nextId).css({"color" : "black", "background-color" : "unset", "opacity": 1});
    $("#score-" + nextId).text(i);
    $("#name-" + nextId).css({"color" : "black", "background-color" : "unset", "opacity": 1});
    $("#name-" + nextId).text(rankings.score[i - 1].name);
    $("#result-" + nextId).css({"color" : "black", "background-color" : "unset", "opacity": 1});
    $("#result-" + nextId).text(rankings.score[i - 1].points);
}

function resetEmptyTable(nextId, i) {
    $("#score-" + nextId).css({"color" : "black", "background-color" : "unset", "opacity": 1});
    $("#score-" + nextId).text(i);
    $("#name-" + nextId).css({"color" : "black", "background-color" : "unset", "opacity": 1});
    $("#name-" + nextId).text("");
    $("#result-" + nextId).css({"color" : "black", "background-color" : "unset", "opacity": 1});
    $("#result-" + nextId).text("");
}

function animateOwnScore() {
    if(setOpacity !== 1) {
        setOpacity = 1;
    }
    else {
        setOpacity = 0;
    }
    for(let i = rankings.listActually; i < rankings.listActually + 5; i++) {
        if(rankings.score[i - 1]){
            if(rankings.score[i - 1].email === email) {
                $("#score-" + (i - rankings.listActually + 1)).animate({"opacity": setOpacity});
                $("#name-" + (i - rankings.listActually + 1)).animate({"opacity": setOpacity});
                $("#result-" + (i - rankings.listActually + 1)).animate({"opacity": setOpacity});
            }
        }
    }
}

function prevScore() {
    if(rankings.deductList()){
        tableRanking.css({"left" : "10%", "right" : "unset"});
        tableRanking.animate({"left" : "1000px"});
        setTimeout(function (){
            tableRanking.css({"opacity" : "0"});
            tableRanking.animate({"left" : "-1000px"});
            setRanking();
        },250);
        setTimeout(function() {
            tableRanking.animate({"left" : "10%", "opacity" : "1"});
        },300);
    }
}

function nextScore(){
    if(rankings.score.length >= (rankings.listActually + 5)){
        rankings.addList();
        tableRanking.css({"right" : "10%", "left" : "unset"});
        tableRanking.animate({"right" : "1000px"});
        setTimeout(function (){
            tableRanking.css({"opacity" : "0"});
            tableRanking.animate({"right" : "-1000px"});
            setRanking();
        },250);
        setTimeout(function(){
            tableRanking.animate({"right" : "10%", "opacity" : "1"});
        },300);
    }
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
            if($(tune.selector + " img").attr("src") === "images/tune_evil.png") {
                addPoint(-5);
                animatePoint("#point-" + (index + 1), "-5");
            }
            else {
                addPoint(1);
                animatePoint("#point-" + (index + 1), "+1");
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

function animatePoint(selector, value) {
    selector = $(selector);
    selector.text(value);
    if(value === "-5") {
        selector.css("color", "red");
    }
    else {
        selector.css("color", "black");
    }
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

