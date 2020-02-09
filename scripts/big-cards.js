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
    //первая колода = 8 карт, 2 колода и 3 колода по 6 карт, итого распределено 20 карт
    let numFirst = 8;
    let numSecond = 14;

    let dacks = [
        document.getElementById("firstCardDeck"),
        document.getElementById("secondCardDeck"),
        document.getElementById("thirdCardDeck")
    ]

    let openedCard = { "cardDeckNumber": 0, "id": bigCards[0].id };
    constantVariables.openedBigCards.push(openedCard);
    bigCards.forEach((value, key) => {
        let newImg = document.createElement("img");
        newImg.setAttribute("src", value.src);
        newImg.setAttribute("alt", value.id);
        newImg.setAttribute("data-img", value.id);
        if (key < numFirst) {
            newImg.setAttribute("class", "frontFaceFirst");
            dacks[0].prepend(newImg);
        }
        else if (key >= numFirst && key < numSecond) {
            newImg.setAttribute("class", "frontFaceSecond");
            dacks[1].prepend(newImg);
        }
        else {
            newImg.setAttribute("class", "frontFaceThird");
            dacks[2].prepend(newImg);
        }
    });

    dacks.forEach(addBigCardBack);
    deleteBigCardBack(dacks[0]);
}

function addBigCardBack(value) {
    let newImg = document.createElement("img");
    newImg.setAttribute("src", "img/glass.png");
    newImg.setAttribute("alt", "broken glass");
    newImg.setAttribute("class", "glass");
    value.prepend(newImg)
}

function deleteBigCard(parentName) {
    let parentElem = document.getElementById(parentName);
    let brokenGlass = parentElem.firstElementChild;

    brokenGlass.style.zIndex = 100;
    brokenGlass.style.opacity = 0;

    let removingElem = parentElem.lastElementChild;
    removingElem.style.opacity = 0.5;
    removingElem.style.opacity = 0;

    setTimeout(() => {
        parentElem.removeChild(removingElem);
        brokenGlass.style.zIndex = -1;
        brokenGlass.style.opacity = 1;
    }, 3010);

}

function deleteBigCardBack(dack) {
    let firstCard = dack.lastElementChild;
    firstCard.style.boxShadow = "none";
    firstCard.style.animation = "Anim 1.5s linear";
    setTimeout(() => firstCard.parentNode.removeChild(firstCard), 1490);
}

