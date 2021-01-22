var garden, gardenImage;
var tom, tomImage, tomAnimation, tomRunning;
var jerry, jerryImage, jerryCalling;
function preload() {
    //load the images here
    gardenImage = loadImage("images/garden.png");
    tomImage = loadImage("images/tomOne.png");
    tomAnimation = loadAnimation("images/tomOne.png","images/tomTwo.png","images/tomThree.png","images/tomFour.png");
    jerryImage = loadImage("images/jerryOne.png");
    jerryAnimation = loadAnimation("images/jerryOne.png","images/jerryTwo.png","images/jerryThree.png",
    "images/jerryFour.png",);
}

function setup(){
    createCanvas(1000,625);
    //create tom and jerry sprites here
    garden = createSprite(0,0,1000,625);
    garden.addImage(gardenImage);
    garden.scale = 2.1;
    
    tom = createSprite(850,550,50,50);
    tom.addImage(tomImage);
    tom.scale = 0.15;

    jerry = createSprite(200,550,50,50);
    jerry.addImage(jerryImage);
    jerry.scale = 0.15;
}

function draw() {

    background(150);
    //Write condition here to evalute if tom and jerry collide

    keyPressed();

    drawSprites();
}


function keyPressed(){
    //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW) {
        tom.velocityX = -5;
        tom.addAnimation("tomRunning",tomAnimation);
        
         jerry.addAnimation("jerryCalling",jerryAnimation);
    
        
        

    }

}
