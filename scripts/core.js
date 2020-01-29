"use strict"

let soundButton = document.getElementById("sound");
soundButton.addEventListener("click", controlMusic);

// Функция stop для Audio:
HTMLAudioElement.prototype.stop = function () {
    this.pause();
    toDrawStop();
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

    // <source src="./sounds/menu_music.mp3" type="audio/mp3">
    //    <source src="./sounds/menu_music.ogg" type="audio/ogg">

}
