/*let finalMonsterCounter = 0;
let hasOpenedCard = false;
var openedBigCards = [];
var smallOpenedCard;*/

var constantVariables = {
    "finalMonsterCounter": 0,
    "openedBigCards": []
}
var gameplay = class Gameplay {
    isPlaying() {
        return false;
    };
    stopGame() {
        return true;
    }
}

function openCard(EO) {
    EO = EO || window.event;

    if (constantVariables.smallOpenedCard == this) {
        constantVariables.hasOpenedCard = false;
        constantVariables.smallOpenedCard.classList.remove("smallCardAnimation");
        constantVariables.smallOpenedCard = "";
        return;
    }

    if (!constantVariables.hasOpenedCard) {
        constantVariables.hasOpenedCard = true;
        constantVariables.smallOpenedCard = this;
        this.classList.add("smallCardAnimation");
    }
    else {
        constantVariables.hasOpenedCard = true;
        constantVariables.smallOpenedCard.classList.remove("smallCardAnimation");
        this.classList.add("smallCardAnimation");
        constantVariables.smallOpenedCard = this;
    }
    checkCard();

}

function checkCard() {

    constantVariables.openedBigCards.forEach(value => {
        if (value.id == constantVariables.smallOpenedCard.attributes["data-img"].value) {
            if (value.cardDeckNumber == 0) {
                deleteChild();

                /* let openedCard = { "cardDeckNumber": 0, "id": document.getElementById("parent").lastChild.alt};
                 openedBigCards.push(openedCard);*/
            }
        }
    });
}
function deleteChild(parentName) {
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
    }, 3701);

}
function cleanCardField() {
    let allSmallCards = document.getElementsByClassName("frontFace");
    while (allSmallCards.length != 0) {
        allSmallCards[0].parentNode.removeChild(allSmallCards[0]);
    }
    if (constantVariables.smallOpenedCard) {
        constantVariables.smallOpenedCard.classList.remove("smallCardAnimation");
    }
}



