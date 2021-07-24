var canvas;
var dave;
var ground,edge1,edge2,edge3;
var plat1,plat2,plat3,plat4;
var plat5,plat6,plat7,plat8;

function preload(){
  daveI= loadImage("Images/dave_body.png");
  
  brick_1= loadImage("Images/brick_1.png");
  brick_2= loadImage("Images/brick.png");
  groundI=  loadImage("Images/g2.png");
}


function setup(){
  canvas=createCanvas(1000,300)


  ground=createSprite(500,300,2000,10)
  ground.addImage(groundI)
  ground.scale=1
 // ground.debug=true;
  ground.setCollider("rectangle",0,0,1000,20)
    
  dave = createSprite(50,230,70,70);
  dave.addImage(daveI)
  dave.scale=0.2
  dave.debug=true;
  dave.setCollider("rectangle",0,0,200,200)
 
  
  plat1= createSprite(200,240,50,25);
  plat1.addImage(brick_1)
  plat1.scale=0.7
  plat2= createSprite(300,170,30,25);
  plat2.addImage(brick_1)
  plat2.scale=0.7
  plat3= createSprite(130,140,30,25);
  plat3.addImage(brick_1)
  plat3.scale=0.7
  plat4= createSprite(10,100,30,30);
  plat5= createSprite(35,210,30,30);
  plat5.scale=0.7
  plat5.addImage(brick_1);
  plat6=createSprite(440,215,30,30);
  plat6.addImage(brick_1);
  plat6.scale=0.7;
  plat7=createSprite(515,140,30,25);
  plat7.addImage(brick_1);
  plat7.debug=true;
  plat7.scale=0.7;
  plat8=createSprite(615,210,30,30);
  plat8.addImage(brick_1);
  plat8.scale=0.7;  
  

  
}

function draw(){
  background("grey");
  
 if(keyDown(UP_ARROW)){
  dave.y=dave.y-20;
 }

 dave.velocityY=dave.velocityY+2
 
 if(keyDown(RIGHT_ARROW)){
    dave.x=dave.x+10;
  }
 if(keyDown(LEFT_ARROW)){
    dave.x=dave.x-10;
 }

 for(var i=0;i<=300;i=i+50){
  edge1= createSprite(10,i,1,2000);
  edge1.addImage(brick_2)}

  for(var i=0;i<=300;i=i+50){
    edge2=createSprite(985,i,1,1000);
    edge2.addImage(brick_2)}

    for(var i=0;i<=1000;i=i+50){
      edge3=createSprite(i,0,1000,25)
      edge3.addImage(brick_1)
    }

  if(dave.isTouching(plat1)){
    dave.collide(plat1)
  }
  if(dave.isTouching(plat2)){
    dave.collide(plat2)
  }
  if(dave.isTouching(plat3)){
    dave.collide(plat3)
  }
  if(dave.isTouching(plat4)){
    dave.collide(plat4)
  }
  if(dave.isTouching(plat5)){
    dave.collide(plat5)
  }
  if(dave.isTouching(plat6)){
    dave.collide(plat6)
  }
  if(dave.isTouching(plat7)){
    dave.collide(plat7)
  }
  if(dave.isTouching(plat8)){
    dave.collide(plat8)
  }
  //dave.isTouching(plat4)||
  //dave.isTouching(plat5)||
  //dave.isTouching(plat6)||
  //dave.isTouching(plat7)||
  //dave.isTouching(plat8)||
  //dave.isTouching(plat9)||
  //dave.isTouching(plat10)||
  //dave.isTouching(plat11)){
  
  //}

  dave.collide(ground)
drawSprites()
  fill("blue");
  text(mouseX+":"+mouseY,mouseX,mouseY);
}
  
/*function keyPressed(){
 
  if(keyIsDown(DOWN_ARROW)){

   dave.velocityY=5
  }
  if(keyIsDown(LEFT_ARROW)){

  dave.velocityX=-5
  }
 
}
*/
