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
        { "count": 4, "position": "-200px", "countNum": 4 }, { "count": 1, "position": "-145px", "countNum": 3 },
        { "count": 2, "position": "-98px", "countNum": 2 }, { "count": 3, "position": "-49px", "countNum": 1 },
        { "count": 0, "position": "0px", "countNum": 0 }
    ];
}

var constantVariables = {
    finalMonsterCounter: 0,
    openedBigCards: [],
    maxTry: 16,
    isGameOld: false,
    storageClient: new StringStorageAjaxClient("STATISTIC")
}

function compareRandom(a, b) {
    return Math.random() - 0.5;
}

function initGame() {
    constantVariables.smallOpenedCard = "";
    constantVariables.hasOpenedCard = false;
    addHelpListeners();
    checkFinalCounterImg();
    sortBigCards(loadBigCards());
    sortSmallCards(loadSmallCards());

}

function cleanCardField() {
    let allSmallCards = document.getElementsByClassName("FrontFace");
    while (allSmallCards.length != 0) {
        allSmallCards[0].parentNode.removeChild(allSmallCards[0]);
    }
    if (constantVariables.smallOpenedCard) {
        constantVariables.smallOpenedCard.classList.remove("FlipCardAnimation");
    }
}

function returnFirstPosition() {
    document.getElementById("firstFinalPart").style.display = 'none';
    document.getElementById("secondFinalPart").style.display = 'none';
    document.getElementById("thirdFinalPart").style.display = 'none';
    document.getElementById("loss").style.display = 'none';
    document.getElementById("win").style.display = 'none';
    removeHelpListeners();
}

function checkKeyboard(EO) {
    EO = EO || window.event;
    if (EO.code == 'KeyH' && EO.altKey) {
        openForHelp();
    }
}

function addHelpListeners() {
    document.addEventListener('keydown', checkKeyboard);

    let longTouchTimer = "";
    let monsterField = document.getElementById("monsterField");
    monsterField.addEventListener('touchstart', function (event) {
        event.preventDefault();
        event.stopPropagation();
        longTouchTimer = setTimeout(openForHelp, 800);
    }, false);

    monsterField.addEventListener('touchmove', function (event) {
        event.preventDefault();
        event.stopPropagation();
        clearTimeout(longTouchTimer);
    }, false);

    monsterField.addEventListener('touchend', function (event) {
        clearTimeout(longTouchTimer);
    }, false);
}

function removeHelpListeners(){

    document.removeEventListener('keydown', checkKeyboard);

    let longTouchTimer = "";
    let monsterField = document.getElementById("monsterField");
    monsterField.removeEventListener('touchstart', function (event) {
        event.preventDefault();
        event.stopPropagation();
        longTouchTimer = setTimeout(openForHelp, 800);
    }, false);

    monsterField.removeEventListener('touchmove', function (event) {
        event.preventDefault();
        event.stopPropagation();
        clearTimeout(longTouchTimer);
    }, false);

    monsterField.removeEventListener('touchend', function (event) {
        clearTimeout(longTouchTimer);
    }, false);
}