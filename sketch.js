var ghost;
var creepySound;
var back;
var doorGroup;
var climberGroup;
var gameState = "PLAY";


function preload(){
  
ghost_Image = loadImage("ghost-standing.png");
creepyMusic = loadSound("spooky.wav");
doorImage = loadImage("door.png");
towerImage = loadImage("tower.png");
climberImage = loadImage("climber.png")  
  
 }

function setup(){
createCanvas(600,600)
  
  doorGroup = new Group();
  climberGroup = new Group();
  invisibleBlockGroup = new Group();


back = createSprite(300,300,600,600);
back.addImage(towerImage);
back.velocityY = 2;
  
ghost = createSprite(200,200,50,50)
ghost.addImage(ghost_Image)
ghost.scale = 0.3;
  
  

  
}

function draw(){

  
  if(back.y > 400){
    back.y = 300;
  }
  
  if(keyDown("LEFT_ARROW")){
   ghost.x = ghost.x - 3 
  }
  
    if(keyDown("RIGHT_ARROW")){
   ghost.x = ghost.x + 3 
  }
  
  if(keyDown("space")){ 
    ghost.velocityY = -10;
  } 
  ghost.velocityY = ghost.velocityY + 0.8
  
  if(climberGroup.isTouching(ghost)){
    ghost.velocityY = 0
  }
  
  if(invisibleBlockGroup.isTouching(ghost) || ghost.y > 600){
    ghost.destroy(); 
     background("black")
  stroke("yellow"); 
  fill("yellow"); 
  textSize(30); 
  text("Game Over", 230,250)
  }
  

  
  doors();
  
drawSprites(); 
}

function doors(){

if(frameCount%200== 0){
var door = createSprite(200,-50)
door.addImage(doorImage)
door.x = Math.round(random(100,400))
door.velocityY = 2  
door.lifetime = 300
doorGroup.add(door)
  
var climber = createSprite(200,10)
climber.addImage(climberImage)
  climber.x = door.x
  climber.velocityY = 2
  climber.lifetime = 300
  climberGroup.add(climber)
  climber.depth = door.depth
  
  ghost.depth = door.depth + 1
  
  var invisibleBlock = createSprite(100,-40)      
  invisibleBlock.x = door.x
  invisibleBlock.velocityY = 2
  invisibleBlock.lifetime = 300
  invisibleBlock.visible = false
  invisibleBlock.width = climber.width;
  invisibleBlock.height = 2;
  invisibleBlockGroup.add(invisibleBlock);
  
  
}
}