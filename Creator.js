export default  class creator{
    constructor(placeX,placeY){
        this.position = {
            x : placeX,
            y : placeY,
        };
    }

draw(ctx){
    ctx.fillStyle='#787b87';
    ctx.fillRect(this.position.x,this.position.y, 150,150);
    }
} 