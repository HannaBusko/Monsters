function checkCard() {

    constantVariables.openedBigCards.forEach(value => {
        if (value.id == constantVariables.smallOpenedCard.attributes["data-img"].value) {
            if (value.cardDeckNumber == 0) {
                deleteBigCard("firstCardDeck");

                /* let openedCard = { "cardDeckNumber": 0, "id": document.getElementById("parent").lastChild.alt};
                 openedBigCards.push(openedCard);*/
            }
        }
    });
}
