var gameplay = class Gameplay {

    isPlaying() {
        return false;
    };

    stopGame(){
        return true;
    }

}


function toConstractCanvas(){
    var fieldCanvas = document.getElementById("cvs");
    var playfield = document.getElementById("memoryBox");
    let widthForCount = playfield.offsetWidth;
    let heightForCount = playfield.offsetHeight;
   
    if(widthForCount>800){
        
    }
    
}
//function constructImageBox(){
// }
/* // Свойства игры, счета, игрового времени и частоты обновления
 this.playing = false;
 this.paused = false;

 // Метод запуска игры по клику на кнопку СТАРТ в UI
 this.startGame = function () {
     if (playing == false) {
         playing = true;

     

         this.stopGame = function () {
             if (playing) {
                 playing = false;
             }

         };
     }*/