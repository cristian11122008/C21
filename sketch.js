var a,b
var c,d






function setup() {
  createCanvas(800,400);
  a=createSprite(400, 200, 50, 50);
  b=createSprite(20,300,40,80);
  a.shapeColor='green';
  b.shapeColor='green';
  c=createSprite(40,20,50,50);
  c.shapeColor='green';
  d=createSprite(300,40,20,30);
  d.shapeColor='green';
}

function draw() {
  background("yellow");
  console.log(a.x-b.x);
  
  b.x=mouseX
  b.y=mouseY 
  if (collision(b,d)){

  
  d.shapeColor='pink';
  b.shapeColor='pink';  
}
else {
  d.shapeColor='green';
  b.shapeColor='green';
}
  drawSprites();
}
