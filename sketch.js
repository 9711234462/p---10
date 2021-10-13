var sea,ship;
var seaImg,shipImg;

function preload(){
  //uncomment the code to add animation to ship 

  shipImg1 = loadAnimation("ship-1.png");
  //shipImg1 = loadAnimation("ship-1.png");
  //shipImg1 = loadAnimation("ship-1");
  //shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-1.png","ship-2.png");
  //shipImg1 = loadAnimation("ship-1","ship-2","ship-1","ship-2");
  
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Moving background
sea=createSprite(400,200);
sea.addImage("sea" , seaImg);
sea.x = sea.width/2 ;
 

  ship = createSprite(130,280,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;
  
}

function draw() {
  background(0);

  sea.velocityX = -3;
  console.log(sea.x) ;

  //uncomment code to reset the background
  if(sea.x < 0){

    sea.x = sea.width/2 ;
  }

  drawSprites();
}