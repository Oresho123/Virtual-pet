//Create variables here
var dogS,happyDog,database,foodS,foodStock,database,dog;
function preload()
{
  //load images here
  dog=loadImage("Dog.png");
  happyDog=loadImage("happydog.png");
}

function setup() {
  database=firebase.database();
	createCanvas(500, 500);
  dogS= createSprite(250,250,150,150);
  dogS.addImage(dog);
foodStock=database.ref('Food');
foodStock.on("value",readStock);
}

function draw() {  
  background(46, 139, 87)
  if (keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dogS.addImage(happyDog);
  }
  drawSprites();
  //add styles here
}

function readStock(data)
{
foodS=data.val();
}

function writeStock(x)
{
x=x-1
database.ref('/').update({Food:x})
}

