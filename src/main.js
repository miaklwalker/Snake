const apple = new food();
const player = new snake();
let numOfCells = 20;

(()=>setup())();

function setup(){
  makeCanvas(400,400);
  controls.addControls();
  apple.refill();
  draw();
}

function draw(){
makeBackground("black");
apple.show();
player.show();
player.move();
player.eat()
player.loop();
player.tailShow();
drawGrid();
render(draw,10);
}

function render(name,frameRate){
setTimeout(()=>{

  requestAnimationFrame(name)
},1000/frameRate)
}