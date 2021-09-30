
var bg, gato, rato, gatoimg, ratoimg, gato2, gato3, rato1

function preload() {
  bg=loadImage("garden.png")
  gatoimg=loadAnimation("tomOne.png")
  ratoimg=loadAnimation("jerryOne.png")
  gato2=loadAnimation("tomTwo.png","tomThree.png")
  gato3=loadAnimation("tomFour.png")
  rato1=loadAnimation("jerryFour.png")
}

function setup() {
  canvas = createCanvas(1000, 800);
gato=createSprite(800,600,20,20)
  gato.addAnimation("tomSleepinng",gatoimg)
  gato.scale=0.2
  rato=createSprite(200,600,20,20)
  rato.addAnimation("Standing", ratoimg)
  rato.scale=0.15
  
}

function draw() {
  background(bg);
if (keyDown("left")){
  gato.velocityX=-3
gato.addAnimation("Running", gato2)
gato.scale=0.2
gato.changeAnimation("Running")
}
  if (gato.isTouching(rato)){
    gato.velocityX=0
    gato.addAnimation("LastImage",gato3)
    gato.changeAnimation ("LastImage") 
    gato.scale=0.2
    rato.addAnimation("LastImage",rato1)
    rato.changeAnimation("LastImage")
    rato.scale=0.15
  }
  
  drawSprites();
}



