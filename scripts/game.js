var gameplay = class Gameplay {

    isPlaying() {
        return false;
    };

    stopGame() {
        return true;
    }

}


function toConstractCanvas() {
    drawCanvas();

    /* var context = fieldCanvas.getContext("2d");
 
     let cellSizeWidth = 200;
     let cellSizeHeight = 150;
 
     var img = new Image();
     img.src = "./img/back.png";
     img.onload = drawImg;
 
     function drawImg() {
         context.drawImage(img, 10, 10,200,150);
     }*/
}

function drawCanvas() {

    let cardField = document.getElementById("cardField");
    let fieldCanvas = document.getElementById("cvs");

    let clientWidth = document.documentElement.clientWidth;

    let context = fieldCanvas.getContext("2d");
    context.clearRect(0, 0, fieldCanvas.width, fieldCanvas.height);
    let imgHight = 150;
    let imgWidth = 200;
    let gap = 5;

    var numberColumn;
    var numberRow;

    if (clientWidth >= 1024) {
        numberColumn = 4;
        numberRow = 3;
        cardField.style.width = "820px";
        cardField.style.height = "480px";
        fieldCanvas.width = 820;
        fieldCanvas.height = 480;
    }
    else {
        cardField.style.width = "100%";
        fieldCanvas.width = cardField.offsetWidth;
        if (clientWidth >= 765) {
            numberColumn = 3;
            numberRow = 4;
            cardField.style.height = 150 * 4 + gap * 3 + "px";
        }
        else {
            numberColumn = 2;
            numberRow = 6;
            imgWidth = cardField.offsetWidth / 2;
            imgHight = Math.floor(imgWidth * 3 / 4);
            gap = 0;
        }
        // cardField.style.height = "480px";

        //fieldCanvas.height = 480;
    }
    var img = new Image();
    img.src = "./img/back.png";
    img.onload = drawImg;

    function drawImg() {
        /*context.drawImage(img, 0, 0, imgWidth, imgHight);
        context.drawImage(img, 210, 0, imgWidth, imgHight);
        context.drawImage(img, 420, 0, imgWidth, imgHight);
        context.drawImage(img, 630, 0, imgWidth, imgHight);
 
        context.drawImage(img, 0, 160, imgWidth, imgHight);
        context.drawImage(img, 210, 160, imgWidth, imgHight);
        context.drawImage(img, 420, 160, imgWidth, imgHight);
        context.drawImage(img, 630, 160, imgWidth, imgHight);
 
        context.drawImage(img, 0, 320, imgWidth, imgHight);
        context.drawImage(img, 210, 320, imgWidth, imgHight);
        context.drawImage(img, 420, 320, imgWidth, imgHight);
        context.drawImage(img, 630, 320, imgWidth, imgHight);*/

        for (let i = 0, k = 0; i < numberRow; i++ , k = k + imgHight + gap) {
            for (let j = 0, m = 0; j < numberColumn; j++ , m = m + imgWidth + gap)
                context.drawImage(img, m, k, imgWidth, imgHight);
        }

    }

}