

class snake{
  constructor(){
    this.body = [];
    this.headPosition = {x:2,y:0}
    this.tailPosition= [];
  }
  show(){
    ctx.fillStyle = "blue";
    ctx.fillRect(this.headPosition.x*20,this.headPosition.y*20,canvas.width/20,canvas.height/20);
    ctx.fillRect(this.tailPosition.x*20,this.tailPosition.y*20,canvas.width/20,canvas.height/20);
  }
  move(){
    console.log(controls.KeyW);
    if(controls.KeyW || controls.ArrowUp){player.headPosition.y-1}
    if(controls.KeyA || controls.ArrowLeft){player.headPosition.y+1}
    if(controls.KeyS || controls.ArrowDown){player.headPosition.x-1}
    if(controls.KeyD || controls.ArrowRight){player.headPosition.x+1}
  }
}
