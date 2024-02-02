function Ball() {
  this.x = 200;
  this.y = 300;
  this.speedX = speedx;
  this.speedY = speedy;
  this.diameter = 10;
  this.color = ballColor;
  this.getTop = function () {
    return this.y - this.diameter / 2;
  };

  this.getBottom = function () {
    return this.y + this.diameter / 2;
  };

  this.getLeft = function () {
    return this.x - this.diameter / 2;
  };

  this.getRight = function () {
    return this.x + this.diameter / 2;
  };


  this.display = function () {
    fill(this.color);
    ellipse(this.x, this.y, this.diameter);
  };

  this.move = function () {
    this.x += this.speedX;
    this.y += this.speedY;

    // Check bottom wall
    if (this.getBottom() >= height) {
      this.speedY *= -1;
    }

    // Check top 
    if (this.getTop() <= 0) {
      this.speedY *= -1;
    }

    // Check left wall
    if (this.getLeft() >= 0) {
      this.speedX *= -1;
    }

    // Check left wall
    if (this.getRight() <= width) {
      this.speedX *= -1;
    }
  

  };
  
  // Top of ball hits bottom of brick
  this.checkTopCollision = function (brick) {
    return (this.getTop() >= brick.getTop() && this.getTop() <= brick.getBottom() );
  };
  
  // Bottom of ball hits top of brick
  this.checkBottomCollision = function (brick) {
    return (this.getBottom() >= brick.getBottom() && this.getBottom() <= brick.getTop());
  };
  // Left side of ball hits right side of brick
  this.checkLeftCollision = function (brick) {
    return (this.getLeft() >= brick.getLeft() && this.getLeft() <= brick.getRight());
  };
  // right side of ball hits left side of brick
  this.checkRightCollision = function (brick) {
    return (this.getRight() >= brick.getRight() && this.getRight() <= brick.getLeft());
  };
  this.checkCollisions = function () {
    if (
      this.getLeft() >= paddle.getLeft() &&
      this.getLeft() <= paddle.getRight() &&
      this.getBottom() >= paddle.getTop() &&
      this.getBottom() <= paddle.getBottom()
    ) {
      this.speedY *= -1;
    }
    for (var i = 0; i < bricks.length; i++) {
      if (
        bricks[i].broken == false &&
        (this.checkTopCollision(bricks[i]) ||
          this.checkTopCollision(bricks[i])) &&
        (this.checkLeftCollision(bricks[i]) ||
          this.checkRightCollision(bricks[i]))
      ) {
        this.speedY *= -1;
        bricks[i].broken = true;
        score++
      }
    }
  };
}



