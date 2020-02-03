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

}

function drawCanvas() {

    let cardField = document.getElementById("cardField");

    let context = fieldCanvas.getContext("2d");
    context.globalCompositeOperation = 'destination-out';
    context.fillStyle = "rgba(0,0,0,1)";
    context.fillRect(0, 0, fieldCanvas.width, fieldCanvas.height);
    context.globalCompositeOperation = 'source-over';

    let clientWidth = document.documentElement.clientWidth;

    //начальные размеры изображения и отступов
    let imgStartHeight= 150, imgHeight = 150;
    let imgStartWidth = 200, imgWidth = 200;
    let gap = 5;

    let numberColumn = 4;
    let numberRow = 3;

    if (clientWidth >= 765 && clientWidth < 1300) {
        imgHeight = imgStartHeight * 0.7;
        imgWidth = imgStartWidth * 0.7;
    }

    if (clientWidth < 765) {
        imgHeight = imgStartHeight * 0.3;
        imgWidth = imgStartWidth * 0.3;
    }

    fieldCanvas.height = imgHeight * 3 + gap * 4;
    cardField.style.height = fieldCanvas.height + "px";

    fieldCanvas.width = imgWidth * 4 + gap * 3;
    cardField.style.width = fieldCanvas.width + "px";
    /*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    доделать!!! изменние процента в зависимотсти от высоты. если высота поля канваса больше половины поля, уменьшить маштаб*/

    //cardField.appendChild(fieldCanvas);
    var img = new Image();
    img.src = "./img/back.png";
    img.onload = drawImg;

    function drawImg() {

        let count = 0;

        for (let i = 0, k = 0; i < numberRow; i++ , k = k + imgHeight + gap) {
            for (let j = 0, m = 0; j < numberColumn; j++ , m = m + imgWidth + gap) {
                context.drawImage(img, m, k, imgWidth, imgHeight);
                smallCards[count]["X"] = m;
                smallCards[count]["Y"] = k;
                smallCards[count]["widht"] = imgWidth;
                smallCards[count]["height"] = imgHeight;
            }
        }
    }

}



