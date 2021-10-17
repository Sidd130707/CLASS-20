var movingrect , fixedrect

function setup() {
  createCanvas(800,400);
 movingrect = createSprite(200,200,50,80)
 movingrect.shapeColor = "blue"
 fixedrect = createSprite(400,200,80,50)
 fixedrect.shapeColor = "blue"
}

function draw() {
  background("green");  
  drawSprites();
  movingrect.x = mouseX
  movingrect.y = mouseY

if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2 &&
  fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2 &&
  movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2 &&
  fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
  movingrect.shapeColor = "red"
  fixedrect.shapeColor = "red"
}
else{
  movingrect.shapeColor="blue"
  fixedrect.shapeColor="blue"
}
}