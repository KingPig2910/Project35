//Create variables here
var dog, dogImage, happyDog, happyDogImage;
var database;
var milk, milkImage;
var foodStock;

function preload(){
  dogImage = loadImage("images/dogImg.png");
  happyDogImage = loadImage("images/dogImg1.png");
  milkImage = loadImage("images/milk.jpg");
}

function setup() {
  createCanvas(500, 500);
  
  database = firebase.database();
  dog = createSprite(425,300,50,50);
  dog.addImage(dogImage);
  dog.scale = 0.2;

  milk = createSprite(200,300,50,50);
  milk.addImage(milkImage);
  milk.scale = 0.1;
  
  
}


function draw() {  
background("green");
if(keyDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDogImage); 
  milk.visible = false;
}else{
  dog.addImage(dogImage);
  milk.visible = true;
}
foodStock = database.ref('Food');
  foodStock.on("value", readStock);

textSize(20);
text("Note: Press UP_ARROW Key To Feed Doggo Milk!", 40, 70);


  drawSprites();
  //add styles here

}
function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}



