var car, wall;
var deformation;
var weight, speed;

  deformation = 0.5* weight * speed * speed;
  
  
function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  car = createSprite(50,200,50,50);
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = "grey";
  car.velocityX = speed;
}

function draw() {
  background(1,1,1);  
  if(car.isTouching(wall)){
    car.velocityX=0
    if((0.5* weight * speed * speed)/22500<100){
      car.shapeColor = "green";
    }
    if((0.5* weight * speed * speed)/22500>100 && (0.5* weight * speed * speed)/22500<180){
      car.shapeColor = "yellow";
    }
    if((0.5* weight * speed * speed)/22500>180){
      car.shapeColor = "red";
    }
  }
  deformation = 0.5* weight * speed * speed;
  console.log(deformation);
  drawSprites();
}