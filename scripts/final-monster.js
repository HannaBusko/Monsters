function checkFinalMonster() {
    let stage3 = 12;
    let stage2 = 8;
    let stage1 = 4;

    if (!(constantVariables.finalMonsterCounter % stage3)) {
        changeFinalMonsterStyle(document.getElementById("thirdFinalPart"));
    }
    else if (!(constantVariables.finalMonsterCounter % stage2)) {
        changeFinalMonsterStyle(document.getElementById("secondFinalPart"));
    }
    else if (!(constantVariables.finalMonsterCounter % stage1)) {
        changeFinalMonsterStyle(document.getElementById("firstFinalPart"));
    }
}

function changeFinalMonsterStyle(partOfMonster) {
    partOfMonster.classList.add("finalMonsterAnimation");
    partOfMonster.style.display = "block";
}

function checkFinalCounter() {
    let number3 = new Set([3, 7, 11, 15]);
    let positionArray = loadSprintPosition();
    let sprite = document.getElementById("counterImg");
    if (constantVariables.finalMonsterCounter == 1)
        sprite.style.display = "block";
    if (!(constantVariables.finalMonsterCounter % positionArray[0].count)) {
        sprite.style.backgroundPositionX = positionArray[0].position;
    }
    else if (!(constantVariables.finalMonsterCounter % positionArray[2].count)) {
        sprite.style.backgroundPositionX = positionArray[2].position;
    }
    else if (number3.has(constantVariables.finalMonsterCounter)) {
        sprite.style.backgroundPositionX = positionArray[3].position;
    }
    else {
        sprite.style.backgroundPositionX = positionArray[1].position;
    }

}