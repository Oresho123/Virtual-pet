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

  feed=createButton("Feed the Dog");
  feed.position(700,95);
  feed.mousePressed(feedDog)

   addFood=createButton("Add Food");
   addFood.position(800,95);
   addFood.mousePressed(addFoods);
   function feedDog(){
     dog.addImage(happyDog);


     foodObj.updateFoodStock(foodObj.getFoodStock()-1);
     database.ref('/').update({
       Food:foodObj.getFoodStock(),
       FeedTime:hour()
     })
   }
foodStock=database.ref('Food');
foodStock.on("value",readStock);
}

function draw() {  
  background(46, 139, 87)
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
food.display;
