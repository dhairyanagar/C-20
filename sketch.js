var move,fixed

function setup() {
  createCanvas(800,400);
 move=createSprite(400, 200, 100, 50);
 move.shapeColor=("red");
 fixed=createSprite(400, 200, 50, 100);
 fixed.shapeColor=("red");
 move.debug=true;
 fixed.debug=true;
}

function draw() {
  background(0);
  move.x=World.mouseX;
  move.y=World.mouseY; 
  if((move.x-fixed.x<move.width/2+fixed.width/2) && (fixed.x-move.x<move.width/2+fixed.width/2) && (move.y-fixed.y<move.height/2+fixed.height/2) && (fixed.y-move.y<move.height/2+fixed.height/2)){
    move.shapeColor=("green");
    fixed.shapeColor=("green");
  }
  else{
    move.shapeColor=("red");
    fixed.shapeColor=("red");
  }
  drawSprites();
}