var fixedRect, movingRect; 

function setup() { 
  createCanvas(1200,800); 

  movingRect = createSprite(400, 200, 80, 30); 
  movingRect.velocityX=-2;
  movingRect.shapeColor = "green"; 
  
  fixedRect = createSprite(200, 200, 50, 80); 
  fixedRect.velocityX=3;
  fixedRect.shapeColor = "green"; 
} 

function draw() { 
  background(0,0,0);

  //movingRect.x = World.mouseX; 
  //movingRect.y = World.mouseY; 
  
  if(movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.y - movingRect.y <= fixedRect.height/2 + movingRect.height/2 &&
    movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height/2){ 
    movingRect.velocityY = -(movingRect.velocityY);
    fixedRect.velocityY = -(fixedRect.velocityY);
    movingRect.velocityX = -(movingRect.velocityX);
    fixedRect.velocityX = -(fixedRect.velocityX);

    //movingRect.shapeColor = "blue"; 
    //fixedRect.shapeColor = "blue"; 
  } else{ 
    //movingRect.shapeColor = "green"; 
    //fixedRect.shapeColor = "green"; 
  } 

  drawSprites(); 
}