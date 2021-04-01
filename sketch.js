var bgImg;
var mouse;
var cat;
function preload() {
    //load the images here
    bgImg=loadImage(garden.png);
    catimg1=loadImage(images/cat1.png);
    mouseimg1=loadImage(images/mouse1.png);
    catimg2=loadImage(images/cat2.png,images/cat3.png);
    mouseimg2=loadImage(images/mouse2.png,images/mouse3.png);
    catimg3=loadImage(images/cat4.png);
    mouseimg3=loadImage(imagesmouse4.png);
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    mouse = createSprite(300,400,40,40);
    cat = createSprite(400,400,40,40);
}

function draw() {

    background(garden.png);
    //Write condition here to evalute if tom and jerry collide
   if(cat.x-mouse.x<(cat.width-mouse.width)/2){
    cat.addAnimation("catSitting",catimg3)
    cat.changeAnimation("catSitting")
    mouse.addAnimation("mouseLooking",mouseimg3)
    mouse,changeAnimation("mouseLooking")
   }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

if(keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseimg2)
    mouse.changeAnimation("mouseTeasing")
    mouse.frameDelay=25
}
if(keyCode === LEFT_ARROW)
    cat.addAnimation("catRunning", catimg2)
    cat.changeAnimation("catRunning")
    cat.frameDelay=25
}
