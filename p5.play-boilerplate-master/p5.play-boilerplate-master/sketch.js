var astronaut;
var bg; var sleep; var brush; var gym; var eat; var bath; var move; var gym2;



function preload(){
  bg= loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym.png");
  eat = loadAnimation("images/eat.png");
  bath = loadAnimation("images/bath.png");
 move = loadAnimation("images/move.png");
  gym2 = loadAnimation("images/gym2.png");
}

function setup() {
  createCanvas(605, 500);
  
  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;
  
}

function draw() {
  background(bg);
  drawSprites();

  textSize(16);
  fill("white")
  text("Instructions:",20,35 );
  text("Up Arrow Key = Brushing🦷 ",20, 60);
  text("Down Arrow Key = On Treadmill🏋️",20, 75);
  text("Left Arrow Key = Eating🍔",20, 90);
  text("Right Arrow Key = Bathing🛀",20, 105);
  text("M Key = Moving🔛",20, 120);
  text("G Key = Gymming🏋️",20,135)
  
  edges=createEdgeSprites();
  astronaut.bounceOff(edges);
  
  if(keyDown("up")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("down")){
    astronaut.addAnimation("gym", gym);
    astronaut.changeAnimation("gym");
    astronaut.x = 300;
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("left")){
    astronaut.addAnimation("eat", eat);
    astronaut.changeAnimation("eat");
    astronaut.x = 200;
    astronaut.y = 350;
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }
  
  if(keyDown("right")){
    astronaut.addAnimation("bath", bath);
    astronaut.changeAnimation("bath");
    astronaut.x = 300;
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("m")){
    astronaut.addAnimation("move", move);
    astronaut.changeAnimation("move");
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }
  if(keyDown("g")){
    astronaut.addAnimation("gymming", gym2);
    astronaut.changeAnimation("gymming");
    astronaut.x = 300;
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
}