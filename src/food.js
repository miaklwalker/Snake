class food {
  constructor() {
    this.position = new Vector();
  }
  refill() {
    let newX = Math.floor(Math.random() * 19);
    let newY = Math.floor(Math.random() * 19);
    if (player.tail.forEach(tail => tail.same(new Vector(newX, newY)))) {
      newX = Math.floor(Math.random()*Math.floor(Math.random()/Math.floor(Math.random() * 19)));
      newY = Math.floor(Math.random()*Math.floor(Math.random()/Math.floor(Math.random() * 19)));
      this.position.x = newX;
      this.position.y = newY;
    } else {
      this.position.x = newX;
      this.position.y = newY;
    }
  }
  show() {
    ctx.fillStyle = "red";
    ctx.fillRect(
      this.position.x * numOfCells,
      this.position.y * numOfCells,
      canvas.width / numOfCells,
      canvas.height / numOfCells,
    );
  }
}
