// CHEATING DOES NOT MAKE THE GAME FUN. DONT CHEAT
let ball = null;
let bricks = [];
let numBricks = 15;
let paddle = null;
let score = 0;
let speedx = 2;
let speedy = -4;
let ballColor;
let pColor;
let brickColor;
let fps = 60;
let right = false;
let left = false;

document.ontouchmove = function(event){
    event.preventDefault();
}

function realSetup() {
document.getElementById('end').style = "display: show; margin:0px"
document.getElementById("gameStuff").style = "display: show; margin:0px"
  document.getElementById("tutorial").style = "display: none; margin:0px"  
  document.getElementById("start").style = "display: none"
  var canvas = createCanvas(400, 400);
  canvas.parent('canvasDisplay');
  ballColor = document.getElementById("ballColor").value;
  pColor = document.getElementById("paddleColor").value;
  brickColor = document.getElementById("brickColor").value;
  speedx *= document.getElementById("speed").value;
  speedy *= document.getElementById("speed").value;
  ball = new Ball();
  paddle = new Paddle();
  for (var i = 0; i < numBricks; i++) {
    for (var j = 0; j < 10; j++) {
      bricks.push(new Brick(40 * j, 0 + 10 * i));
    }
  }
}
function setup() {
  document.getElementById("gameStuff").style = "display: none"
  document.getElementById("end").style = "display: none" 
  createCanvas(0, 0);
}

function draw() {
  stroke('red')
  background('lightgray');
  if(ball !== null) {
  ball.move();
  ball.checkCollisions();
  ball.display();
  paddle.display();
    for (var l = 0; l < bricks.length; l++) {
      bricks[l].display();
    }
    if (ball.y > 375) {
      gameOver();
    }
  }
  winner();
    if(paddle !== null) {
    // paddle.x = mouseX;
       if(keyIsDown(LEFT_ARROW)){
    paddle.x-=5;
  }

    if(keyIsDown(RIGHT_ARROW)){
    paddle.x+=5;
    }
  }
  document.getElementById("score").innerHTML = "Score: " + score + " <button onclick='restart()'>Restart</button>" 
}



var gameOver = function() {
  background(0);
  textSize(60);
  textAlign(CENTER);
  fill(255, 80, 85);
  text("GAME OVER", width / 2, height / 2);
  noLoop();
}

function winner() {
  if (score == 150) {
    background(173, 216, 230);
    textAlign(CENTER);
    fill(0, 50, 250);
    textSize(60)
    text('You Win', width / 2, height / 2);
    noLoop();
  }
}

function restart() {
  window.location = "";
}

function ele(id){
  return document.getElementById(id)
}

Element.prototype.set = function(txt){
  this.innerHTML = txt;
};

Element.prototype.show = function(type){
  type = type != undefined ? type : 'block';
  if(this.style.display=='none'){
    this.style.display = type;
    return type;
  }
  if(this.style.display==type){
    this.style.display = 'none';
    return false;
  }
}