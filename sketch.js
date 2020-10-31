//Create variables here
var dogS,happyDog,database,foodS,foodStock,database,dog;
var feedbutton,addbutton,fedTime,lastFed,foodObj;
function preload()
{
  //load images here
  dog=loadImage("Dog.png");
  happyDog=loadImage("happydog.png");
}

function setup() {
  database=firebase.database();
	createCanvas(1000, 800);
  dogS= createSprite(500,400,50,50);
  dogS.addImage(dog);
  dogS.scale=0.5
  food=new Food
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

