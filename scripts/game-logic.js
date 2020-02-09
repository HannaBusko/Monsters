function checkCard() {

    if (constantVariables.openedBigCards.length == 0) {
        promt("ура")
        return;
    }

    let needToDelete = 0;
    constantVariables.openedBigCards.forEach((value, key) => {
        if (value.id == constantVariables.smallOpenedCard.attributes["data-img"].value) {
            if (value.cardDeckNumber == 0) {
                value.toDelete = true;
                needToDelete++;
                deleteBigCard(document.getElementById("firstCardDeck"));
            }
        }
    });

    if (needToDelete) {
        setTimeout(() => {
            while (needToDelete > 0) {
                constantVariables.openedBigCards.splice(constantVariables.openedBigCards.findIndex(elem => elem.toDelete, true));
                needToDelete--;
            }
        }, 200);
    }
}
    /*if (deletingIndex.length > 0) {
 let openedCard = { "cardDeckNumber": 0, "id": document.getElementById("firstCardDeck").lastElementChild.alt };
 constantVariables.openedBigCards.push(openedCard);
}*/
