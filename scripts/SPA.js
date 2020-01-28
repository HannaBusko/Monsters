// отслеживаем изменение закладки в УРЛе
// оно происходит при любом виде навигации
// в т.ч. при нажатии кнопок браузера ВПЕРЁД/НАЗАД
window.onhashchange = SwitchToStateFromURLHash;

function SwitchToStateFromURLHash(param) {
    let URLHash = window.location.hash;

    console.log('Закладка изменилась: ', URLHash);

    //Заменяет каждую управляющую последовательность в закодированном компоненте URI соответствующим ей символом.

    let state = decodeURIComponent(URLHash.substr(1));

    //?????????????????????
    // let confirmFlag = true;

    switch (state) {
        case 'Menu':
            // if (gameplay.isPlaying) {
            //    if (!(confirm('Внимание! Текущий прогресс игры будет потерян'))) {
            // confirmFlag = false;
            // }
            // }

            //if (confirmFlag) {
            changeRepresentation(state);
            // gameplay.stopGame;
            //} else {
            // history.replaceState('Start');
            // }
            break;

        case 'Start':
            // if (param === true) {
            //  window.location.hash = 'Menu';
            // } else {
            changeRepresentation(state);
            // gameplay.startGame;
            // }
            break;

        case 'Rules':
            changeRepresentation(state);
            //gameplay.showRecords();
            //gameplay.showRules();
            break;

        default:
            window.location.hash = '#Menu';
            break;
    }

    function changeRepresentation(state) {
        var title;
        let prefix = state + ' | ';
        var stateElements = [
            { state: 'Menu', 'id': 'menu' },
            { state: 'Start', 'id': 'start' },
            { state: 'Rules', 'id': 'rules' }
        ];

        stateElements.forEach((entry) => {
            let showElement = entry.state === state;
            document.getElementById(entry.id).style.display = showElement ? 'block' : 'none';
            document.getElementById("menu_on").style.display = (state === 'Menu') ? 'none' : 'block';
        });

        if (state === 'Start') {
            prefix = 'Game | ';
            toConstractCanvas();
        }
        title = prefix + 'Уходи, чудовище!';
        document.getElementsByTagName('title')[0].innerHTML = title;
    }
}

/*window.onbeforeunload = beforeUnload;
var reloadMsg = 'В случае перезагрузки страницы прогресс игры будет утрачен';
function beforeUnload(e) {
    e = e || window.event;
    if (gameplay.isPlaying()) {
        e.returnValue = reloadMsg;
        return reloadMsg;
    }
}*/

SwitchToStateFromURLHash(true);

// устанавливает в закладке УРЛа новое состояние приложения
// и затем устанавливает+отображает это состояние
function switchToState(newState) {

    var stateStr = newState.pagename;
    location.hash = stateStr;
}

function switchToMenuPage() {
    switchToState({ pagename: 'Menu' });
}

function switchToGamePage(photoId) {
    switchToState({ pagename: 'Start' });
}

function switchToRulesPage() {
    switchToState({ pagename: 'Rules' });
}

