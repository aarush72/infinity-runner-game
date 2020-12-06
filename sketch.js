
var boy1

var boy
var base,invisibleGround
var score = 0;  
var obstaclesGroup,obstacle,obstacleImage;

function preload(){
boy1 = loadAnimation("1.png","2.png","3.png","4.png");
bg = loadImage("future.jpg")
obstacleImage = loadImage("stone.jpeg");
}

function setup(){
    createCanvas(1200,800);

      boy = createSprite(100,650,30,30);
      boy.addAnimation("running",boy1)
      boy.scale = 0.5
    

      base = createSprite(600,750,1200,10)
      base.shapeColor = "black"
      base.x = base.width /2;
      base.velocityX = -(6 + 3*score/100);

      obstaclesGroup = new Group();

     
}

function draw(){
 background("white")

 textSize(30);
 text("Score: "+ score, 600,400);

 fill("red")
 text("*Note : Points will be deducted if you touch the stone",100,200)


 score = score + Math.round(getFrameRate()/60);
 base.velocityX = -(6 + 3*score/100);


 if(keyDown("space")) {
    boy.velocityY = -12;
  }



 if (base.x < 900){
    base.x = base.width/2;
  }

  boy.velocityY = boy.velocityY + 0.5

boy.collide(base)


if(obstaclesGroup.isTouching(boy)){
    score = score - 5
}

   spawnClouds();

    drawSprites();
   
 
}


function spawnClouds() {
    if (frameCount % 200 === 0) {
      var obstacle = createSprite(600,730,40,10);
      obstacle.addImage(obstacleImage);
      obstacle.scale = 0.1;
      obstacle.velocityX = -(6 + 3*score/200);
      
     
      obstacle.lifetime = 200;
      
      obstaclesGroup.add(obstacle);
    }
    
  }