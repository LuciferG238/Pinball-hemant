export default class bumperBall{
    constructor(placeX,placeY){
        this.position = {
            x : placeX,
            y : placeY,
        };
    }


draw(ctx) {
    ctx.fillStyle= '#ece513';
    ctx.arc(this.position.x,this.position.y,10,0*Math.PI,2*Math.PI);
    ctx.stroke();
    ctx.fill();
  }
}