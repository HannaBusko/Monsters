class StringStorageAjaxClient {

    storagePrefix = 'BUSKO_MONSTERS_';
    storageName = '';
    ajaxHandlerScript = 'https://fe.it-academy.by/AjaxStringStorage2.php';

    constructor(stringName) {
        this.storageName = this.storagePrefix + stringName;
        this.verifyStorageExist();
    }

    genericRequest(data, callback) {
        $.ajax({
            url: this.ajaxHandlerScript,
            type: 'POST',
            cache: false,
            dataType: 'json',
            data: data,
            success: (response) =>{ 
                console.log(`Запрос: ${JSON.stringify(data)}`);
                console.log(`Ответ: ${JSON.stringify(response)}`);
                if(callback){
                    callback(response);
                }
            },
            error: (jqXHR, statusStr, errorStr) => {
                alert(statusStr + ' ' + errorStr);
            }
        });
    }

    verifyStorageExist() {
        let readData = { f: "READ", n: this.storageName };
        return this.genericRequest(readData, response => {
            if (!response.result) {
                let emptyStatistic = new StatisticModel(0, 0);
                let insertData = { f: "INSERT", n: this.storageName, v: JSON.stringify(emptyStatistic) };
                this.genericRequest(insertData);
            }
        });
    }

    updateStatistic(isWin) {
        let storageLockPassword = Math.random();
        let lockGetData = { f: 'LOCKGET', n: this.storageName, p: storageLockPassword };
        this.genericRequest(lockGetData, response => {
            let stat = JSON.parse(response.result);

            let updatedStat = new StatisticModel(stat.winsCount, stat.loseCount);

            if (isWin) {
                updatedStat.winsCount++;
            }
            else {
                updatedStat.loseCount++;
            }

            let updateData = { f: 'UPDATE', n: this.storageName, p: storageLockPassword, v: JSON.stringify(updatedStat) };
            this.genericRequest(updateData);
        });
    }
}

class StatisticModel {
    winsCount;
    loseCount;
    lastGameTime;

    constructor(win, lose) {
        this.winsCount = win;
        this.loseCount = lose;
        this.lastGameTime = new Date();
    }

}
