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

    let fieldCanvas = document.createElement("canvas");
    fieldCanvas.setAttribute("id", "cvs");
    let clientWidth = document.documentElement.clientWidth;
    let context = fieldCanvas.getContext("2d");

    //начальные размеры изображения и отступов
    let imgStartHight = 150, imgHight = 150;
    let imgStartWidth = 200, imgWidth = 200;
    let gap = 5;

    let numberColumn = 4;
    let numberRow = 3;

    if (clientWidth >= 765 && clientWidth < 1300) {
        imgHight = imgStartHight * 0.7;
        imgWidth = imgStartWidth * 0.7;
    }

    if(clientWidth<765){
        imgHight = imgStartHight * 0.3;
        imgWidth = imgStartWidth * 0.3;
    }

    fieldCanvas.height = imgHight * 3 + gap * 4;
    cardField.style.height = fieldCanvas.height + "px";

    fieldCanvas.width = imgWidth * 4 + gap * 3;
    cardField.style.width = fieldCanvas.width + "px";
    /*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    доделать!!! изменние процента в зависимотсти от высоты. если высота поля канваса больше половины поля, уменьшить маштаб*/

    cardField.appendChild(fieldCanvas);
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

    fieldCanvas.addEventListener("click","openCard")

    function openCard(){

    }

}