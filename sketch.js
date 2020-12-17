var car , wall;
var speed, weight;
function setup() {
  createCanvas(1600,400);

  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1200, 200, 60, height/2);

  speed = random(55, 90);
  weight = random(400, 1500);

  car.velocityX = speed;
  car.shapeColor = "white";
  wall.shapeColor = "red";

}

function draw() {
  background("black");

  if(isTouching(wall, car)) {
    car.velocityX = 0;
    var d = 0.5 * weight * speed *speed/22500;
    if(d>180) {
      car.shapeColor = "red";
    } 
    if(d<180 && d >100) {
      car.shapeColor = "yellow";
    }
    if(d<100) {
      car.shapeColor = "green"; 
    }
  }

  drawSprites();
}

