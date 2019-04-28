let canvas ;
let ctx

function makeCanvas (width,height){
canvas = document.createElement('canvas');
ctx = canvas.getContext('2d');
canvas.width = width;
canvas.height = height;
document.body.appendChild(canvas);
}

function makeBackground(color){
  ctx.fillStyle = color;
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillRect(0,0,canvas.width,canvas.height);
}

function drawGrid(){
  ctx.strokeStyle = "white";
  for (let i = 0 ;  i <= canvas.width ; i+=canvas.width/numOfCells){
    ctx.beginPath();
    ctx.lineTo(i,0);
    ctx.lineTo(i,canvas.height);
    ctx.stroke();
  }
  for (let j = 0 ; j <= canvas.height ; j+=canvas.height/numOfCells){
    ctx.beginPath();
    ctx.moveTo(0,j);
    ctx.lineTo(canvas.width,j);
    ctx.stroke();
    
  }
  ctx.beginPath();
  
}