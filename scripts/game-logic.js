function checkCard() {

    /*if (constantVariables.openedBigCards.length == 0) {
        promt("ура")
        return;
    }*/

    let needToDelete = 0;
    constantVariables.openedBigCards.forEach((value, key) => {
        if (value.id == constantVariables.smallOpenedCard.attributes["data-img"].value) {
            value.toDelete = true;
            needToDelete++;
            deleteBigCard(value.cardDeck);
        }

    });

    if (needToDelete) {
        setTimeout(() => {
            while (needToDelete > 0) {
                constantVariables.openedBigCards.splice(constantVariables.openedBigCards.findIndex(elem => elem.toDelete, true), 1);
                needToDelete--;
            }
        }, 200);
    }
    else {
        constantVariables.finalMonsterCounter++;
        checkFinalMonster();
        checkFinalCounter();
    }

}
