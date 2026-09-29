let stars = 500000;
let starData = [];
let minSize = 0.1;
let maxSize = 5;
let bgColor;
let planets = [];
let gui;
let moon
let pg;

function setup() {
  createCanvas(800, 800, WEBGL);

  gui = createGraphics(800, 800);

  bgColor = color(33, 23, 70);

  // setup stars
  for (let i = 0; i < stars; i++) {
    let size = random(minSize, maxSize);

    starData.push({
      x: random(-1000, 1800),
      y: random(-1000, 1800),
      size: size
    });
  }
  pg = createGraphics(1000,1000);
  pg.background(bgColor);
  
 for (let star of starData) {
  stroke(255)
  fill(255, 255, 255);
  pg.ellipse(star.x, star.y, star.size, star.size);
 }

  newStarSystem();
}

function draw() {
  background(0);
  orbitControl()
  
  //clear(bgColor);
 

  let centerX = 0
  let centerY = 0

  //star
  fill(255, 220, 80);
  noStroke();
  push()
  translate(centerX, centerY)
  sphere(30)
  pop()
    //planets
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
    push();
    translate(planet.x, planet.y)
    noStroke();
    if (planet.type == "normal") {
    fill(planet.color);
    sphere(planet.size);
    } 
    else if (planet.type == "ringed") { 
    fill(planet.color);
    sphere(planet.size);
    rotateY(PI / 5);
    rotateX(PI / 7);
    noFill();
    torus(52, 1)
    torus(50, 1)
    fill(180)
    torus(43, 1)
    fill(150)
    torus(41, 1)
    torus(39, 1)
    fill(200)
    torus(36, 1) 
    } 
    else if (planet.type == "gas") {
    fill(planet.color,0,0,50);
    sphere(planet.size * 1.8);
    rotateX(PI / 2);
    noFill();
    stroke(255, 255, 255, 60);
    for (let r = planet.size * 0.4; r < planet.size * 1.5; r += 5) {
        torus(r, 1);
    
    } 
  }

  //glow for star
  pop();
  push()
  fill(255, 180, 80, 30);
  noStroke();
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

 drawGUI()
push();
noStroke();
 texture(pg);
 box(2000);
 pop();
}
}

function newStarSystem() {
  planets = [];

  let amount = floor(random(3, 8));

  let types = ["normal", "ringed", "gas"];

 

  for (let i = 0; i < amount; i++) {
 let planetType = random(types)
    let planet = {
      orbitRadius: 180 + i * 70,
      angle: random(TWO_PI),
      speed: random(0.001, 0.005),
      size: random(10, 25),
      color: color(random(50, 255), random(50, 205), random(50, 255)),
      type: planetType,
      x: 0,
      y: 0
    };
console.log(planetType)
    planets.push(planet);
  }
}

function drawGUI() {

  // Clear GUI
  gui.clear();
  

  // Count planet types
  let normalCount = 0;
  let ringedCount = 0;
  let gasCount = 0;

  for (let planet of planets) {

    if (planet.type == "normal") {
      normalCount++;
    }

    else if (planet.type == "ringed") {
      ringedCount++;
    }

    else if (planet.type == "gas") {
      gasCount++;
    }
  }

  // GUI
  gui.noStroke();
  gui.fill(20, 15, 40, 230);

  gui.rect(20, 20, 230, 175, 10);

  gui.fill(255);

  gui.textSize(22);
  gui.textStyle(BOLD);

  gui.text("STAR SYSTEM", 40, 52);

  gui.textStyle(NORMAL);
  gui.textSize(17);

  gui.text("Total planets: " + planets.length, 40, 85);
  gui.text("Normal planets: " + normalCount, 40, 115);
  gui.text("Ringed planets: " + ringedCount, 40, 145);
  gui.text("Gas planets: " + gasCount, 40, 175);


  resetMatrix();

  imageMode(CENTER);

  // blendMode(ADD);

  // image(gui, 0, 0);
  texture(gui);
  plane(600,600);

  // blendMode(BLEND);

}

function keyPressed() {
  if (keyCode === BACKSPACE) {
    newStarSystem();
  }
}