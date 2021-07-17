var shipanimation,seaimage,sea,ship
function preload(){
shipanimation=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
seaimage=loadImage("sea.png")
}

function setup(){
  
  createCanvas(600,600);
  sea=createSprite(150,150)
  sea.addImage(seaimage)
  sea.scale=2
  
 sea.velocityX= -2
  
  ship=createSprite(150,350)
  ship.addAnimation("ship",shipanimation)
  ship.scale=0.3

  
}

function draw() {
  background("blue");
 drawSprites();

 
 if (sea.x<0)
  sea.x=sea.width/2;
}