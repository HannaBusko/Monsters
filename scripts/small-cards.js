function sortSmallCards(smallCards) {
    let sortArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    sortArr.sort(compareRandom);

    for (let i = 0; i < sortArr.length; i++) {
        smallCards[i]["numTemp"] = sortArr[i];
    }

    addSmallCards(smallCards);
    addListenersSmall();
}

function addSmallCards(smallCards) {
    let allSmallCards = document.getElementsByClassName("smallCards");
    smallCards.forEach(value => {
        let newImg = document.createElement("img");
        newImg.setAttribute("src", value.src);
        newImg.setAttribute("class", "frontFace");
        newImg.setAttribute("alt", "frontFace");
        allSmallCards[value.numTemp].prepend(newImg);
        allSmallCards[value.numTemp].setAttribute("data-img", value.id);
    });
}

function addListenersSmall() {
    let allSmallCards = document.querySelectorAll(".smallCards");
    for (let i = 0; i < allSmallCards.length; i++) {
        allSmallCards[i].addEventListener('click', openSmallCard);
    }
}

function removeListenersSmall() {
    let allSmallCards = document.querySelectorAll(".smallCards");
    for (let i = 0; i < allSmallCards.length; i++) {
        allSmallCards[i].removeEventListener('click', openSmallCard);
    }
}

function openSmallCard(EO) {
    EO = EO || window.event;

    if (constantVariables.smallOpenedCard == this) {
        checkDoubleCall();
    }
    else {
        if (!constantVariables.hasOpenedCard) {
            constantVariables.hasOpenedCard = true;
            constantVariables.smallOpenedCard = this;
            this.classList.add("flipCardAnimation");
        }
        else {
            constantVariables.hasOpenedCard = true;
            constantVariables.smallOpenedCard.classList.remove("flipCardAnimation");
            this.classList.add("flipCardAnimation");
            constantVariables.smallOpenedCard = this;
        }
        checkCard();
    }
}

function checkDoubleCall() {
    constantVariables.hasOpenedCard = false;
    constantVariables.smallOpenedCard.classList.remove("flipCardAnimation");
    constantVariables.smallOpenedCard = "";
}