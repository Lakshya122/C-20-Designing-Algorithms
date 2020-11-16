var fixedRect, movingRect;
function setup() {
  createCanvas(800,400);
 fixedRect = createSprite(200, 200, 50, 50);
fixedRect.shapeColor = "Green";
movingRect = createSprite (300, 200, 100, 50);
movingRect.shapeColor = "Black";
}

function draw() {
  background("White");
  movingRect.x = mouseX;
  movingRect.y = mouseY;  
  if (movingRect.x - fixedRect.x > fixedRect.width/2 + movingRect.width/2) {
movingRect.shapeColor = "Red"
fixedRect.shapeColor = "Red"
  } 
  else {
    movingRect.shapeColor = "Green"
    fixedRect.shapeColor = "Green"
  }

  drawSprites();
}