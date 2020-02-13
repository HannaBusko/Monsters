// отслеживаем изменение закладки в УРЛе
// оно происходит при любом виде навигации
// в т.ч. при нажатии кнопок браузера ВПЕРЁД/НАЗАД
window.onhashchange = SwitchToStateFromURLHash;

function SwitchToStateFromURLHash(param) {
    let URLHash = window.location.hash;

    let oldURL = param.oldURL;
    let oldHash = "";
    if (oldURL) {
        oldHash = oldURL.substring(oldURL.lastIndexOf("#"));
    }
    console.log('Закладка изменилась: ', URLHash);

    if (oldHash === "#Start") {
        cleanCardField();
    }
 
    let state = decodeURIComponent(URLHash.substr(1));

    switch (state) {
        case 'Menu':
            changeRepresentation(state);
            break;

        case 'Start':
            changeRepresentation(state);
            initGame();
            break;

        case 'Rules':
            changeRepresentation(state);
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

        //изменение логики работы при изменении страницы
        stateElements.forEach((entry) => {

            let showElement = entry.state === state;

            document.getElementById(entry.id).style.display = showElement ? 'block' : 'none';
            document.getElementById("menu_on").style.display = (state === 'Menu') ? 'none' : 'block';
            document.getElementById("counterPart").style.display = (state != 'Start') ? 'none' : 'block';
            

            if (state != 'Start') {
                returnFirstPosition();
            }

            if (document.getElementById("sound").value == "on") {
                if (oldHash === "#Start") {
                    document.getElementById("audioplayerStart").stop();
                    document.getElementById("audioplayerMenu").play();
                }
                if (state === "Start") {
                    document.getElementById("audioplayerStart").play();
                    document.getElementById("audioplayerMenu").stop();
                }
            }
        });

        if (state === "Start") {
            prefix = "Game | ";
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

