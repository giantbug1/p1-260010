let stars = 50000;
let starData = [];
let minSize = 0.1;
let maxSize = 5;
let bgColor;
let planets = [];
let pg;
let gui;

// PLANET TYPE SETTINGS
let planetTypes = {
  normal: {spawnChance: 30, moonChance: 35, minMoons: 1, maxMoons: 2,
    minSize: 10, maxSize: 25, colors: [
      [120, 120, 120],
      [160, 130, 100],
      [100, 140, 160],
      [180, 150, 100],
      [130, 160, 120]
    ]
  },
  ringed: {spawnChance: 10, moonChance: 80, minMoons: 1, maxMoons: 4,
    minSize: 18, maxSize: 30, colors: [
      [180, 160, 130],
      [150, 140, 120],
      [200, 180, 140],
      [130, 120, 100]
    ]
  },
  gas: {spawnChance: 12, moonChance: 90, minMoons: 2, maxMoons: 6,
    minSize: 25, maxSize: 40, colors: [
      [220, 180, 120],
      [180, 120, 80],
      [140, 160, 190],
      [200, 150, 180],
      [170, 180, 130],
      [190, 130, 100]
    ]
  },
  rocky: {spawnChance: 20, moonChance: 20, minMoons: 0, maxMoons: 1,
    minSize: 8, maxSize: 20, colors: [
      [80, 75, 70],
      [110, 100, 90],
      [130, 115, 90],
      [95, 90, 85],
      [150, 130, 100]
    ]
  },
  ocean: {spawnChance: 10, moonChance: 55, minMoons: 1, maxMoons: 2,
    minSize: 12, maxSize: 24, colors: [
      [30, 100, 180],
      [30, 140, 200],
      [20, 80, 150],
      [40, 160, 180],
      [50, 110, 170]
    ]
  },
  ice: {spawnChance: 8, moonChance: 45, minMoons: 0, maxMoons: 3,
    minSize: 10, maxSize: 23, colors: [
      [170, 220, 240],
      [190, 235, 255],
      [140, 200, 230],
      [210, 240, 255],
      [160, 190, 220]
    ]
  },
  volcanic: {spawnChance: 5, moonChance: 15, minMoons: 0, maxMoons: 1,
    minSize: 10, maxSize: 23, colors: [
      [120, 30, 20],
      [170, 40, 20],
      [100, 20, 15],
      [190, 60, 20],
      [80, 25, 20]
    ]
  },
  terra: {spawnChance: 5, moonChance: 80, minMoons: 1, maxMoons: 2,
    minSize: 12, maxSize: 25, colors: [
      [50, 120, 180],
      [40, 100, 160],
      [60, 140, 190],
      [30, 110, 170]
    ]
  }
};

function setup() {

  createCanvas(800, 800, WEBGL);
  gui = createGraphics(800, 800);
  bgColor = color(33, 23, 70);

  // Setup stars
  for (let i = 0; i < stars; i++) {
    let size = random(minSize, maxSize);
    starData.push({
      x: random(-1000, 1800),
      y: random(-1000, 1800),
      size: size
    });
  }

  pg = createGraphics(1000, 1000);
  pg.clear();

  for (let star of starData) {
    pg.noStroke();
    pg.fill(255);
    pg.ellipse(star.x, star.y, star.size, star.size);
  }
  newStarSystem();
}

// DRAW
function draw() {
  background(0);
  orbitControl();

  let centerX = 0;
  let centerY = 0;

// STAR
  fill(255, 220, 80);
  noStroke();
  push();
  translate(centerX, centerY);
  sphere(30);
  pop();

  // PLANETS
for (let planet of planets) {
    // Move planet
    planet.angle += planet.speed;
    planet.x =
      centerX +
      cos(planet.angle) *
      planet.orbitRadius;
    planet.y =
      centerY +
      sin(planet.angle) *
      planet.orbitRadius;
    // Planet orbit
    noFill();
    stroke(200);
    strokeWeight(2);
    circle(centerX, centerY, planet.orbitRadius * 2);
    // DRAW PLANET
    push();
    translate(planet.x, planet.y);
    noStroke();
    // NORMAL
    if (planet.type == "normal") {
      fill(planet.color[0], planet.color[1], planet.color[2]);
      sphere(planet.size);
    }
    // RINGED
    else if (planet.type == "ringed") {
      fill(planet.color[0], planet.color[1], planet.color[2]);
      sphere(planet.size);
      rotateY(PI / 5);
      rotateX(PI / 7);
      noFill();
      stroke(180);
      torus(planet.size * 1.8, 1);
      torus(planet.size * 1.7, 1);
      stroke(150);
      torus(planet.size * 1.45, 1);
      torus(planet.size * 1.35, 1);
      stroke(200);
      torus(planet.size * 1.2, 1);
    }
    // GAS
    else if (planet.type == "gas") {
      fill(planet.color[0], planet.color[1], planet.color[2], 255);
      sphere(planet.size * 1.5);
      // Atmospheric rings
      rotateX(PI / 2);
      noFill();
      stroke(255, 255, 255, 50);
      for (let r = planet.size * 0.5; r < planet.size * 1.4; r += 5) {
        torus(r, 1);
      }
    }
    // ROCKY
    else if (planet.type == "rocky") {
      fill(planet.color[0], planet.color[1], planet.color[2]);
      sphere(planet.size);
    }
    // OCEAN
    else if (planet.type == "ocean") {
      fill(planet.color[0], planet.color[1], planet.color[2] );
      sphere(planet.size);
      // Small atmosphere
      noFill();
      stroke(120, 200, 255, 60);
      sphere(planet.size * 1.03);
    }
    // ICE
    else if (planet.type == "ice") {
      fill(planet.color[0], planet.color[1], planet.color[2]);
      sphere(planet.size);
    }
    // VOLCANIC
    else if (planet.type == "volcanic") {
      fill(planet.color[0], planet.color[1], planet.color[2]);
      sphere(planet.size);
      // Lava glow
      noFill();
      stroke(255, 80, 20, 100);
      sphere(planet.size * 1.02);
    }
    // TERRA
    else if (planet.type == "TERRA") {
      fill(planet.color[0], planet.color[1], planet.color[2]);
      sphere(planet.size);
      // Green land patches
      fill(60, 140, 70);
      noStroke();
      // Small decorative land masses
      push();
      translate(planet.size * 0.6, 0, planet.size * 0.8);
      sphere(planet.size * 0.25);
      pop();
      push();
      translate(-planet.size * 0.7, planet.size * 0.2, planet.size * 0.5);
      sphere(planet.size * 0.2);
      pop();
    }
    pop();
     // MOONS
    for (let moon of planet.moons) {
      moon.angle += moon.speed;
      let moonX =
        planet.x +
        cos(moon.angle) *
        moon.orbitRadius;
      let moonY =
        planet.y +
        sin(moon.angle) *
        moon.orbitRadius;
      // Moon orbit
      noFill();
      stroke(150, 150, 150, 80);
      strokeWeight(1);
      push();
      translate(planet.x, planet.y);
      circle(0, 0, moon.orbitRadius * 2);
      pop();
     // Moon
      push();
      translate(moonX, moonY);
      noStroke();
      fill(moon.color[0], moon.color[1], moon.color[2]);
      sphere(moon.size);
      pop();
    }
  }
 
  // STAR GLOW
   push();
  fill(255, 180, 80, 30);
  noStroke();
  translate(centerX, centerY);
  sphere(50);
  pop();
  push();
  fill(255, 165, 0, 30);
  noStroke();
  translate(centerX, centerY);
  sphere(80);
  pop();

  // GUI
  drawGUI();
  // Star background
  push();
  noStroke();
  texture(pg);
  box(2000);
  pop();

  // GUI on top
  push();
  resetMatrix();
  translate(-width / 2, -height / 2);
  imageMode(CORNER);
  drawingContext.enable(drawingContext.BLEND);
  image(gui, 20, 20, 230, 175);
  pop();
}

// CREATE STAR SYSTEM
function newStarSystem() {
  planets = [];
  let amount =
    floor(random(3, 8));
  for (let i = 0; i < amount; i++ ) {
    // Pick planet 
    let planetType = getRandomPlanetType();
    let settings = planetTypes[planetType];
    let color = random(settings.colors);
    let planet = {type: planetType, orbitRadius: 180 + i * 70,
      angle: random(TWO_PI),
      speed: random(0.001, 0.005),
      size: random(settings.minSize, settings.maxSize),
      color: color,
      x: 0,
      y: 0,
      moons: []
    };

    // Moon chance
    if (random(100) < settings.moonChance) {
      let moonAmount = floor(random(settings.minMoons, settings.maxMoons + 1));
      for (let m = 0; m < moonAmount; m++) {
        let moon = {
          orbitRadius: planet.size + 20 + m * random(12, 20),
          angle: random(TWO_PI),
          speed: random(0.01, 0.03),
          size: random(2, 5),
          color: [random(100, 220), random(100, 220), random(100, 220)]
        };
        planet.moons.push(moon);
      }
    }
    planets.push(planet);
  }
}

// RANDOM PLANET TYPE
function getRandomPlanetType() {
  let types =
    Object.keys(planetTypes);
  let totalChance = 0;
  // Add all spawn chances
  for (let type of types) {
    totalChance +=
      planetTypes[type].spawnChance;
  }

  let roll = random(totalChance);
  let current = 0;
  for (let type of types) {
    current += planetTypes[type].spawnChance;
    if (roll < current) {
      return type;
    }
  }
  return "normal";
}

function drawGUI() {
  let counts = {
    normal: 0,
    ringed: 0,
    gas: 0,
    rocky: 0,
    ocean: 0,
    ice: 0,
    volcanic: 0,
    terra: 0
  };
  let moonCount = 0;
  for (let planet of planets) {
    counts[planet.type]++;
    moonCount +=
      planet.moons.length;
  }
  gui.clear();
  // Panel
  gui.noStroke();
  gui.fill(20, 15, 40, 230);
  gui.rect(20, 20, 830, 775, 10);
  gui.fill(255);
  gui.textSize(55);
  gui.textStyle(BOLD);
  gui.text("STAR SYSTEM", 40, 80 );
  gui.textStyle(NORMAL);
  gui.textSize(35);
  gui.text("Planets: " + planets.length, 40, 125);
  gui.text("Moons: " + moonCount, 40, 165);
  gui.text("Normal: " + counts.normal, 40, 205);
  gui.text("Ringed: " + counts.ringed, 40, 245);
  gui.text("Gas: " + counts.gas, 40, 285);
  gui.text( "Rocky: " + counts.rocky, 40, 325);
  gui.text("Ocean: " + counts.ocean, 40, 365 );
  gui.text("Ice: " + counts.ice, 40, 405 );
  gui.text("Volcanic: " + counts.volcanic, 40, 445);
  gui.text("terra: " + counts.terra, 40, 485);
}

function keyPressed() {
  if (keyCode === BACKSPACE) {
    newStarSystem();
  }
}