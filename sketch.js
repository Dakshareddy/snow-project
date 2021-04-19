var background;

var snowImage1,snow;

function preload(){
  bg =loadImage("snow4.jpg");

  snowImage1=loadImage("snow4.webp","snow5.webp")
}

//Function to set initial environment
function setup() {
 createCanvas(1200,500);

 snow1 = createSprite(510,250,50,50);
 snow1.scale=0.5;

 snow2 = createSprite(650,300,50,50);
 snow2.scale=0.5;
}

// function to display UI
function draw() {
 background(bg);

 drawSprites();

}