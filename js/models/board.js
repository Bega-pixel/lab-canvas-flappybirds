class Board{
    constructor(ctx){
        this.ctx = ctx ;
        this.x = 0 ;
        this.y = 0 ;
        this.img = new Image() ;
        this.img.src = '../images/bg.png' ;
        this.img.isReady = false ;
        if (this.img.onload){
            this.img.isReady = true;
            this.img.width = this.ctx.canvas.width ;
            this.img.height = this.ctx.canvas.height ;
            this.width = this.ctx.canvas.width ;
            this.height = this.ctx.canvas.height ;
        }
        draw (){
            

        }

        
    }
}