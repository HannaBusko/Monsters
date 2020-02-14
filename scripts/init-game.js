function loadBigCards() {
    return [
        { "id": "car", "src": "./img/bigCards/monstr5_car.png" }, { "id": "car", "src": "./img/bigCards/monstr5_car.png" },
        { "id": "ball", "src": "./img/bigCards/monstr4_ball.png" }, { "id": "ball", "src": "./img/bigCards/monstr6_ball.png" },
        { "id": "ballon", "src": "./img/bigCards/monstr2_ballon.png" }, { "id": "ballon", "src": "./img/bigCards/monstr2_ballon.png" },
        { "id": "bear", "src": "./img/bigCards/monstr5_bear.png" }, { "id": "bear", "src": "./img/bigCards/monstr7_bear.png" },
        { "id": "bike", "src": "./img/bigCards/monstr6_bike.png" }, { "id": "bike", "src": "./img/bigCards/monstr6_bike.png" },
        { "id": "doll", "src": "./img/bigCards/monstr4_doll.png" }, { "id": "doll", "src": "./img/bigCards/monstr1_doll.png" },
        { "id": "drum", "src": "./img/bigCards/monstr2_drum.png" }, { "id": "drum", "src": "./img/bigCards/monstr3_drum.png" },
        { "id": "duck", "src": "./img/bigCards/monstr6_duck.png" }, { "id": "duck", "src": "./img/bigCards/monstr1_duck.png" },
        { "id": "jula", "src": "./img/bigCards/monstr9_jula.png" }, { "id": "jula", "src": "./img/bigCards/monstr8_jula.png" },
        { "id": "plane", "src": "./img/bigCards/monstr7_plane.png" }, { "id": "plane", "src": "./img/bigCards/monstr3_plane.png" },
        { "id": "jula", "src": "./img/bigCards/monstr9_jula.png" }
    ];
}

function loadSmallCards() {
    return [
        { "id": "ball", "src": "./img/smallCards/ball.png" }, { "id": "ballon", "src": "./img/smallCards/ballon.png" },
        { "id": "bear", "src": "./img/smallCards/bear.png" }, { "id": "bike", "src": "./img/smallCards/bike.png" },
        { "id": "car", "src": "./img/smallCards/car.png" }, { "id": "doll", "src": "./img/smallCards/doll.png" },
        { "id": "drum", "src": "./img/smallCards/drum.png" }, { "id": "duck", "src": "./img/smallCards/duck.png" },
        { "id": "jula", "src": "./img/smallCards/jula.png" }, { "id": "monster_card", "src": "./img/smallCards/monster_card.png" },
        { "id": "plane", "src": "./img/smallCards/plane.png" }, { "id": "socks", "src": "./img/smallCards/socks.png" }
    ];
}

function loadSprintPosition() {
    return [
        { "count": 4, "position": "-200px" }, { "count": 1, "position": "-145px" },
        { "count": 2, "position": "-98px" }, { "count": 3, "position": "-49px" },
        { "count": 0, "position": "0px" }
    ];
}

var constantVariables = {
    "finalMonsterCounter": 0,
    "openedBigCards": []
}

/*var gameplay = class Gameplay {
    isPlaying() {
        return false;
    };
    stopGame() {
        return true;
    }
}*/

function compareRandom(a, b) {
    return Math.random() - 0.5;
}

function initGame() {
    constantVariables.smallOpenedCard = "";
    constantVariables.hasOpenedCard = false;
    checkFinalCounter();
    sortBigCards(loadBigCards());
    sortSmallCards(loadSmallCards());
}

function cleanCardField() {
    let allSmallCards = document.getElementsByClassName("frontFace");
    while (allSmallCards.length != 0) {
        allSmallCards[0].parentNode.removeChild(allSmallCards[0]);
    }
    if (constantVariables.smallOpenedCard) {
        constantVariables.smallOpenedCard.classList.remove("flipCardAnimation");
    }
}

function returnFirstPosition() {
    document.getElementById("firstFinalPart").style.display = 'none';
    document.getElementById("secondFinalPart").style.display = 'none';
    document.getElementById("thirdFinalPart").style.display = 'none';
    document.getElementById("loss").style.display = 'none';
}