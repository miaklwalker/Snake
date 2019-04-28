let apple = new food();
let player = new snake();
let numOfCells = 20;
let gameOver = false;
(() => setup())();

function setup() {
  makeCanvas(400, 400);
  controls.addControls();
  apple.refill();
  draw();
}

function draw() {
  if (!gameOver) {
    makeBackground("black");
    apple.show();
    player.bite();
    player.move();
    player.show();
    player.eat();
    player.loop();
    player.tailShow();
    drawGrid();
    render(draw, 10);
  } else {
    makeBackground("black");
    ctx.fillStyle = "red";
    ctx.font = "48px Impact";
    ctx.fillText("GAME OVER", canvas.width / 4, canvas.height / 2);
    ctx.fillText("Click To Try Again",canvas.width / 12,canvas.height / 2 + 50,);
  }
}

function render(name, frameRate) {
  setTimeout(() => {
    requestAnimationFrame(name);
  }, 1000 / frameRate);
}
