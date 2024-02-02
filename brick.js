// CHEATING DOES NOT MAKE THE GAME FUN. DONT CHEAT

function Brick(startingX, startingY) {
  this.x = startingX;
  this.y = startingY;
  this.width = 40;
  this.height = 10;
  this.color = brickColor;
  this.broken = false;

  this.getTop = function () {
    return this.y;
  };

  this.getBottom = function () {
    return this.y + this.height;
  };

  this.getLeft = function () {
    return this.x;
  };

  this.getRight = function () {
    return this.x + this.width;
  };

  this.display = function () {
    if (this.broken == false) {
      fill(this.color);
      rect(this.x, this.y, this.width, this.height, 20);
    }
  };
}
