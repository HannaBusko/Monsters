"use strict"

let soundButton = document.getElementById("sound");
soundButton.addEventListener("click", controlMusic);

let audioElem = document.getElementById("audioplayer");

function controlMusic(EO) {

    let state = decodeURIComponent(window.location.hash.substr(1));

    EO = EO || window.event;

    let isSoundOn = soundButton.value;

    if (isSoundOn === "on") {
        audioElem.pause();
        soundButton.value = "off";
        soundButton.src = "./img/sound3_stop.png";
    }
    else {

        let mainMusic = document.createElement("source");
        if (state != "Start") {
            if (audioElem.canPlayType("audio/mp3")) {
                mainMusic.setAttribute("src", "./sounds/menu_music.mp3");
                mainMusic.setAttribute("type", "audio/mp3");
            } else {
                mainMusic.setAttribute("src", "./sounds/menu_music.ogg");
                mainMusic.setAttribute("type", "audio/ogg");
            }
        }
        else {

            if (audioElem.canPlayType("audio/mp3")) {
                mainMusic.setAttribute("src", "./sounds/game_music.mp3");
                mainMusic.setAttribute("type", "audio/mp3");
            } else {
                mainMusic.setAttribute("src", "./sounds/game_music.ogg");
                mainMusic.setAttribute("type", "audio/ogg");
            }
        }
        audioElem.appendChild(mainMusic);
        audioElem.play();
        soundButton.value = "on";
        soundButton.src = "./img/sound3.png";
    }
}


/*window.onload = function () {

    let mainMusic = this.document.createElement("source");


    mainMusic.setAttribute("data-place", "menu");



    let gameMusic = this.document.createElement("source");

    gameMusic.setAttribute("data-place", "game");
    audioElem.appendChild(gameMusic);


    // <source src="./sounds/menu_music.mp3" type="audio/mp3">
    //    <source src="./sounds/menu_music.ogg" type="audio/ogg">

}*/
