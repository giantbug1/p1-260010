//names for system here
let systemNames = [
  "Asterion","Ellador","Vesper","Nyx","Solara","Dravus","Erebus","Veridium",
  "Orion","Caldris","Zenthra","Valoria","Thyren","Aurelia","Nexaris",
  "Velorum","Macragge","thraxis","Talasa","D'Shas'Ka 4","Tyran","Tiamet",
  "Vedik","vultis","coronis","Orask","Verdrun IX","Chandax","AugurX","Antlia",
  "Andromeda","Antlia","Apus","Aquarius","Aquila","Ara","Aries","Auriga",
  "Boötes","Caelum","Camelopardalis","Cancer","Canes Venatici","Canis Major",
  "Canis Minor","Capricornus","Carina","Cassiopeia","Centaurus","Cepheus",
  "Cetus","Chamaeleon","Circinus","Columba","Coma Berenices","Corona Australis",
 "Corona Borealis","Corvus","Crater","Crux","Cygnus","Delphinus","Dorado",
 "Draco","Equuleus","Eridanus","Fornax","Gemini","Grus","Hercules","Horologium",
 "Hydra","Hydrus","Indus","Lacerta","Leo","Leo Minor","Lepus","Libra",
 "Lupus","Lynx","Lyra","Mensa","Microscopium","Monoceros","Musca","Norma",
 "Octans","Ophiuchus","Orion","Pavo","Pegasus","Perseus","Phoenix","Pictor",
 "Pisces","Piscis Austrinus","Puppis","Pyxis","Reticulum","Sagitta","Sagittarius",
 "Scorpius","Sculptor","Scutum","Serpens","Sextans","Taurus","Telescopium",
 "Triangulum","Triangulum Australe","Tucana","Ursa Major","Ursa Minor","Vela",
 "Virgo","Volans","Vulpecula","Artemis","Aplha Centuri","Tau Ceti","40 Eridani",
 "Wise 0855-0714","Wolf 359","Lalande 21185","Ross 128"
];

let systemName;
let stars = 50000;
let starData = [];
let minSize = 0.1;
let maxSize = 5;
let bgColor;
let planets = [];
let pg;
let gui;

// STAR TYPE SETTINGS
let starTypes = {
  yellow: {chance: 40, color: [255, 220, 80]},
  yellowOrange: {chance: 25, color: [255, 190, 50]},
  orange: {chance: 15, color: [255, 140, 30]},
  redOrange: {chance: 10, color: [240, 90, 30]},
  red: {chance: 9.9, color: [190, 45, 30]},
  dyson: {chance: 0.1, color: [180, 220, 255]}
};

let currentStarType;
let currentStarColor;

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
  },
  mechanical: {spawnChance: 5, moonChance: 0, minMoons: 0, maxMoons: 0,
    minSize: 14, maxSize: 27, colors: [
      [80, 85, 90],
      [100, 105, 110],
      [120, 120, 125],
      [70, 75, 80]
    ]
  },
  flatEarth: {spawnChance: 0.2, moonChance: 0, minMoons: 0, maxMoons: 0,
    minSize: 15, maxSize: 25, colors: [
      [40, 120, 200],
      [50, 140, 80],
      [30, 100, 180]
    ]
  }
};

// SETUP
function setup() {
  createCanvas(1000, 1000, WEBGL);
  gui = createGraphics(250, 330);
  bgColor = color(33, 23, 70);
  // Setup stars
  for (let i = 0; i < stars; i++) {
    let size = random(minSize, maxSize);
    starData.push({x: random(-1000, 1800), y: random(-1000, 1800), size: size});
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
  fill(currentStarColor[0], currentStarColor[1], currentStarColor[2]);
  noStroke();
  push();
  translate(centerX, centerY);
  sphere(30);
  pop();
   // DYSON SPHERE
  if (currentStarType == "dyson") {
    push();
    translate(centerX, centerY);
    noFill();
    stroke(100, 180, 255, 160);
    strokeWeight(2);
    sphere(55);
    rotateX(PI / 2);
    torus(65, 2);
    rotateY(PI / 3);
    torus(75, 2);
    rotateX(PI / 4);
    torus(85, 2);
    pop();
  }

  // PLANETS
   for (let planet of planets) {
    // Move planet
    planet.angle += planet.speed;
    planet.x =  centerX + cos(planet.angle) * planet.orbitRadius;
    planet.y =  centerY + sin(planet.angle) * planet.orbitRadius;

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
      torus(planet.size * 1.8,1);
      torus(planet.size * 1.7, 1);
      stroke(150);
      torus(planet.size * 1.45,1);
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
      stroke(120, 150, 2505, 60);
      sphere(planet.size * 1.03);
    }
    // ICE
    else if (planet.type == "ice") {
      fill(planet.color[0], planet.color[1], planet.color[2]);
      sphere(planet.size);
      // Ice layer
      noFill();
      stroke(220, 240, 255, 60);
      sphere(planet.size * 1.03);
    }
    // VOLCANIC
    else if (planet.type == "volcanic") {
      fill(planet.color[0], planet.color[1], planet.color[2]);
      sphere(planet.size);
      // Lava glow
      noFill();
      stroke(205, 40, 0, 50);
      sphere(planet.size * 1.02,11,5);
    }
    // TERRA
    else if (planet.type == "terra") {
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
      sphere(planet.size * 0.2);
      pop();
      push();
      translate(planet.size * 0.7, -planet.size * 0.2, -planet.size * 0.5);
      sphere(planet.size * 0.25);
      pop();
      push();
      translate(-planet.size * 0.7, -planet.size * 0.2, planet.size * 0.5);
      sphere(planet.size * 0.25);
      pop();
       push();
      translate(planet.size * 0.6, 0, planet.size * 0.8);
      sphere(planet.size * 0.25);
      pop();
      push();
      translate(-planet.size * 0.7, planet.size * 0.2, planet.size * 0.5);
      sphere(planet.size * 0.2);
      pop();
      push();
      translate(planet.size * 0.7, -planet.size * 0.2, -planet.size * 0.5);
      sphere(planet.size * 0.25);
      pop();
      push();
      translate(-planet.size * 0.7, -planet.size * 0.2, -planet.size * 0.5);
      sphere(planet.size * 0.25);
      pop();
    }
    // MECHANICAL WORLD
    else if (planet.type == "mechanical") {
      fill(planet.color[0], planet.color[1], planet.color[2]);
      sphere(planet.size);
      push();
    translate(centerX, centerY);
    noFill();
    stroke(100, 180, 255, 160);
    strokeWeight(0.3);
    sphere(planet.size + 2,7,6);
    rotateX(PI / 2);
    torus(planet.size + 9, 0.5);
    rotateY(PI / 3);
    torus(planet.size + 12, 0.5);
    rotateX(PI / 4);
    torus(planet.size + 16, 0.5);
    pop();
    }
    // FLAT EARTH
    else if (planet.type == "flatEarth") {
      // Blue disk
      fill(30, 100, 180);
      cylinder(planet.size, 4);
      // Green continents
      fill(60, 150, 70 );
      push();
      translate(0, -3, 0);
      rotateX(PI / 2);
      ellipse(-planet.size * 0.25, 0, planet.size * 0.53, planet.size * 0.52);
      ellipse(planet.size * 0.25, -planet.size * 0.5, planet.size * 0.43, planet.size * 0.22);
      ellipse(0, planet.size * 0.45, planet.size * 0.55, planet.size * 0.58);
      pop();
    }
    pop();

    // MOONS
     for (let moon of planet.moons) {
      moon.angle += moon.speed;
      let moonX = planet.x + cos(moon.angle) * moon.orbitRadius;
      let moonY = planet.y + sin(moon.angle) * moon.orbitRadius;

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
  fill(currentStarColor[0], currentStarColor[1], currentStarColor[2], 30);
  noStroke();
  translate(centerX, centerY);
  sphere(50);
  pop();
  push();
  fill(currentStarColor[0], currentStarColor[1], currentStarColor[2], 30);
  noStroke();
  translate(centerX, centerY);
  sphere(80);
  pop();

  // GUI
   drawGUI();
  // STAR BACKGROUND
   push();
  noStroke();
  texture(pg);
  box(8000);
  pop();

  // FIXED GUI CAMERA
   push();
  camera(0, 0, 1,  0, 0, 0,  0, 1, 0);
  ortho(-width / 2, width / 2, -height / 2, height / 2, -1000, 1000);
  imageMode(CORNER);
  image(gui, -width / 2 + 20, -height / 2 + 20);
  pop();
}

// CREATE STAR SYSTEM
function newStarSystem() {
  planets = [];

  // Random system name
  systemName =
    random(systemNames);
  // Random star
  chooseRandomStar();

  // Number of planets
  let amount =
    floor(random(3, 8));
  for (let i = 0; i < amount; i++) {
    // Pick planet
    let planetType = getRandomPlanetType();
    let settings = planetTypes[planetType];
    let color = random(settings.colors);
    let planet = {type: planetType,
      orbitRadius: 180 + i * 150,
      angle: random(TWO_PI),
      speed: random(0.001, 0.005),
      size:  random(settings.minSize, settings.maxSize),
      color: color,
      x: 0,
      y: 0,
      moons: []
    };

    // MOON CHANCE
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

// RANDOM STAR
function chooseRandomStar() {
  let types = Object.keys(starTypes);
  let totalChance = 0;
  for (let type of types) {
    totalChance += starTypes[type].chance;
  }
  let roll = random(totalChance);
  let current = 0;
  for (let type of types) {
    current += starTypes[type].chance;
    if (roll < current) {
      currentStarType = type;
      currentStarColor = starTypes[type].color;
      return;
    }
  }
  currentStarType = "yellow";
  currentStarColor = starTypes.yellow.color;
}

// RANDOM PLANET TYPE
function getRandomPlanetType() {
  let types = Object.keys(planetTypes);
  let totalChance = 0;
  // Add all spawn chances
  for (let type of types) {
    totalChance += planetTypes[type].spawnChance;
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

// GUI
function drawGUI() {
  // COUNT PLANETS
 let counts = {};
  // Create a count for every planet type
  for (let type of Object.keys(planetTypes)) {
    counts[type] = 0;
  }
  let moonCount = 0;
  for (let planet of planets) {
    counts[planet.type]++;
    moonCount += planet.moons.length;
  }
  // GUI BACKGROUND
  gui.clear();
  gui.noStroke();
  gui.fill(15, 12, 35, 220);
  gui.rect(0, 0, 250, 330, 12);
  gui.noFill();
  gui.stroke(120, 110, 180, 120);
  gui.strokeWeight(2);
  gui.rect(1, 1, 248, 328, 12);

  // TITLE
  gui.noStroke();
  gui.fill(255);
  gui.textAlign(LEFT, TOP);
  gui.textSize(22);
  gui.textStyle(BOLD);
  gui.text(systemName, 15, 12);
  gui.textStyle(NORMAL);
  gui.stroke(150, 200, 100);
  gui.strokeWeight(1);
  gui.line(15, 43, 235, 43);

  // SYSTEM INFO
  gui.noStroke();
  gui.fill(220);
  gui.textSize(15);
  gui.text("Star", 15, 55);
  gui.text(getStarDisplayName(), 120, 55);
  gui.text("Planets", 15, 77);
  gui.text(planets.length, 205, 77);
  gui.text("Moons", 15, 99);
  gui.text(moonCount, 205, 99);
  gui.stroke(150, 140, 200, 80);
  gui.line(15, 122, 235, 122);
 
  // PLANET TYPES
  gui.noStroke();
  gui.fill(255);
  gui.textSize(14);
  gui.text("PLANET TYPES", 15, 132);
  let y = 157;
  let displayNames = {
    normal: "Normal",
    ringed: "Ringed",
    gas: "Gas",
    rocky: "Rocky",
    ocean: "Ocean",
    ice: "Ice",
    volcanic: "Volcanic",
    terra: "Terra",
    mechanical: "Mechanical",
    flatEarth: "Flat Earth"
  };

  for (let type of Object.keys(planetTypes)) {
      if (counts[type] > 0) {
      gui.fill(200);
      gui.text(displayNames[type], 20, y);
      gui.text(counts[type], 205, y);
      y += 19;
    }
  }

  // CONTROLS
  gui.fill(150);
  gui.textSize(11);
  gui.text("BACKSPACE  •  New System", 15, 310);
}

// STAR DISPLAY NAME
function getStarDisplayName() {
  if (currentStarType == "yellowOrange") {
    return "Yellow-Orange";
  }
  if (currentStarType == "redOrange") {
    return "Red-Orange";
  }
  if (currentStarType == "dyson") {
    return "Dyson Sphere";
  }
  return (currentStarType.charAt(0).toUpperCase() + currentStarType.slice(1)
  );
}

//new system
function keyPressed() {
  if (keyCode === BACKSPACE) {
    newStarSystem();
  }
}