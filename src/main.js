const apple = new food();
const player = new snake();
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
drawGrid();
render(draw);
}

function render(name){
  requestAnimationFrame(name)
}