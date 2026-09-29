let stars = 5000;
let starData = [];
let minSize = 0.5;
let maxSize = 5;
let bgColor;
let planets = [];

function setup() {
  createCanvas(800, 800,WEBGL);
  bgColor = color(33, 23, 70);
  //setup stars
  for (let i = 0; i < stars; i++) {
    let size = random(minSize, maxSize);

    starData.push({
      x: random(-1000,1800),
      y: random(-1000,1800),
      size: size,
    });
  }
  newStarSystem();
}

function draw() {
  orbitControl()
  translate(-400,-400)
  background(bgColor);
  // stars
for (let star of starData) {
  noStroke();
  fill(255, 255, 255);
  ellipse(star.x, star.y, star.size, star.size);
}

  let centerX = width / 2;
  let centerY = height / 2;

  //star
  
  fill(255, 220, 80);
  noStroke();
  push()
  translate(centerX, centerY)
  sphere(30)
  pop()
  
  
  for (let planet of planets) {

    // Move planet
    planet.angle += planet.speed;
    planet.x = centerX + cos(planet.angle) * planet.orbitRadius;
    planet.y = centerY + sin(planet.angle) * planet.orbitRadius;

    // Draw orbit
    noFill();
    stroke(100, 100, 100);
    circle(centerX, centerY, planet.orbitRadius * 2);

    // Draw planet
    noStroke();
    fill(planet.color);
    circle(planet.x, planet.y, planet.size);
    push();
    translate(planet.x, planet.y)
    sphere(planet.size);
    pop();
    
  }
  fill(255, 180, 80, 30);
  noStroke();
  push()
  translate(centerX, centerY)
  sphere(50)
  pop()
  fill(255, 180, 80, 30);
  noStroke();
  push()
  translate(centerX, centerY)
  sphere(50)
  pop()
  fill(255, 165, 0, 30);
  noStroke();
  push()
  translate(centerX, centerY)
  sphere(80)
  pop()
}

function newStarSystem() {
  planets = [];

  let amount = floor(random(3, 8));

  for (let i = 0; i < amount; i++) {

    let planet = {
      orbitRadius: 180 + i * 70,
      angle: random(TWO_PI),

     
      speed: random(0.001, 0.005),

      size: random(10, 30),

      color: color(
        random(50, 255),
        random(50, 255),
        random(50, 255)
      ),

      x: 0,
      y: 0
    };

    planets.push(planet);
  }
}

function keyPressed() {
  if (keyCode === BACKSPACE) {
    newStarSystem();
    console.log("idk");
  }
}