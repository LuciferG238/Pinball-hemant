//import bumperBall from "C:\Users\Hemant\Documents\CODING\DevCom\Bumper.js";


let canvas = document.getElementById("gameScreen");

let ctx = canvas.getContext("2d");

//machine  setup
ctx.fillStyle = '#787b87';
ctx.fillRect( 240, 40, 330,520);


ctx.fillStyle = '#333439';
ctx.fillRect(270, 320 ,260,150);


//launcher
ctx.fillRect(537,210,13,330);


ctx.arc(400,200,150,0*Math.PI,2*Math.PI);
ctx.fillStyle = '#333439';
ctx.fill();


ctx.moveTo(270, 320);
ctx.lineTo(530, 320);
ctx.lineTo(400, 210);
ctx.strokeStyle = '#333439';
ctx.fillStyle = '#333439';
ctx.fill();
ctx.closePath();

ctx.fillStyle = '#333439';
ctx.moveTo(270, 470);
ctx.lineTo(530, 470);
ctx.lineTo(400, 550);
ctx.fill();
ctx.closePath();

// notch
ctx.fillStyle='#787b87';
ctx.fillRect(380, 540, 40,20);


//let bumper1 = new bumperBall(10,10);
//bumper1.draw(ctx);
ctx.fill

