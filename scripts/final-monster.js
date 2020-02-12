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