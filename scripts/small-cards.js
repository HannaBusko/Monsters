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
    let allSmallCards = document.getElementsByClassName("SmallCards");
    smallCards.forEach(value => {
        let newImg = document.createElement("img");
        newImg.setAttribute("src", value.src);
        newImg.setAttribute("class", "FrontFace");
        newImg.setAttribute("alt", "FrontFace");
        allSmallCards[value.numTemp].prepend(newImg);
        allSmallCards[value.numTemp].setAttribute("data-img", value.id);
    });
}

function addListenersSmall() {

    let allSmallCards = document.querySelectorAll(".SmallCards");
    for (let i = 0; i < allSmallCards.length; i++) {
        allSmallCards[i].addEventListener('touchend', smallCardOnTouched);
        allSmallCards[i].addEventListener('click', openSmallCard);
    }
}

function removeListenersSmall() {
    let allSmallCards = document.querySelectorAll(".SmallCards");
    for (let i = 0; i < allSmallCards.length; i++) {
        allSmallCards[i].removeEventListener('touchend', smallCardOnTouched);
        allSmallCards[i].removeEventListener('click', openSmallCard);
    }
}

function smallCardOnTouched(e) {
    e.preventDefault();
    e.target.click();
}

function openSmallCard(EO) {
    EO = EO || window.event;

    if (constantVariables.smallOpenedCard == this) {
        checkDoubleCall();
    }
    else {
        flipSmallCard(this);
        checkCard();
    }
}

function checkDoubleCall() {
    constantVariables.hasOpenedCard = false;
    constantVariables.smallOpenedCard.classList.remove("FlipCardAnimation");
    constantVariables.smallOpenedCard = "";
}

function flipSmallCard(card) {
    if (!constantVariables.hasOpenedCard) {
        constantVariables.hasOpenedCard = true;
        constantVariables.smallOpenedCard = card;
        card.classList.add("FlipCardAnimation");
    }
    else {
        constantVariables.hasOpenedCard = true;
        constantVariables.smallOpenedCard.classList.remove("FlipCardAnimation");
        card.classList.add("FlipCardAnimation");
        constantVariables.smallOpenedCard = card;
    }
}

function openForHelp() {
    let index = Math.floor(Math.random() * Math.floor(12));
    flipSmallCard(document.querySelectorAll(".SmallCards")[index]);
}
