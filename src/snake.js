class snake {
  constructor() {
    this.tailLength = 0;
    this.velocity = new Vector(0, 1);
    this.headPosition = new Vector(0, 0);
    this.tail = [];
    this.previous;
  }

  show() {
    ctx.fillStyle = "blue";
    ctx.fillRect(
      this.headPosition.x * numOfCells,
      this.headPosition.y * numOfCells,
      canvas.width / numOfCells,
      canvas.height / numOfCells,
    );
  }

  move() {
    this.previous = new Vector(this.headPosition.x, this.headPosition.y);
    console.log(this.previous);
    this.tail.unshift(this.previous);
    if (controls.KeyW || controls.ArrowUp) {
      this.velocity.x = 0;
      this.velocity.y = -1;
    } else if (controls.KeyA || controls.ArrowLeft) {
      this.velocity.x = -1;
      this.velocity.y = 0;
    } else if (controls.KeyS || controls.ArrowDown) {
      this.velocity.x = 0;
      this.velocity.y = 1;
    } else if (controls.KeyD || controls.ArrowRight) {
      this.velocity.x = 1;
      this.velocity.y = 0;
    }
     this.tail.pop();
    this.headPosition.add(this.velocity);
  }
  eat() {
    if (
      this.headPosition.x === apple.position.x &&
      this.headPosition.y === apple.position.y
    ) {
      this.tail.unshift(this.previous);
      this.tailLength++;
      apple.refill();
    }
  }
  loop() {
    if (this.headPosition.x * numOfCells > canvas.width) {
      //this.headPosition.x = 0;
      gameOver=true;
    }
    if (this.headPosition.x < 0) {
      //this.headPosition.x = canvas.width / 20;
      gameOver=true;
    }
    if (this.headPosition.y * numOfCells > canvas.height) {
      //this.headPosition.y = 0;
      gameOver=true;
    }
    if (this.headPosition.y < 0) {
      //this.headPosition.y = canvas.height / 20;
      gameOver=true;
    }
  }
  tailShow() {
    for (let i = 0; i < this.tail.length; i++) {
      if (i - 1 < this.tailLength) {
        ctx.fillRect(
          this.tail[i].x * numOfCells,
          this.tail[i].y * numOfCells,
          numOfCells,
          numOfCells,
        );
      } else {
        this.tail.splice(i, 1);
      }
    }
  }
  bite() {
    for (let i = 2; i < this.tail.length - 2; i++) {
      if (
        this.headPosition.x === this.tail[i].x &&
        this.headPosition.y === this.tail[i].y
      ) {
        gameOver = true;
        console.log("gameover");
      }
    }
  }
}
