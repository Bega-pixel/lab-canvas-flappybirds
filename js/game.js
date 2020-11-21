class Game{

    constructor(canvasId){
        this.canvas = document.getElementById(canvasId);
        this.canvas.width = 900;
        this.canvas.height = 504;
        this.ctx = this.canvas.getContext('2d');
    }

}