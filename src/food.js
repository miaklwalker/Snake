class food {
  constructor(){
    this.position = {x:0,y:0,};
  }
  refill(){
    let newX = Math.floor(Math.random()*19)*20;   
    let newY = Math.floor(Math.random()*19)*20;
    this.position.x = newX;
    this.position.y = newY;
    console.log(`This.Position.X = ${newX} , This.Position.Y = ${newY}`)
  }
  show(){
    ctx.fillStyle = "red";
    ctx.fillRect(this.position.x,this.position.y,canvas.width/20,canvas.height/20);
  }
}
