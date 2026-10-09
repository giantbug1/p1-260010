// ============================================================
// EEVEE TAMAGOTCHI
// p5.js Virtual Pet
// ============================================================

// ------------------------------------------------------------
// BASIS
// ------------------------------------------------------------

let pet = {
  name: "Eevee",

  hunger: 70,
  energy: 70,
  happiness: 70,
  health: 100,

  age: 0,
  evolution: "Eevee",

  color: "normal",

  sleeping: false,
  sick: false,

  lastUpdate: Date.now(),
  lastEvent: Date.now(),
  lastHistory: Date.now(),

  inventory: {
    berry: 5,
    potion: 2,
    stone: 0,
    food: 2
  },

  crafted: {
    superFood: 0
  },

  furniture: {
    bed: false,
    toy: false,
    plant: false,
    lamp: false
  },

  background: 0,

  history: {
    hunger: [],
    energy: [],
    happiness: [],
    health: []
  }
};

// ------------------------------------------------------------
// SCHERMEN
// ------------------------------------------------------------

let currentScreen = "main";

let buttons = [];

let nameInput;
let nameButton;

let mic;
let micStarted = false;

let audioStarted = false;
let oscillator;

// ------------------------------------------------------------
// ACHTERGRONDEN
// ------------------------------------------------------------

let backgrounds = [
  "Meadow",
  "Forest",
  "Bedroom",
  "Beach",
  "Space"
];

// ------------------------------------------------------------
// KLEUREN
// ------------------------------------------------------------

let petColors = [
  "normal",
  "dark",
  "cream",
  "pink",
  "blue"
];

// ------------------------------------------------------------
// EVOLUTIES
// ------------------------------------------------------------

let evolutions = [
  "Vaporeon",
  "Jolteon",
  "Flareon",
  "Espeon",
  "Umbreon",
  "Leafeon",
  "Glaceon",
  "Sylveon"
];

// ------------------------------------------------------------
// SETUP
// ------------------------------------------------------------

function setup() {

  createCanvas(900, 700);

  textFont("Arial");

  loadGame();

  createNameInput();

  oscillator = new p5.Oscillator("sine");
  oscillator.amp(0);

  // Microfoon
  mic = new p5.AudioIn();

  setInterval(gameTick, 1000);

  // Start geschiedenis
  addHistory();

}

// ------------------------------------------------------------
// DRAW
// ------------------------------------------------------------

function draw() {

  drawBackground();

  if (currentScreen === "main") {
    drawMainScreen();
  }

  if (currentScreen === "inventory") {
    drawInventory();
  }

  if (currentScreen === "craft") {
    drawCrafting();
  }

  if (currentScreen === "evolution") {
    drawEvolution();
  }

  if (currentScreen === "furniture") {
    drawFurniture();
  }

  if (currentScreen === "customize") {
    drawCustomize();
  }

  if (currentScreen === "stats") {
    drawStats();
  }

  if (currentScreen === "minigame") {
    drawMinigame();
  }

  if (currentScreen === "sound") {
    drawSoundScreen();
  }

}

// ============================================================
// TIJD
// ============================================================

function gameTick() {

  let now = Date.now();

  let seconds = (now - pet.lastUpdate) / 1000;

  // Veiligheidslimiet zodat een gigantische sprong
  // niet alles meteen naar 0 brengt.
  seconds = min(seconds, 60 * 60 * 24);

  pet.lastUpdate = now;

  if (pet.sleeping) {

    pet.energy += seconds * 0.035;
    pet.health += seconds * 0.015;

    pet.hunger += seconds * 0.008;

  } else {

    pet.hunger -= seconds * 0.012;
    pet.energy -= seconds * 0.008;
    pet.happiness -= seconds * 0.006;

  }

  // Als honger extreem hoog is
  if (pet.hunger > 90) {
    pet.health -= seconds * 0.015;
  }

  // Lage energie
  if (pet.energy < 15) {
    pet.happiness -= seconds * 0.01;
  }

  // Lage happiness
  if (pet.happiness < 20) {
    pet.health -= seconds * 0.008;
  }

  // Ziekte
  if (pet.health < 25) {
    pet.sick = true;
  }

  if (pet.health > 60) {
    pet.sick = false;
  }

  clampStats();

  // Leeftijd
  pet.age += seconds / 86400;

  // Random event
  if (now - pet.lastEvent > 120000) {

    randomEvent();

    pet.lastEvent = now;
  }

  // Geschiedenis
  if (now - pet.lastHistory > 30000) {

    addHistory();

    pet.lastHistory = now;
  }

  saveGame();
}

// ============================================================
// STATS
// ============================================================

function clampStats() {

  pet.hunger = constrain(pet.hunger, 0, 100);
  pet.energy = constrain(pet.energy, 0, 100);
  pet.happiness = constrain(pet.happiness, 0, 100);
  pet.health = constrain(pet.health, 0, 100);

}

// ============================================================
// MAIN SCREEN
// ============================================================

function drawMainScreen() {

  drawTitle();

  drawPet();

  drawStatsBars();

  drawButtons();

}

// ------------------------------------------------------------
// TITEL
// ------------------------------------------------------------

function drawTitle() {

  fill(255);
  textAlign(CENTER);

  textSize(30);

  text(
    pet.name + " • " + pet.evolution,
    width / 2,
    45
  );

  textSize(15);

  text(
    "Leeftijd: " + nf(pet.age, 1, 1) + " dagen",
    width / 2,
    70
  );

}

// ============================================================
// HUISDIER
// ============================================================

function drawPet() {

  push();

  translate(width / 2, 285);

  let scaleSize = 1;

  // Slapen
  if (pet.sleeping) {

    drawSleepingPet();

  } else {

    drawPokemon(pet.evolution, scaleSize);

  }

  pop();

}

// ------------------------------------------------------------
// EEVEE / EVOLUTIONS TEKENEN
// ------------------------------------------------------------

function drawPokemon(type, s) {

  push();

  scale(s);

  // Ziek
  if (pet.sick) {

    drawSickFace();

    pop();
    return;

  }

  // Kies kleur
  let bodyColor;

  if (pet.color === "normal") {
    bodyColor = color(190, 130, 70);
  }

  if (pet.color === "dark") {
    bodyColor = color(75, 65, 65);
  }

  if (pet.color === "cream") {
    bodyColor = color(235, 210, 150);
  }

  if (pet.color === "pink") {
    bodyColor = color(220, 145, 170);
  }

  if (pet.color === "blue") {
    bodyColor = color(100, 170, 220);
  }

  // Evolutie kleuren
  if (type === "Vaporeon") {
    bodyColor = color(80, 150, 220);
  }

  if (type === "Jolteon") {
    bodyColor = color(230, 205, 60);
  }

  if (type === "Flareon") {
    bodyColor = color(230, 100, 45);
  }

  if (type === "Espeon") {
    bodyColor = color(170, 110, 190);
  }

  if (type === "Umbreon") {
    bodyColor = color(40, 40, 50);
  }

  if (type === "Leafeon") {
    bodyColor = color(120, 170, 80);
  }

  if (type === "Glaceon") {
    bodyColor = color(120, 200, 230);
  }

  if (type === "Sylveon") {
    bodyColor = color(240, 160, 190);
  }

  // Shadow
  fill(0, 0, 0, 40);
  ellipse(0, 130, 250, 40);

  // Body
  fill(bodyColor);
  ellipse(0, 45, 150, 170);

  // Head
  ellipse(0, -45, 190, 170);

  // Ears
  triangle(
    -70, -105,
    -105, -210,
    -30, -130
  );

  triangle(
    70, -105,
    105, -210,
    30, -130
  );

  // Oren kleuren
  fill(80, 50, 40);

  triangle(
    -75, -145,
    -95, -195,
    -55, -155
  );

  triangle(
    75, -145,
    95, -195,
    55, -155
  );

  // Ogen
  fill(30);

  ellipse(-35, -50, 22, 30);
  ellipse(35, -50, 22, 30);

  // Oog highlights
  fill(255);

  ellipse(-30, -56, 7, 7);
  ellipse(40, -56, 7, 7);

  // Neus
  fill(30);
  triangle(
    0, -25,
    -8, -18,
    8, -18
  );

  // Mond
  noFill();
  stroke(30);
  strokeWeight(3);

  if (pet.happiness > 60) {

    arc(0, -10, 35, 25, 0, PI);

  } else if (pet.happiness < 30) {

    arc(0, 0, 35, 25, PI, TWO_PI);

  } else {

    line(-10, -10, 10, -10);

  }

  noStroke();

  // Evolutie details
  drawEvolutionDetails(type);

  // Blij effect
  if (pet.happiness > 80) {

    fill(255, 230, 80);

    textSize(30);

    text("♥", -110, -80);
    text("♥", 100, -110);

  }

  pop();

}

// ============================================================
// EVOLUTIE DETAILS
// ============================================================

function drawEvolutionDetails(type) {

  // Vaporeon
  if (type === "Vaporeon") {

    fill(70, 140, 210);

    triangle(
      -80, 70,
      -150, 30,
      -90, 120
    );

    triangle(
      80, 70,
      150, 30,
      90, 120
    );

    // Fin
    triangle(
      0, -100,
      -35, -140,
      35, -140
    );

  }

  // Jolteon
  if (type === "Jolteon") {

    fill(245, 220, 60);

    for (let i = -60; i <= 60; i += 30) {

      triangle(
        i,
        50,
        i - 15,
        100,
        i + 15,
        100
      );

    }

  }

  // Flareon
  if (type === "Flareon") {

    fill(245, 190, 120);

    ellipse(0, -105, 160, 70);

  }

  // Espeon
  if (type === "Espeon") {

    fill(220, 60, 80);

    ellipse(0, -110, 25, 25);

  }

  // Umbreon
  if (type === "Umbreon") {

    fill(240, 200, 60);

    ellipse(-65, -65, 25, 25);
    ellipse(65, -65, 25, 25);
    ellipse(-55, 60, 25, 25);
    ellipse(55, 60, 25, 25);

  }

  // Leafeon
  if (type === "Leafeon") {

    fill(70, 150, 70);

    triangle(
      -70, -115,
      -110, -175,
      -30, -135
    );

    triangle(
      70, -115,
      110, -175,
      30, -135
    );

  }

  // Glaceon
  if (type === "Glaceon") {

    fill(180, 240, 255);

    triangle(
      -45, -120,
      -20, -175,
      0, -120
    );

    triangle(
      45, -120,
      20, -175,
      0, -120
    );

  }

  // Sylveon
  if (type === "Sylveon") {

    fill(245, 150, 190);

    ellipse(-70, 50, 45, 80);
    ellipse(70, 50, 45, 80);

    fill(100, 180, 230);

    ellipse(-70, 45, 20, 35);
    ellipse(70, 45, 20, 35);

  }

}

// ============================================================
// ZIEKE EEVEE
// ============================================================

function drawSickFace() {

  fill(150, 110, 80);

  ellipse(0, 30, 150, 170);
  ellipse(0, -55, 190, 170);

  // oren
  triangle(-70, -110, -105, -200, -30, -130);
  triangle(70, -110, 105, -200, 30, -130);

  fill(50);

  // gesloten ogen
  stroke(50);
  strokeWeight(4);

  line(-45, -55, -25, -45);
  line(25, -45, 45, -55);

  noStroke();

  // verdrietige mond
  noFill();
  stroke(50);
  arc(0, -5, 40, 25, PI, TWO_PI);

  noStroke();

  // zweet
  fill(100, 180, 255);

  ellipse(90, -60, 15, 25);

}

// ============================================================
// SLAPEN
// ============================================================

function drawSleepingPet() {

  drawPokemon("Eevee", 1);

  fill(255);

  textSize(35);

  text("Z", 100, -120);
  text("Z", 130, -160);

  textSize(20);

  text("Z", 155, -195);

}

// ============================================================
// STATS BARS
// ============================================================

function drawStatsBars() {

  let x = 40;
  let y = 110;

  drawBar("Honger", pet.hunger, x, y, 200);
  drawBar("Energie", pet.energy, x, y + 45, 200);
  drawBar("Geluk", pet.happiness, x, y + 90, 200);
  drawBar("Gezondheid", pet.health, x, y + 135, 200);

}

// ------------------------------------------------------------

function drawBar(label, value, x, y, w) {

  fill(255);

  textAlign(LEFT);
  textSize(15);

  text(label, x, y);

  fill(255, 255, 255, 70);

  rect(x, y + 8, w, 18, 8);

  fill(255);

  rect(
    x,
    y + 8,
    map(value, 0, 100, 0, w),
    18,
    8
  );

  fill(255);

  text(
    round(value),
    x + w + 10,
    y + 23
  );

}

// ============================================================
// KNOPPEN
// ============================================================

function drawButtons() {

  let y = 500;

  button("🍖 Voeren", 40, y, 120, 45, feed);
  button("🎾 Spelen", 175, y, 120, 45, play);
  button("🧼 Schoon", 310, y, 120, 45, clean);
  button("😴 Slapen", 445, y, 120, 45, sleepToggle);

  button("🎒 Inventory", 600, y, 120, 45, () => {
    currentScreen = "inventory";
  });

  button("✨ Evolutie", 735, y, 120, 45, () => {
    currentScreen = "evolution";
  });

  button("🍳 Craft", 40, 560, 120, 45, () => {
    currentScreen = "craft";
  });

  button("🏠 Meubels", 175, 560, 120, 45, () => {
    currentScreen = "furniture";
  });

  button("🎨 Custom", 310, 560, 120, 45, () => {
    currentScreen = "customize";
  });

  button("📊 Stats", 445, 560, 120, 45, () => {
    currentScreen = "stats";
  });

  button("🎮 Minigame", 600, 560, 120, 45, () => {
    currentScreen = "minigame";
  });

  button("🔊 Geluid", 735, 560, 120, 45, () => {
    currentScreen = "sound";
  });

  button("📸 Foto", 40, 620, 120, 40, takePhoto);

  button("💾 Opslaan", 175, 620, 120, 40, saveGame);

}

// ------------------------------------------------------------

function button(label, x, y, w, h, action) {

  fill(255, 255, 255, 180);

  rect(x, y, w, h, 10);

  fill(30);

  textAlign(CENTER, CENTER);

  textSize(14);

  text(label, x + w / 2, y + h / 2);

  buttons.push({
    x: x,
    y: y,
    w: w,
    h: h,
    action: action
  });

}

// ============================================================
// ACTIES
// ============================================================

function feed() {

  if (pet.inventory.berry <= 0) {

    alert("Je hebt geen bessen meer!");

    return;
  }

  pet.inventory.berry--;

  pet.hunger -= 18;
  pet.energy += 8;
  pet.happiness += 3;

  // Te veel voeren
  if (pet.hunger < 15) {

    pet.health -= 8;

  }

  clampStats();

  saveGame();

}

// ------------------------------------------------------------

function play() {

  if (pet.energy < 15) {

    alert("Eevee is te moe om te spelen!");

    return;
  }

  pet.happiness += 20;
  pet.energy -= 15;
  pet.hunger += 5;

  clampStats();

}

// ------------------------------------------------------------

function clean() {

  pet.health += 15;
  pet.happiness += 5;

  pet.sick = false;

  clampStats();

}

// ------------------------------------------------------------

function sleepToggle() {

  pet.sleeping = !pet.sleeping;

}

// ============================================================
// INVENTORY
// ============================================================

function drawInventory() {

  titleScreen("🎒 Inventory");

  fill(255);
  textAlign(LEFT);
  textSize(20);

  text("🍓 Bessen: " + pet.inventory.berry, 100, 160);
  text("🧪 Potions: " + pet.inventory.potion, 100, 210);
  text("💎 Evolution stones: " + pet.inventory.stone, 100, 260);
  text("🍳 Super Food: " + pet.crafted.superFood, 100, 310);

  button("Terug", 50, 600, 130, 45, () => {
    currentScreen = "main";
  });

}

// ============================================================
// CRAFTING
// ============================================================

function drawCrafting() {

  titleScreen("🍳 Voedsel Craften");

  fill(255);

  textAlign(CENTER);

  textSize(20);

  text(
    "Maak Super Food met 2 bessen.",
    width / 2,
    160
  );

  text(
    "Super Food: " + pet.crafted.superFood,
    width / 2,
    220
  );

  button(
    "Craft",
    350,
    300,
    200,
    60,
    craftFood
  );

  button(
    "Terug",
    50,
    600,
    130,
    45,
    () => currentScreen = "main"
  );

}

// ------------------------------------------------------------

function craftFood() {

  if (pet.inventory.berry >= 2) {

    pet.inventory.berry -= 2;

    pet.crafted.superFood++;

  } else {

    alert("Je hebt 2 bessen nodig!");

  }

}

// ============================================================
// EVOLUTIE
// ============================================================

function drawEvolution() {

  titleScreen("✨ Eevee Evolutie");

  fill(255);

  textAlign(CENTER);

  textSize(18);

  text(
    "Je huidige vorm: " + pet.evolution,
    width / 2,
    120
  );

  textSize(14);

  text(
    "Evolutie wordt bepaald door je zorgstijl.",
    width / 2,
    150
  );

  let x = 70;
  let y = 200;

  for (let i = 0; i < evolutions.length; i++) {

    button(
      evolutions[i],
      x,
      y,
      160,
      45,
      () => evolve(evolutions[i])
    );

    x += 180;

    if (x > 700) {

      x = 70;
      y += 60;

    }

  }

  button(
    "Terug",
    50,
    600,
    130,
    45,
    () => currentScreen = "main"
  );

}

// ------------------------------------------------------------

function evolve(type) {

  // Evolution requirements

  if (pet.age < 1) {

    alert("Eevee moet minstens 1 dag oud zijn!");

    return;

  }

  if (pet.happiness < 60) {

    alert("Eevee is nog niet gelukkig genoeg!");

    return;

  }

  pet.evolution = type;

  pet.inventory.stone = max(
    0,
    pet.inventory.stone - 1
  );

  saveGame();

}

// ============================================================
// MEUBELS
// ============================================================

function drawFurniture() {

  titleScreen("🏠 Kamer");

  fill(255);

  textAlign(LEFT);

  textSize(18);

  text(
    "Meubels veranderen de statistieken van je huisdier.",
    80,
    130
  );

  button(
    "🛏️ Bed",
    100,
    200,
    150,
    60,
    buyBed
  );

  button(
    "🧸 Speelgoed",
    300,
    200,
    150,
    60,
    buyToy
  );

  button(
    "🌱 Plant",
    500,
    200,
    150,
    60,
    buyPlant
  );

  button(
    "💡 Lamp",
    700,
    200,
    120,
    60,
    buyLamp
  );

  button(
    "Terug",
    50,
    600,
    130,
    45,
    () => currentScreen = "main"
  );

}

// ------------------------------------------------------------

function buyBed() {

  pet.furniture.bed = true;

}

function buyToy() {

  pet.furniture.toy = true;

}

function buyPlant() {

  pet.furniture.plant = true;

}

function buyLamp() {

  pet.furniture.lamp = true;

}

// ============================================================
// CUSTOMIZE
// ============================================================

function drawCustomize() {

  titleScreen("🎨 Eevee Customizen");

  fill(255);

  textAlign(CENTER);

  textSize(20);

  text("Kies een kleur:", width / 2, 130);

  let x = 100;

  for (let c of petColors) {

    button(
      c,
      x,
      200,
      130,
      50,
      () => {
        pet.color = c;
      }
    );

    x += 150;

  }

  text(
    "Achtergrond",
    width / 2,
    320
  );

  x = 100;

  for (let i = 0; i < backgrounds.length; i++) {

    button(
      backgrounds[i],
      x,
      370,
      130,
      50,
      () => {
        pet.background = i;
      }
    );

    x += 150;

  }

  button(
    "Naam veranderen",
    350,
    470,
    200,
    50,
    showNameInput
  );

  button(
    "Terug",
    50,
    600,
    130,
    45,
    () => currentScreen = "main"
  );

}

// ============================================================
// NAAM
// ============================================================

function createNameInput() {

  nameInput = createInput(pet.name);

  nameInput.position(
    width / 2 - 100,
    height / 2 - 30
  );

  nameInput.size(200);

  nameInput.hide();

  nameButton = createButton("Naam opslaan");

  nameButton.position(
    width / 2 - 70,
    height / 2 + 10
  );

  nameButton.mousePressed(changeName);

  nameButton.hide();

}

// ------------------------------------------------------------

function showNameInput() {

  nameInput.show();
  nameButton.show();

}

// ------------------------------------------------------------

function changeName() {

  let newName = nameInput.value();

  if (newName.length > 0) {

    pet.name = newName;

  }

  nameInput.hide();
  nameButton.hide();

  saveGame();

}

// ============================================================
// STATISTIEKEN GRAFIEK
// ============================================================

function drawStats() {

  titleScreen("📊 Statistieken");

  let x = 100;
  let y = 200;
  let w = 700;
  let h = 300;

  stroke(255, 100);

  line(x, y, x, y + h);
  line(x, y + h, x + w, y + h);

  // horizontale lijnen

  for (let i = 0; i <= 10; i++) {

    let yy = y + h - i * 30;

    line(x, yy, x + w, yy);

  }

  drawGraph(
    pet.history.hunger,
    x,
    y,
    w,
    h
  );

  drawGraph(
    pet.history.energy,
    x,
    y,
    w,
    h
  );

  drawGraph(
    pet.history.happiness,
    x,
    y,
    w,
    h
  );

  drawGraph(
    pet.history.health,
    x,
    y,
    w,
    h
  );

  noStroke();

  fill(255);

  text(
    "Honger / Energie / Geluk / Gezondheid",
    width / 2,
    550
  );

  button(
    "Terug",
    50,
    600,
    130,
    45,
    () => currentScreen = "main"
  );

}

// ------------------------------------------------------------

function drawGraph(data, x, y, w, h) {

  noFill();

  beginShape();

  for (let i = 0; i < data.length; i++) {

    let px = map(
      i,
      0,
      max(data.length - 1, 1),
      x,
      x + w
    );

    let py = map(
      data[i],
      0,
      100,
      y + h,
      y
    );

    vertex(px, py);

  }

  endShape();

}

// ============================================================
// MINIGAME
// ============================================================

let gameTargetX = 450;
let gameTargetY = 350;
let gameScore = 0;

function drawMinigame() {

  titleScreen("🎮 Berry Catch");

  fill(255);

  textAlign(CENTER);

  textSize(20);

  text(
    "Klik op de bes!",
    width / 2,
    100
  );

  fill(255, 80, 80);

  ellipse(
    gameTargetX,
    gameTargetY,
    60,
    60
  );

  fill(255);

  text(
    "Score: " + gameScore,
    width / 2,
    500
  );

  button(
    "Terug",
    50,
    600,
    130,
    45,
    () => currentScreen = "main"
  );

}

// ------------------------------------------------------------

function mousePressed() {

  // Minigame
  if (currentScreen === "minigame") {

    let d = dist(
      mouseX,
      mouseY,
      gameTargetX,
      gameTargetY
    );

    if (d < 40) {

      gameScore++;

      pet.happiness += 5;

      gameTargetX = random(100, 800);
      gameTargetY = random(180, 450);

      clampStats();

    }

  }

  // Buttons
  for (let b of buttons) {

    if (
      mouseX > b.x &&
      mouseX < b.x + b.w &&
      mouseY > b.y &&
      mouseY < b.y + b.h
    ) {

      b.action();

    }

  }

  buttons = [];

}

// ============================================================
// GELUID
// ============================================================

function drawSoundScreen() {

  titleScreen("🔊 Geluid");

  fill(255);

  textAlign(CENTER);

  textSize(18);

  text(
    "Laat Eevee reageren op geluid.",
    width / 2,
    150
  );

  button(
    "🎤 Microfoon starten",
    300,
    250,
    300,
    60,
    startMic
  );

  button(
    "🔔 Geluid maken",
    300,
    340,
    300,
    60,
    playSound
  );

  button(
    "Terug",
    50,
    600,
    130,
    45,
    () => currentScreen = "main"
  );

}

// ------------------------------------------------------------

function startMic() {

  userStartAudio();

  mic.start();

  micStarted = true;

}

// ------------------------------------------------------------

function playSound() {

  userStartAudio();

  oscillator.freq(
    map(
      pet.happiness,
      0,
      100,
      150,
      600
    )
  );

  oscillator.amp(0.2, 0.05);

  setTimeout(() => {

    oscillator.amp(0, 0.3);

  }, 300);

  pet.happiness += 5;

  clampStats();

}

// ============================================================
// MICROFOON
// ============================================================

function updateMicrophone() {

  if (!micStarted) return;

  let volume = mic.getLevel();

  if (volume > 0.2) {

    pet.happiness += 0.1;

  }

}

// ============================================================
// RANDOM EVENTS
// ============================================================

function randomEvent() {

  let event = floor(random(5));

  if (event === 0) {

    pet.happiness += 10;

    alert(
      pet.name +
      " wil extra aandacht! ❤️"
    );

  }

  if (event === 1) {

    pet.sick = true;

    pet.health -= 10;

    alert(
      pet.name +
      " is ziek geworden!"
    );

  }

  if (event === 2) {

    pet.inventory.berry += 2;

    alert(
      pet.name +
      " vond twee bessen!"
    );

  }

  if (event === 3) {

    pet.energy += 10;

    alert(
      pet.name +
      " heeft een lekker dutje gedaan."
    );

  }

  if (event === 4) {

    pet.happiness += 15;

    alert(
      pet.name +
      " kreeg onverwacht extra aandacht!"
    );

  }

  clampStats();

}

// ============================================================
// GESCHIEDENIS
// ============================================================

function addHistory() {

  pet.history.hunger.push(pet.hunger);
  pet.history.energy.push(pet.energy);
  pet.history.happiness.push(pet.happiness);
  pet.history.health.push(pet.health);

  // Maximaal 30 punten bewaren

  for (let key in pet.history) {

    if (pet.history[key].length > 30) {

      pet.history[key].shift();

    }

  }

}

// ============================================================
// ACHTERGROND
// ============================================================

function drawBackground() {

  let t = hour();

  // Dag/nacht

  let night =
    t >= 20 ||
    t <= 6;

  if (night) {

    background(20, 25, 60);

  } else {

    background(120, 190, 240);

  }

  if (pet.background === 0) {

    // Meadow

    fill(100, 190, 100);

    rect(
      0,
      height * 0.55,
      width,
      height
    );

  }

  if (pet.background === 1) {

    // Forest

    fill(60, 130, 70);

    rect(
      0,
      height * 0.55,
      width,
      height
    );

    for (let x = 0; x < width; x += 100) {

      fill(70, 90, 50);

      rect(
        x,
        200,
        30,
        350
      );

      fill(40, 120, 50);

      ellipse(
        x + 15,
        180,
        120,
        130
      );

    }

  }

  if (pet.background === 2) {

    // Bedroom

    fill(180, 140, 120);

    rect(
      0,
      height * 0.55,
      width,
      height
    );

    fill(230, 220, 200);

    rect(
      0,
      height * 0.55,
      width,
      20
    );

  }

  if (pet.background === 3) {

    // Beach

    fill(230, 210, 130);

    rect(
      0,
      height * 0.55,
      width,
      height
    );

    fill(70, 180, 220);

    rect(
      0,
      height * 0.65,
      width,
      50
    );

  }

  if (pet.background === 4) {

    // Space

    background(10, 10, 30);

    fill(255);

    for (let i = 0; i < 80; i++) {

      ellipse(
        random(width),
        random(height),
        2,
        2
      );

    }

  }

}

// ============================================================
// SCREEN TITEL
// ============================================================

function titleScreen(title) {

  buttons = [];

  fill(255);

  textAlign(CENTER);

  textSize(30);

  text(title, width / 2, 60);

}

// ============================================================
// FOTO
// ============================================================

function takePhoto() {

  saveCanvas(
    pet.name + "_memory",
    "png"
  );

}

// ============================================================
// OPSLAAN
// ============================================================

function saveGame() {

  localStorage.setItem(
    "eeveeTamagotchi",
    JSON.stringify(pet)
  );

}

// ============================================================
// LADEN
// ============================================================

function loadGame() {

  let saved =
    localStorage.getItem(
      "eeveeTamagotchi"
    );

  if (saved) {

    let loaded =
      JSON.parse(saved);

    pet = loaded;

    // Voor eventuele nieuwe versies
    // ontbrekende waarden aanvullen

    if (!pet.inventory)
      pet.inventory = {};

    if (!pet.history)
      pet.history = {};

    pet.inventory.berry =
      pet.inventory.berry ?? 5;

    pet.inventory.potion =
      pet.inventory.potion ?? 2;

    pet.inventory.stone =
      pet.inventory.stone ?? 0;

    pet.crafted =
      pet.crafted ?? { superFood: 0 };

    pet.furniture =
      pet.furniture ??
      {
        bed: false,
        toy: false,
        plant: false,
        lamp: false
      };

    pet.history.hunger =
      pet.history.hunger ?? [];

    pet.history.energy =
      pet.history.energy ?? [];

    pet.history.happiness =
      pet.history.happiness ?? [];

    pet.history.health =
      pet.history.health ?? [];

    // Belangrijk:
    // zet lastUpdate op het moment waarop
    // de game opnieuw wordt geopend.
    //
    // De verstreken tijd wordt hieronder verwerkt.

    let now = Date.now();

    let offlineSeconds =
      (now - pet.lastUpdate) / 1000;

    offlineSeconds =
      min(
        offlineSeconds,
        60 * 60 * 24 * 7
      );

    if (pet.sleeping) {

      pet.energy += offlineSeconds * 0.035;
      pet.health += offlineSeconds * 0.015;

    } else {

      pet.hunger -= offlineSeconds * 0.012;
      pet.energy -= offlineSeconds * 0.008;
      pet.happiness -= offlineSeconds * 0.006;

    }

    pet.lastUpdate = now;

    clampStats();

  }

}

// ============================================================
// MUIS / MICROFOON UPDATE
// ============================================================

function keyPressed() {

  // S = slapen
  if (key === "s") {

    sleepToggle();

  }

  // F = voeren
  if (key === "f") {

    feed();

  }

  // P = spelen
  if (key === "p") {

    play();

  }

  // C = schoonmaken
  if (key === "c") {

    clean();

  }

}

// ============================================================
// EVOLUTIE AUTOMATISCH VOORSTEL
// ============================================================

function evolutionSuggestion() {

  if (pet.evolution !== "Eevee") {
    return;
  }

  // Veel geluk + overdag
  if (
    pet.happiness > 90 &&
    hour() >= 7 &&
    hour() <= 18
  ) {

    return "Espeon";

  }

  // Veel geluk + nacht
  if (
    pet.happiness > 90 &&
    (hour() >= 19 || hour() <= 6)
  ) {

    return "Umbreon";

  }

  return null;

}