

function setup() {
  createCanvas(800, 400);
}


function draw() {

  background('whitesmoke');


  fill(0);
  textAlign(CENTER, CENTER);
  text("START CLICKING", width/2, height/2);

  fill(0);
  textAlign(RIGHT, TOP);
  text("sprite count: " + allSprites.length, width-10, 10);

  if(allSprites.length == 50){
    background(random(255),random(255),random(255));
    text("YOU WON!", width/2, height/2);
  }

  drawSprites();
}

function mousePressed(){
  var spr = createSprite(mouseX, mouseY, random(10, 50), random(10,50));
  fill(random(255),random(255),random(255));

  spr.velocity.x = random(-5, 5);
  spr.velocity.y = random(-5, 5);

}

