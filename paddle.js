// CHEATING DOES NOT MAKE THE GAME FUN. DONT CHEAT
function Paddle() {
  this.x = 100;
  this.y = 370;
  this.width = 50;
  this.height = 10;
  this.color = pColor;
  this.corner = 20;
  this.getTop = function () {
    return this.y;
  };

  this.getBottom = function () {
    return this.y + this.height;
  };

  this.getLeft = function () {
    if(this.x < 0) {
      this.x = 0;
    }
      if(this.x > 350) {
      this.x = 350;
    }
    return this.x;
  };

  this.getRight = function () {
    return this.x + this.width;
  };


  this.display = function () {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height, this.corner)
  };


}