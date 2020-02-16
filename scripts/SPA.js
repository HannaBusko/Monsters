window.onhashchange = SwitchToStateFromURLHash;

function SwitchToStateFromURLHash(param) {
    if (constantVariables.isGameOld) {
        constantVariables.isGameOld = false;
        return;
    }
    let URLHash = window.location.hash;

    let oldURL = param.oldURL;
    let oldHash = "";
    if (oldURL) {
        oldHash = oldURL.substring(oldURL.lastIndexOf("#"));
    }
    if (oldHash === "#Start") {

        if (constantVariables.finalMonsterCounter > 0 && constantVariables.finalMonsterCounter < constantVariables.maxTry) {
            if (!confirm("Вы уверены, что хотите покинуть игру?")) {
                window.history.go(-1);
                constantVariables.isGameOld = true;
                return;
            }
        }
        cleanCardField();
    }
    console.log('Закладка изменилась: ', URLHash);
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
            document.getElementById("sound").style.display = (state === 'Rules') ? 'none' : 'block';
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
        title = prefix + 'Доброй ночи, чудовище!';
        document.getElementsByTagName('title')[0].innerHTML = title;
    }
}

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

window.addEventListener("beforeunload", beforeUnload);

function beforeUnload(e) {
    e = e || window.event;
    if (constantVariables.finalMonsterCounter > 0 && constantVariables.finalMonsterCounter < constantVariables.maxTry) {
        let message = "В случае перезагрузки страницы данные игры будут потеряны";
        e.returnValue = message;
        return message;
    }
}