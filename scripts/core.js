"use strict"

///////////////////////////////////////////////////
//блок работы с музыкой
//////////////////////////////////////////////////

let soundButton = document.getElementById("sound");
soundButton.addEventListener("click", controlMusic);

// Функция stop для Audio:
HTMLAudioElement.prototype.stop = function () {
    this.pause();
    this.currentTime = 0.0;
}

function toDrawStop() {
    soundButton.value = "off";
    soundButton.src = "./img/sound3_stop.png";
}

function controlMusic(EO) {

    let state = decodeURIComponent(window.location.hash.substr(1));

    EO = EO || window.event;

    let isSoundOn = soundButton.value;

    var audioElem;

    if (state != "Start") {
        audioElem = document.getElementById("audioplayerMenu");
    }
    else {
        audioElem = document.getElementById("audioplayerStart");
    }
    if (isSoundOn === "on") {
        audioElem.pause();
        toDrawStop();
    }
    else {
        audioElem.play();
        soundButton.value = "on";
        soundButton.src = "./img/sound3.png";
    }
}


window.onload = function () {

    let audioElemMenu = document.getElementById("audioplayerMenu");
    let musicMenu = document.createElement("source");
    if (audioElemMenu.canPlayType("audio/mp3")) {
        musicMenu.setAttribute("src", "./sounds/menu_music.mp3");
        musicMenu.setAttribute("type", "audio/mp3");
    } else {
        musicMenu.setAttribute("src", "./sounds/menu_music.ogg");
        musicMenu.setAttribute("type", "audio/ogg");
    }
    audioElemMenu.appendChild(musicMenu);

    let audioElemStart = document.getElementById("audioplayerStart");
    let musicStart = document.createElement("source");
    if (audioElemStart.canPlayType("audio/mp3")) {
        musicStart.setAttribute("src", "./sounds/game_music.mp3");
        musicStart.setAttribute("type", "audio/mp3");
    } else {
        musicStart.setAttribute("src", "./sounds/game_music.ogg");
        musicStart.setAttribute("type", "audio/ogg");
    }
    audioElemStart.appendChild(musicStart);
}

//////////////////////////////////////////////

/*let fieldCanvas = document.getElementById("cvs");
fieldCanvas.addEventListener("click", openCard);

var smallCards = [
    { "name": "ball", "src": "./img/smallCards/ball.png" }, { "name": "ballon", "src": "./img/smallCards/ballon.png" },
    { "name": "bear", "src": "./img/smallCards/bear.png" }, { "name": "bike", "src": "./img/smallCards/bike.png" },
    { "name": "car", "src": "./img/smallCards/car.png" }, { "name": "doll", "src": "./img/smallCards/doll.png" },
    { "name": "drum", "src": "./img/smallCards/drum.png" }, { "name": "duck", "src": "./img/smallCards/duck.png" },
    { "name": "jula", "src": "./img/smallCards/jula.png" }, { "name": "monster_card", "src": "./img/smallCards/monster_card.png" },
    { "name": "plane", "src": "./img/smallCards/plane.png" }, { "name": "socks", "src": "./img/smallCards/socks.png" }
];

function sortSmallCards() {
    let sortArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    function compareRandom(a, b) {
        return Math.random() - 0.5;
    }

    sortArr.sort(compareRandom);

    for (let i = 0; i < sortArr.length; i++) {
        smallCards[i]["numTemp"] = sortArr[i];
    }
}*/
/*function openCard(EO) {
    EO = EO || window.event;
    let x = EO.offsetX;
    let y = EO.offsetY;
    //let y = (EO.pageY - canvas.offsetTop)  / cellSize | 0;
	//	event(x, y); // выхов функции действия
}*/