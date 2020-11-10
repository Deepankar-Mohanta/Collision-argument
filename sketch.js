var moving, fixed;
var geo2, yum;
function setup() {
  createCanvas(800,400);
  
  moving=createSprite(400, 200, 50, 50);
  moving.shapeColor="red";
  moving.velocityY=5;
  fixed=createSprite(400, 400, 50, 50);
  fixed.shapeColor="red";
  fixed.velocityY=-5;
  geo2=createSprite(100, 100, 50, 50);
  yum=createSprite(100, 300, 50, 50);
}

function draw() {
  background(255,255,255);  
yum.x=World.mouseX;
yum.y=World.mouseY;

if(isTouching1(moving, fixed)){
  moving.velocityX=moving.velocityX*(-1);
  fixed.velocityX=fixed.velocityX*(-1);

  moving.velocityY=moving.velocityY*(-1);
  fixed.velocityY=fixed.velocityY*(-1);
}
if(isTouching(yum, geo2)){
  yum.shapeColor="blue";
  geo2.shapeColor="blue";

}
else{
  yum.shapeColor="red";
  geo2.shapeColor="red";
}
 


  drawSprites();
}
