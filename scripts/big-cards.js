function sortBigCards(bigCards) {
    let sortArr = [];
    let start = 0;
    let bigCardNumber = 20;
    while (start < bigCardNumber) {
        sortArr.push(start++);
    }
    sortArr.sort(compareRandom);

    for (let i = 0; i < sortArr.length; i++) {
        bigCards[i]["numTemp"] = sortArr[i];
    }
    bigCards.sort((a, b) => {
        return a.numTemp - b.numTemp;
    });
    addBigCards(bigCards);

}

function addBigCards(bigCards) {

    let numCard = 8;

    let dacks = [
        document.getElementById("firstCardDeck"),
        document.getElementById("secondCardDeck"),
        document.getElementById("thirdCardDeck")
    ]
    let openedCard = { "cardDeckNumber": 0, "id": bigCards[0].id, "toDelete": false };
    constantVariables.openedBigCards.push(openedCard);
    openedCard = { "cardDeckNumber": 1, "id": bigCards[8].id, "toDelete": false };
    constantVariables.openedBigCards.push(openedCard);
    openedCard = { "cardDeckNumber": 2, "id": bigCards[16].id, "toDelete": false };
    constantVariables.openedBigCards.push(openedCard);
    bigCards.forEach((card, index) => {
        drawBigCards(card, index, dacks);
    });

    dacks.forEach(addBigCardBack);
    dacks.forEach(deleteBigCardBack);
    // deleteBigCardBack(dacks[0]);

}


function drawBigCards(value, index, dacks) {

    let newImg = document.createElement("img");
    newImg.setAttribute("src", value.src);
    newImg.setAttribute("alt", value.id);
    newImg.setAttribute("data-img", value.id);

    let dackElem = dacks[Math.floor(index / 8)];
    newImg.setAttribute("class", "frontFaceBigCard");
    dackElem.prepend(newImg);
}


function deleteBigCard(dack) {
    let brokenGlass = dack.firstElementChild;
    brokenGlass.style.zIndex = 100;
    brokenGlass.style.opacity = 0;

    let removingElem = dack.lastElementChild;
    removingElem.style.opacity = 0.5;
    removingElem.style.opacity = 0;

    setTimeout(() => {
        checkDoubleCall();
        dack.removeChild(removingElem);
        brokenGlass.style.zIndex = -1;
        brokenGlass.style.opacity = 1;
        constantVariables.openedBigCards.push({ "cardDeckNumber": 0, "id": dack.lastElementChild.alt, "toDelete": false });
    }, 1500);

}

function addBigCardBack(value) {
    let newImg = document.createElement("img");
    newImg.setAttribute("src", "img/glass.png");
    newImg.setAttribute("alt", "broken glass");
    newImg.setAttribute("class", "glass");
    value.prepend(newImg)
}

function deleteBigCardBack(dack) {
    let firstCard = dack.lastElementChild;
    firstCard.style.boxShadow = "none";
    firstCard.style.animation = "Anim 1.5s ease-in";
    setTimeout(() => firstCard.parentNode.removeChild(firstCard), 1490);
}

