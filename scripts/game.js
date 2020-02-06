var gameplay = class Gameplay {
    isPlaying() {
        return false;
    };
    stopGame() {
        return true;
    }
}

var smallCards = [
    { "id": "ball", "src": "./img/smallCards/ball.png" }, { "id": "ballon", "src": "./img/smallCards/ballon.png" },
    { "id": "bear", "src": "./img/smallCards/bear.png" }, { "id": "bike", "src": "./img/smallCards/bike.png" },
    { "id": "car", "src": "./img/smallCards/car.png" }, { "id": "doll", "src": "./img/smallCards/doll.png" },
    { "id": "drum", "src": "./img/smallCards/drum.png" }, { "id": "duck", "src": "./img/smallCards/duck.png" },
    { "id": "jula", "src": "./img/smallCards/jula.png" }, { "id": "monster_card", "src": "./img/smallCards/monster_card.png" },
    { "id": "plane", "src": "./img/smallCards/plane.png" }, { "id": "socks", "src": "./img/smallCards/socks.png" }
];

let hasOpenedCard = false;
var firstOpenedCar,secondOpenedCard;

function sortSmallCards() {
    let sortArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    function compareRandom(a, b) {
        return Math.random() - 0.5;
    }

    sortArr.sort(compareRandom);

    for (let i = 0; i < sortArr.length; i++) {
        smallCards[i]["numTemp"] = sortArr[i];
    }

    addSmallCards();
    addListeners();
}

function addSmallCards() {
    let allSmallCards = document.getElementsByClassName("smallCards");
    smallCards.forEach((value, key) => {
        let newImg = document.createElement("img");
        newImg.setAttribute("src", value.src);
        newImg.setAttribute("class", "frontFace");
        newImg.setAttribute("alt", "frontFace");
        allSmallCards[value.numTemp].prepend(newImg);
        allSmallCards[value.numTemp].setAttribute("data-img", value.id);
    });
}


function addListeners() {
    let allSmallCards = document.querySelectorAll(".smallCards");
    for (let i = 0; i < allSmallCards.length; i++) {
        allSmallCards[i].addEventListener('click', openCard);
        //allSmallCards[i].addEventListener("click",openCard);
    }
}

function openCard(EO) {
    EO = EO || window.event;

    if (!hasOpenedCard) {
        hasOpenedCard = true;
        openedCar = this;
        this.classList.add("smallCardAnimation");
        this.removeEventListener('click', openCard);
        this.classList.remove('smallCardAnimation');
    }
    else{

    }
    /*else {hasOpenedCard = false;
        setTimeout(closeCard(this),100);
        
        
        
    }*/
}

function closeCard(card) {
    card.classList.remove('smallCardAnimation');
}

function cleanCardField() {
    let allSmallCards = document.getElementsByClassName("frontFace");
    while (allSmallCards.length != 0) {
        allSmallCards[0].parentNode.removeChild(allSmallCards[0]);
    }
}

/*function toConstractCanvas() {

    drawCanvas();

}

function drawCanvas() {

    let cardField = document.getElementById("cardField");

    let context = fieldCanvas.getContext("2d");
    context.globalCompositeOperation = 'destination-out';
    context.fillStyle = "rgba(0,0,0,1)";
    context.fillRect(0, 0, fieldCanvas.width, fieldCanvas.height);
    context.globalCompositeOperation = 'source-over';

    let clientWidth = document.documentElement.clientWidth;

    //начальные размеры изображения и отступов
    let imgStartHeight= 150, imgHeight = 150;
    let imgStartWidth = 200, imgWidth = 200;
    let gap = 5;

    let numberColumn = 4;
    let numberRow = 3;

    if (clientWidth >= 765 && clientWidth < 1300) {
        imgHeight = imgStartHeight * 0.7;
        imgWidth = imgStartWidth * 0.7;
    }

    if (clientWidth < 765) {
        imgHeight = imgStartHeight * 0.3;
        imgWidth = imgStartWidth * 0.3;
    }

    fieldCanvas.height = imgHeight * 3 + gap * 4;
    cardField.style.height = fieldCanvas.height + "px";

    fieldCanvas.width = imgWidth * 4 + gap * 3;
    cardField.style.width = fieldCanvas.width + "px";
    /*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    доделать!!! изменние процента в зависимотсти от высоты. если высота поля канваса больше половины поля, уменьшить маштаб*/

    //cardField.appendChild(fieldCanvas);
/*var img = new Image();
img.src = "./img/back.png";
img.onload = drawImg;

function drawImg() {

    let count = 0;

    for (let i = 0, k = 0; i < numberRow; i++ , k = k + imgHeight + gap) {
        for (let j = 0, m = 0; j < numberColumn; j++ , m = m + imgWidth + gap) {
            context.drawImage(img, m, k, imgWidth, imgHeight);
            smallCards[count]["X"] = m;
            smallCards[count]["Y"] = k;
            smallCards[count]["widht"] = imgWidth;
            smallCards[count]["height"] = imgHeight;
        }
    }
}

}*/



