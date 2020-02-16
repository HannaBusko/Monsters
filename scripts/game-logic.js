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
            setTimeout(() => {
                if (constantVariables.openedBigCards.length == 0) {
                    gameOver();
                    document.getElementById("win").style.display = "block";
                }
            }, 1400);
        }, 200);
        /* */
    }
    else {
        constantVariables.finalMonsterCounter++;
        if (constantVariables.finalMonsterCounter == constantVariables.maxTry) {
            checkFinalCounterImg();
            document.getElementById("loss").style.display = "block";
            gameOver();
        }
        else {
            checkFinalMonster();
            checkFinalCounterImg();
        }

    }

}


function gameOver() {
    removeListenersSmall();
    constantVariables.finalMonsterCounter = 0;
}