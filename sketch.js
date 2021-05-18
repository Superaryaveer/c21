var fixRect;
var movingRect;

function setup() {
  createCanvas(1200,800);
  fixRect = createSprite(400, 100, 50, 80);
  fixRect.shapeColor = "green";
  fixRect.debug = false;
  movingRect = createSprite(400,800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = false;
  movingRect.velocityY = -5;
  fixRect.velocityY = 5;

}

function draw() {
  background(255,255,255);  
  bounceOff(movingRect,fixRect);
  
 /* movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(movingRect.x - fixRect.x < fixRect.width/2 + movingRect.width/2
    && fixRect.x - movingRect.x < fixRect.width/2 + movingRect.width/2
    && movingRect.y - fixRect.y < fixRect.height/2 + movingRect.height/2
    && fixRect.y - movingRect.y < fixRect.height/2 + movingRect.height/2 ){
      movingRect.shapeColor ="blue";
      fixRect.shapeColor = "blue";

    }
    else{
      fixRect.shapeColor = "green";
      movingRect.shapeColor = "green";
    }*/
  drawSprites();


}
