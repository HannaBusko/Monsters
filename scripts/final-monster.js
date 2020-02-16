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
    partOfMonster.classList.add("FinalMonsterAnimation");
    partOfMonster.style.display = "block";
}

function checkFinalCounterImg() {

    let sprite = document.getElementById("counterImg");
    let countNum = document.getElementById("counterNum");
    let positionArray = loadSprintPosition();
    if (constantVariables.finalMonsterCounter == constantVariables.maxTry) {
        sprite.style.backgroundPositionX = positionArray[4].position;
        return;
    }

    let number3 = new Set([3, 7, 11, 15]);
    if (constantVariables.finalMonsterCounter == 1) {
        //sprite.style.display = "block";
        countNum.innerText = positionArray[0].countNum;
    }
    if (!(constantVariables.finalMonsterCounter % positionArray[0].count)) {
        sprite.style.backgroundPositionX = positionArray[0].position;
        countNum.innerText = positionArray[0].countNum;
    }
    else if (!(constantVariables.finalMonsterCounter % positionArray[2].count)) {
        sprite.style.backgroundPositionX = positionArray[2].position;
        countNum.innerText = positionArray[2].countNum;
    }
    else if (number3.has(constantVariables.finalMonsterCounter)) {
        sprite.style.backgroundPositionX = positionArray[3].position;
        countNum.innerText = positionArray[3].countNum;
    }
    else {
        sprite.style.backgroundPositionX = positionArray[1].position;
        countNum.innerText = positionArray[1].countNum;
    }

}