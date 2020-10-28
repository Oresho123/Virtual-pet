//Create variables here
var dog,happyDog,database,foodS,foodStock;
function preload()
{
  //load images here
  dog=loadImage("dogImg.png");
  happyDog=loadImage("dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog = new Dog(250,250);
  dog=loadImage(dogImg.png);
}
foodStock=database.ref('Food');
foodStock.on("value",readStock);

function draw() {  
  background(46, 139, 87)
  drawSprites();
  //add styles here

}



