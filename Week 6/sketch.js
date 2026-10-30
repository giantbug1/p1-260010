let petName = "Eevee";
let nameInput;
let namingScreen = false;
let stats = [
{name: "happiness", rate: 70}, 
{name: "energie", rate: 90}, 
{name: "hunger", rate: 60}, 
{name: "health", rate: 100}, 
];
let backgrounds = [
  "outside", "bedroom", "bathroom", "kitchen"
];
let currentAction;

let degrationRate = 0.01;
let evo;
let species = "Eevee";
let petSprites;
let level = 1;
let xp = 0;

//settings
let settingsNameMode = false;
let resetConfirm = false;
let settingsNameInput;
let saveNameButton;
let cancelNameButton;

let buttonLeft = 0;
let buttonRight = 0;

let room;
let rooms = 2;

// Garden system
let gardenPlanted = false;
let gardenReadyAt = 0;
let gardenGrowTime = 30 * 1000; 
let gardenSeedMenu = false;

let img
function preload() {
//items
imgWaterStone = loadImage("waterstone.png");
imgThunderStone = loadImage("thunderstone.png");
imgFireStone = loadImage("fire stone.png");
imgSunStone = loadImage("sun stone.png");
imgMoonStone = loadImage("moon stone.png");
imgLeafStone = loadImage("leaf stone.png");
imgIceStone = loadImage("ice stone.png");
imgShinyStone = loadImage("shiny stone.png");
imgEverstone = loadImage("ever stone.png");
//buttons
imgRightButtonOn = loadImage("button on right.png");
imgRightButtonOff = loadImage("button off right.png");
imgLeftButtonOff = loadImage("button off left.png");
imgLeftButtonOn = loadImage("button on left.png");
imgButtonOn = loadImage("button on.png");
imgButtonOff = loadImage("button off.png");
imgInventoryOn = loadImage("inventory on.png");
imgInventoryOff = loadImage("inventory off.png");
imgShopOn = loadImage("shop on.png");
imgShopOff = loadImage("shop off.png");
imgSettingsOn = loadImage("settings on.png");
imgSettingsOff = loadImage("settings off.png");
//eevee
imgNormal = loadImage("Eevee-normal.png");
imgSleepy = loadImage("Eevee-sleepy.png");
imgSad = loadImage("Eevee-sad.png");
imgHealthy = loadImage("Eevee-healthy.png");
imgSick = loadImage("Eevee-sick.png");
imgHungry = loadImage("Eevee-hungry.png");
//vaporeon
imgVaporeonHealthy = loadImage("vaporeon healthy.png");
imgVaporeonHungry = loadImage("vaporeon hungry.png");
imgVaporeonSad = loadImage("vaporeon sad.png");
imgVaporeonSleepy = loadImage("vaporeon sleepy.png");
imgVaporeonSick = loadImage("vaporeon sick.png");
imgVaporeonNormal = loadImage("vaporeon normal.png");
//jolteon
imgJolteonHealthy = loadImage("jolteon healthy.png");
imgJolteonHungry = loadImage("jolteon hungry.png");
imgJolteonSad = loadImage("jolteon sad.png");
imgJolteonSleepy = loadImage("jolteon sleepy.png");
imgJolteonSick = loadImage("jolteon sick.png");
imgJolteonNormal = loadImage("jolteon normal.png");
}

let settingsOpen = false;
let inventoryOpen = false;
let shopOpen = false;
let shopScroll = 0;
let shopScrollSpeed = 40;

let inventory = [];
let inventorySlots = 10;

let coins = 200;
let selectedItem = -1;
let itemMessage = "";

let shopItems = [
  {
    name: "Water Stone",
    id: "waterstone",
    price: 100,
    sellPrice: 50,
    type: "evolution",
    evolves: "Vaporeon"
  },
  {
    name: "Thunder Stone",
    id: "thunderstone",
    price: 100,
    sellPrice: 50,
    type: "evolution",
    evolves: "Jolteon"
  },
  {
    name: "fire Stone",
    id: "firestone",
    price: 100,
    sellPrice: 50,
    type: "evolution",
    evolves: "Flareon"
  },
  {
    name: "Sun Stone",
    id: "sunstone",
    price: 100,
    sellPrice: 50,
    type: "evolution",
    evolves: "Espeon"
  },
   {
    name: "Moon Stone",
    id: "moonstone",
    price: 100,
    sellPrice: 50,
    type: "evolution",
    evolves: "Umbreon"
  },
  {
    name: "Leaf Stone",
    id: "leafstone",
    price: 100,
    sellPrice: 50,
    type: "evolution",
    evolves: "Leafeon"
  },
  {
    name: "Ice Stone",
    id: "icestone",
    price: 100,
    sellPrice: 50,
    type: "evolution",
    evolves: "Glaceon"
  },
  {
    name: "Shiny Stone",
    id: "shinystone",
    price: 100,
    sellPrice: 50,
    type: "evolution",
    evolves: "Sylveon"
  },
  {
  name: "Ever Stone",
  id: "everstone",
  price: 150,
  sellPrice: 75,
  type: "devolution"
  },
  {
  name: "Berry Seed",
  id: "berryseed",
  price: 25,
  sellPrice: 10,
  type: "seed"
  },
  {
    name: "Berry",
    id: "berry",
    price: 10,
    sellPrice: 5,
    type: "food",
    hunger: 10
  }
];


function setup () {
 createCanvas(800, 800);
  let savedLevel = getItem("level");
let savedXP = getItem("xp");

if (savedLevel !== null) {
  level = savedLevel;
}

if (savedXP !== null) {
  xp = savedXP;
}

// Load saved garden
let savedGardenPlanted = getItem("gardenPlanted");
let savedGardenReadyAt = getItem("gardenReadyAt");

if (savedGardenPlanted !== null) {
  gardenPlanted = savedGardenPlanted;
}

if (savedGardenReadyAt !== null) {
  gardenReadyAt = savedGardenReadyAt;
}

 petSprites = {
  Eevee: {
    normal: imgNormal,
    sleepy: imgSleepy,
    sad: imgSad,
    healthy: imgHealthy,
    sick: imgSick,
    hungry: imgHungry
  },
  Vaporeon: {
    normal: imgVaporeonNormal,
    sleepy: imgVaporeonSleepy,
    sad: imgVaporeonSad,
    healthy: imgVaporeonHealthy,
    sick: imgVaporeonSick,
    hungry: imgVaporeonHungry
  },
  Jolteon: {
    normal: imgJolteonNormal,
    sleepy: imgJolteonSleepy,
    sad: imgJolteonSad,
    healthy: imgJolteonHealthy,
    sick: imgJolteonSick,
    hungry: imgJolteonHungry
  },
  Flareon: {
    normal: "",
    sleepy: "",
    sad: "",
    healthy: "",
    sick: "",
    hungry: ""
  },
  Espeon: {
    normal: "",
    sleepy: "",
    sad: "",
    healthy: "",
    sick: "",
    hungry: ""
  },
  Umbreon: {
    normal: "",
    sleepy: "",
    sad: "",
    healthy: "",
    sick: "",
    hungry: ""
  },
  Leafeon: {
    normal: "",
    sleepy: "",
    sad: "",
    healthy: "",
    sick: "",
    hungry: ""
  },
  Glaceon: {
    normal: "",
    sleepy: "",
    sad: "",
    healthy: "",
    sick: "",
    hungry: ""
  },
  Sylveon: {
    normal: "",
    sleepy: "",
    sad: "",
    healthy: "",
    sick: "",
    hungry: ""
  },
  

};
 items = {
  waterstone: imgWaterStone,
  thunderstone: imgThunderStone,
  everstone: imgEverstone,
  firestone: imgFireStone,
  sunstone: imgSunStone,
  moonstone: imgMoonStone,
  leafstone: imgLeafStone,
  icestone: imgIceStone,
  shinystone: imgShinyStone
 };
  room = "kitchen"
  let savedStats = getItem("stats");

  if (savedStats !== null) {
    stats = savedStats;
  } else {
    storeItem("stats", stats);
  }

  let savedInventory = getItem("inventory");

if (savedInventory !== null) {
  inventory = savedInventory;
}
let savedCoins = getItem("coins");
let savedSpecies = getItem("species");

if (savedCoins !== null) {
  coins = savedCoins;
}

if (savedSpecies !== null) {
  species = savedSpecies;
}

let savedName = getItem("petName");

if (savedName !== null) {
  petName = savedName;
}



nameInput = createInput("Eevee");
nameInput.position(300, 300);
nameInput.size(200);

let nameButton = createButton("Confirm");
nameButton.position(350, 350);

nameInput.hide();
nameButton.hide();

nameButton.mousePressed(() => {
  if (nameInput.value().trim() !== "") {
    petName = nameInput.value().trim();
    namingScreen = false;

    nameInput.hide();
    nameButton.hide();

    storeItem("petName", petName);
  }
});
// Settings name controls
settingsNameInput = createInput(petName);
settingsNameInput.position(300, 320);
settingsNameInput.size(200);
settingsNameInput.hide();

saveNameButton = createButton("Save Name");
saveNameButton.position(330, 360);
saveNameButton.hide();

cancelNameButton = createButton("Cancel");
cancelNameButton.position(430, 360);
cancelNameButton.hide();

// Save the new name
saveNameButton.mousePressed(() => {
  let newName = settingsNameInput.value().trim();

  if (newName !== "") {
    petName = newName;
    storeItem("petName", petName);
    itemMessage = "Name changed!";
    closeNameEditor();
  } else {
    itemMessage = "Please enter a name!";
  }
});

// Cancel renaming
cancelNameButton.mousePressed(() => {
  closeNameEditor();
});
}

function draw() {
  if (namingScreen) {
  drawNamingScreen();
  return;
}
  if (rooms >= 3) {
    room = "bathroom";
  } else if (rooms == 2) {
    room = "bedroom";
  } else if (rooms == 1) {
    room = "kitchen";
  } else {
    room = "outside"
  }

  if (rooms >= 3) {
    currentAction = "Wash";
  } else if (rooms == 2) {
    currentAction = "Sleep";
  } else if (rooms == 1) {
    currentAction = "Feed";
  } else {
    currentAction = "Play";
  }

  drawRoom();
  
  drawButtonRight(750,450,50,100);
  drawButtonLeft(50,450,50,100);
  drawActionButton(400, 670, 270, 100);
  
  drawShop(590,70,130,130);
  drawInventory(440,70,130,130);

  drawSettings(730,60,130,130);

  fill(150);
  rect(-10,-10,270,138,10);
  fill(200);
  rect(-10,-10,260,130,10);

  for (let i = 0; i < stats.length; i++) {
    let y = 32 + i * 25;
    let stat = stats[i];

    fill(0);
    textSize(16);
    text(stat.name + ":", 50, y)
  
  
  fill(100);
  rect(120,y,100,5,10);
    
  if (stat.rate < 20) {
  fill(255,20,10);
  } else if (stat.rate < 50) {
  fill(255,200,10)
  } else {
  fill(100,255,100)
  }

  rect(120,y, stat.rate, 5, 10);

  if (stat.rate > 0) {
    stat.rate = max(0, stat.rate - degrationRate)
  
  }
}
drawPet();
  storeItem("stats", stats);
  textSize(35);
  noStroke();
  fill(0);
  text(petName, width/2, 270);

if (inventoryOpen) {
  drawInventoryMenu();
}

if (shopOpen) {
  drawShopMenu();
}

if (settingsOpen) {
  drawSettingsMenu();
}

if (gardenSeedMenu) {
  drawGardenSeedMenu();
}
  
}

function drawRoom() {
  noStroke();

  if (room == "outside") {
    // Sky
    background(120, 205, 255);

    // Clouds
    fill(255);
    ellipse(330, 100, 90, 55);
    ellipse(365, 85, 65, 65);
    ellipse(400, 103, 75, 50);

    ellipse(630, 160, 80, 50);
    ellipse(660, 145, 55, 60);
    ellipse(690, 162, 65, 35);

    // Distant hills
    fill(100, 190, 115);
    ellipse(120, 460, 350, 180);
    ellipse(650, 450, 420, 190);

    // Grass
    fill(65, 175, 80);
    rect(0, 430, 800, 370);

    // Flowers
    for (let x = 40; x < 780; x += 95) {
      fill(40, 130, 55);
      rect(x, 460, 4, 25);
      fill(255, 220, 80);
      circle(x + 2, 457, 10);
      fill(255, 120, 170);
      circle(x - 3, 452, 7);
      circle(x + 7, 452, 7);
    }
    // Draw the garden outside
    drawGarden();  
  } else if (room == "bedroom") {
    // Warm walls
    background(250, 220, 175);

    // Wooden floor
    fill(170, 110, 65);
    rect(0, 450, 800, 350);

    // Floorboards
    stroke(125, 75, 45);
    strokeWeight(2);
    for (let y = 480; y < 800; y += 55) {
      line(0, y, 800, y);
    }
    for (let x = 100; x < 800; x += 150) {
      line(x, 450, x, 800);
    }
    noStroke();


    // Window
    fill(120, 80, 50);
    rect(475, 85, 205, 190, 8);
    fill(130, 215, 255);
    rect(488, 98, 179, 164);

    // Window crossbars
    stroke(255, 245, 220);
    strokeWeight(8);
    line(578, 98, 578, 262);
    line(488, 180, 667, 180);
    noStroke();
    // Rug
    fill(210, 100, 110);
    ellipse(420, 590, 540, 165);

    //bed
    fill(190, 135, 85);
    rect(100, 300, 300, 200, 10);
    fill(230, 230, 230);
    ellipse(190, 360, 150, 100);
    ellipse(310, 360, 150, 100);
    fill(200,100,100);
    rect(100, 370, 300, 100, 10);
  

  } else if (room == "bathroom") {
    // Pale blue walls
    background(195, 235, 245);

    // Floor tiles
    fill(150, 205, 220);
    rect(0, 450, 800, 350);

    stroke(235, 250, 255);
    strokeWeight(3);
    for (let x = 0; x <= 800; x += 80) {
      line(x, 450, x, 800);
    }
    for (let y = 450; y <= 800; y += 65) {
      line(0, y, 800, y);
    }
    noStroke();

    // Wall tiles
    stroke(255);
    strokeWeight(2);
    for (let x = 0; x < 800; x += 100) {
      line(x, 0, x, 450);
    }
    for (let y = 0; y < 450; y += 75) {
      line(0, y, 800, y);
    }
    noStroke();

    // Bathtub
    fill(110, 165, 180);
    rect(500, 320, 245, 170, 22);
    fill(250);
    rect(512, 330, 221, 75, 20);
    fill(145, 220, 240);
    ellipse(622, 360, 180, 55);

    // Sink cabinet
    fill(145, 105, 85);
    rect(65, 355, 170, 100, 8);
    fill(250);
    ellipse(150, 355, 180, 45);
    fill(175, 220, 230);
    ellipse(150, 355, 100, 25);

    // Faucet
    stroke(130);
    strokeWeight(7);
    noFill();
    arc(150, 340, 35, 35, PI, TWO_PI);
    line(167, 340, 167, 355);
    noStroke();

  } else if (room === "kitchen") {
    // Cream walls
    background(255, 230, 185);

    // Tiled floor
    fill(190, 160, 125);
    rect(0, 450, 800, 350);

    stroke(235, 210, 175);
    strokeWeight(3);
    for (let x = 0; x < 800; x += 80) {
      line(x, 450, x, 800);
    }
    for (let y = 450; y < 800; y += 65) {
      line(0, y, 800, y);
    }
    noStroke();

    // Upper cabinets
    fill(150, 95, 60);
    rect(300, 90, 245, 150, 8);

    fill(215, 165, 105);
    rect(310, 100, 110, 130, 5);
    rect(425, 100, 110, 130, 5);

    // Cabinet handles
    fill(90, 65, 40);
    rect(405, 150, 6, 25, 3);
    rect(510, 150, 6, 25, 3);

    // Counter top
    fill(100, 90, 80);
    rect(35, 325, 535, 25, 5);
    fill(190, 125, 75);
    rect(45, 350, 515, 115, 5);

    // Oven
    fill(70, 70, 75);
    rect(220, 370, 150, 80, 8);
    fill(145, 195, 210);
    rect(235, 385, 120, 50, 5);
    fill(60);
    circle(250, 375, 10);
    circle(280, 375, 10);
    circle(310, 375, 10);
    circle(340, 375, 10);

    // Fridge
    fill(220, 230, 235);
    rect(625, 115, 125, 335, 10);
    fill(185, 205, 215);
    rect(635, 125, 105, 150, 5);
    rect(635, 285, 105, 155, 5);
    fill(100, 120, 130);
    rect(720, 170, 6, 45, 3);
    rect(720, 325, 6, 45, 3);
  }
}

function drawGarden() {
  // Wooden garden bed
  fill(115, 75, 45);
  stroke(80, 50, 30);
  strokeWeight(4);
  rect(570, 490, 155, 95, 10);

  // Soil
  noStroke();
  fill(85, 55, 35);
  rect(580, 500, 135, 75, 6);

  if (!gardenPlanted) {
    // Empty garden
    fill(200, 175, 125);
    ellipse(647, 538, 35, 14);

    fill(255);
    textAlign(CENTER, CENTER);
    textSize(13);
    text("Empty plot", 647, 560);

  } else if (Date.now() < gardenReadyAt) {
    // Growing plant
    stroke(35, 110, 45);
    strokeWeight(5);
    line(647, 555, 647, 525);

    noStroke();
    fill(70, 180, 75);
    ellipse(635, 535, 20, 10);
    ellipse(659, 529, 20, 10);

    fill(255);
    textAlign(CENTER, CENTER);
    textSize(12);
    text("Growing...", 647, 565);

  } else {
    // Berry bush
    stroke(35, 110, 45);
    strokeWeight(5);
    line(647, 558, 647, 522);

    noStroke();
    fill(55, 150, 65);
    ellipse(628, 532, 35, 28);
    ellipse(650, 523, 38, 32);
    ellipse(669, 535, 32, 25);

    // Berries
    fill(210, 35, 70);
    circle(630, 531, 13);
    circle(650, 521, 13);
    circle(665, 536, 13);

    fill(255);
    textAlign(CENTER, CENTER);
    textSize(12);
    text("Ready!", 647, 565);
  }

  // Restore text alignment
  textAlign(LEFT, BASELINE);
}

function drawNamingScreen() {
  background(120, 180, 220);

  fill(255);
  textAlign(CENTER);
  textSize(32);
  text("Name your Eevee!", width / 2, 200);

  textSize(20);
  text("Choose a name for your pet:", width / 2, 270);
}

function drawGardenSeedMenu() {
  fill(240, 230, 200);
  stroke(80, 60, 40);
  strokeWeight(3);
  rect(230, 220, 340, 300, 12);

  noStroke();
  fill(40);
  textAlign(CENTER, CENTER);
  textSize(24);
  text("Choose a Seed", 400, 250);

  let seedsFound = 0;

  for (let i = 0; i < inventory.length; i++) {
    let item = shopItems.find(
      shopItem => shopItem.id === inventory[i]
    );

    if (item && item.type === "seed") {
      let y = 285 + seedsFound * 55;

      fill(210, 200, 170);
      rect(255, y - 20, 290, 45, 8);

      fill(30);
      textSize(18);
      text(item.name, 400, y + 2);

      seedsFound++;
    }
  }

  if (seedsFound === 0) {
    fill(80);
    textSize(16);
    text("You don't have any seeds!", 400, 330);
  }

  fill(180, 80, 80);
  rect(335, 460, 130, 35, 8);

  fill(255);
  textSize(16);
  text("Close", 400, 478);

  textAlign(LEFT, BASELINE);
}

function drawRoomButton(x, y, w, h, label, roomName) {
  imageMode(CENTER);
  if (room == roomName) {
    fill(100, 190, 130); // Current room
  } else {
    fill(235, 235, 235);
  }

  stroke(70, 70, 70);
  strokeWeight(2);
  rect(x, y, w, h, 10);

  noStroke();
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(15);
  text(label, x + w / 2, y + h / 2);
  textAlign(LEFT, BASELINE);
}

function drawShop(x,y,w,h) {
  imageMode(CENTER);
if (
    mouseX >= x - 60 && mouseX <= x + 60 &&
    mouseY >= y - 60 && mouseY <= y + 60
  ) {
    image(imgShopOn,x,y,w + 10,h + 10)
  } else {
  image(imgShopOff,x,y,w,h);
}
}


function drawShopMenu() {
  // Shop window
  fill(230, 220, 190);
  stroke(80);
  strokeWeight(3);
  rect(150, 150, 500, 500, 15);

  // Title and coins stay in place
  noStroke();
  fill(0);
  textAlign(CENTER);
  textSize(30);
  text("Shop", 400, 180);

  textSize(16);
  text("Coins: " + coins, 400, 205);

  // Scrollable item area
  let listX = 170;
  let listY = 215;
  let listW = 460;
  let listH = 410;

  // Clip drawing to the item area
  drawingContext.save();
  drawingContext.beginPath();
  drawingContext.rect(listX, listY, listW, listH);
  drawingContext.clip();

  for (let i = 0; i < shopItems.length; i++) {
    let item = shopItems[i];

    // Move items upward as the user scrolls
    let y = 220 + i * 95 - shopScroll;

    // Item background
    fill(200);
    stroke(100);
    strokeWeight(2);
    rect(175, y, 450, 80, 10);

    // Item image
    if (items[item.id]) {
      imageMode(CORNER);
      image(items[item.id], 185, y + 10, 60, 60);
    }

    // Item name
    noStroke();
    fill(0);
    textAlign(LEFT, CENTER);
    textSize(18);
    text(item.name, 260, y + 25);

    // Price
    textSize(14);
    text(item.price + " Coins", 260, y + 55);

    // Buy button
    fill(100, 200, 100);
    rect(510, y + 20, 100, 40, 8);

    fill(0);
    textAlign(CENTER, CENTER);
    textSize(18);
    text("Buy", 560, y + 40);
  }

  drawingContext.restore();

  // Scroll hint
  noStroke();
  fill(70);
  textAlign(CENTER, CENTER);
  textSize(12);
  text("Scroll to see more items", 400, 637);

  // Message
  textSize(14);
  text(itemMessage, 400, 665);
  textAlign(LEFT, BASELINE);
}


function addItem(itemID) {
  if (inventory.length < inventorySlots) {
    inventory.push(itemID);

    storeItem("inventory", inventory);

    console.log("Received:", itemID);
  } else {
    console.log("Inventory is full!");
  }
}

function buyItem(itemID) {
  let item = shopItems.find(i => i.id === itemID);

  if (!item) return;

  if (coins < item.price) {
    itemMessage = "Not enough coins!";
    return;
  }

  if (inventory.length >= inventorySlots) {
    itemMessage = "Inventory is full!";
    return;
  }

  coins -= item.price;
  addItem(itemID);

  storeItem("coins", coins);
  itemMessage = "Bought " + item.name;
}


function sellItem() {
  if (selectedItem < 0 || selectedItem >= inventory.length) {
    return;
  }

  let itemID = inventory[selectedItem];
  let item = shopItems.find(i => i.id === itemID);

  if (!item) return;

  coins += item.sellPrice;

  inventory.splice(selectedItem, 1);
  selectedItem = -1;

  storeItem("inventory", inventory);
  storeItem("coins", coins);

  itemMessage = "Sold " + item.name;
}



function useItem() {
  if (selectedItem < 0 || selectedItem >= inventory.length) {
    return;
  }

  let itemID = inventory[selectedItem];
  let item = shopItems.find(i => i.id === itemID);

  if (!item) return;

  // Evolution stones
  if (item.type === "evolution") {
    if (species !== "Eevee") {
      itemMessage = "Cannot evolve this Pokemon!";
      return;
    }

    species = item.evolves;
    storeItem("species", species);
    itemMessage = "Evolved into " + species + "!";

  // Devolution Stone
  } else if (item.type === "devolution") {
    if (species === "Eevee") {
      itemMessage = "Already an Eevee!";
      return;
    }

    species = "Eevee";
    storeItem("species", species);
    itemMessage = "Changed back into Eevee!";

  // Berry Seed
  } else if (item.type === "seed") {
    if (room !== "outside") {
      itemMessage = "You can only plant seeds outside!";
      return;
    }

    if (gardenPlanted) {
      itemMessage = "You already planted a seed!";
      return;
    }

    gardenPlanted = true;
    gardenReadyAt = Date.now() + gardenGrowTime;

    storeItem("gardenPlanted", gardenPlanted);
    storeItem("gardenReadyAt", gardenReadyAt);

    itemMessage = "Planted! Berries grow in 30 seconds.";

  // Food
  } else if (item.type === "food") {
    changeStat("hunger", item.hunger);
    itemMessage = "Fed " + species + "!";

  } else {
    itemMessage = "Cannot use this item!";
    return;
  }

  // Remove the used item after successful use
  inventory.splice(selectedItem, 1);
  selectedItem = -1;

  storeItem("inventory", inventory);
}


function drawInventory(x,y,w,h) {
  if (
    mouseX >= x - 60 && mouseX <= x + 60 &&
    mouseY >= y - 60 && mouseY <= y + 60
  ) {
    image(imgInventoryOn,x,y,w + 10, h + 10);
  } else {
  image(imgInventoryOff,x,y,w,h);
}
}

function drawSettings(x,y,w,h) {
  if (
    mouseX >= x - 60 && mouseX <= x + 60 &&
    mouseY >= y - 60 && mouseY <= y + 60
  ) {
    image(imgSettingsOn,x,y,w + 10, h + 10);
  } else {
    image(imgSettingsOff,x,y,w,h);
  }
}

function drawSettingsMenu() {
  imageMode(CORNER);

  fill(230, 220, 190);
  stroke(80);
  strokeWeight(3);
  rect(150, 150, 500, 500, 15);

  noStroke();
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(30);
  text("Settings", 400, 185);

  if (resetConfirm) {
    textSize(20);
    text("Are you sure you want to reset?", 400, 280);

    drawButton(230, 350, 150, 55, "Yes, reset");
    drawButton(420, 350, 150, 55, "Cancel");

  } else if (settingsNameMode) {
    textSize(18);
    text("Enter your pet's new name:", 400, 280);

  } else {
    textSize(18);
    text("Pet name: " + petName, 400, 245);

    drawButton(230, 280, 150, 55, "Change Name");
    drawButton(420, 280, 150, 55, "Reset Game");
  }

  textAlign(LEFT, BASELINE);
}


function drawInventoryMenu() {
  imageMode(CORNER);

  fill(230, 220, 190);
  stroke(80);
  strokeWeight(3);
  rect(150, 150, 500, 500, 15);

  noStroke();
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(30);
  text("Inventory", 400, 185);

  let slotSize = 75;
  let spacing = 90;

  for (let i = 0; i < inventorySlots; i++) {
    let col = i % 5;
    let row = floor(i / 5);

    let x = 185 + col * spacing;
    let y = 220 + row * spacing;

    // Selected slot
    if (i === selectedItem) {
      fill(255, 220, 100);
    } else {
      fill(180);
    }

    stroke(100);
    strokeWeight(2);
    rect(x, y, slotSize, slotSize, 8);

    if (i < inventory.length) {
      let itemID = inventory[i];
      let itemImage = items[itemID];

      if (itemImage) {
        image(itemImage, x + 8, y + 8, 59, 59);
      } else {
        noStroke();
        fill(0);
        textSize(12);
        textAlign(CENTER, CENTER);
        text(itemID, x + 37, y + 37);
      }
    }
  }

  // Selected item information
  if (selectedItem >= 0 && selectedItem < inventory.length) {
    let itemID = inventory[selectedItem];
    let item = shopItems.find(i => i.id === itemID);

    if (item) {
      noStroke();
      fill(0);
      textSize(22);
      text(item.name, 400, 365);

      textSize(16);
      text("Sell price: " + item.sellPrice, 400, 400);

      // Use button
      drawButton(230, 440, 150, 55, "Use");

      // Sell button
      drawButton(420, 440, 150, 55, "Sell");
    }
  }

  noStroke();
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(16);

  text(inventory.length + "/" + inventorySlots, 400, 585);
  text(itemMessage, 400, 615);
}

function drawActionButton(x, y, w, h) { 
  imageMode(CENTER);
if (
    mouseX >= x - 140 && mouseX <= x + 140 &&
    mouseY >= y - 45 && mouseY <= y + 45
  ) {
    image(imgButtonOn,x,y,w + 10,h + 10);
  } else {
  image(imgButtonOff,x,y,w,h);
}

noStroke();
  fill(0);
  textSize(28);
  textAlign(CENTER, CENTER);
  text(currentAction, x, y);
}

function drawButtonRight(x,y,w,h) {
  imageMode(CENTER);
  if (
    mouseX >= x - 20 && mouseX <= x + 20 &&
    mouseY >= y - 45 && mouseY <= y + 45
  ) {
    image(imgRightButtonOn,x,y,w + 10, h + 10);
  } else {
  image(imgRightButtonOff,x,y,w,h);
}
}

function drawButtonLeft(x,y,w,h) {
  imageMode(CENTER);
  if (
    mouseX >= x - 20 && mouseX <= x + 20 &&
    mouseY >= y - 45 && mouseY <= y + 45
  ) {
    image(imgLeftButtonOn,x,y,w+ 10 , h + 10);
  } else {
  image(imgLeftButtonOff,x,y,w,h);
}
}

function drawButton(x, y, w, h, label) {
  fill(200);
  stroke(0);
  strokeWeight(2);
  rect(x, y, w, h, 10);

  noStroke();
  fill(0);
  textSize(18);
  textAlign(CENTER, CENTER);
  text(label, x + w / 2, y + h / 2);

  textAlign(LEFT, BASELINE);
}

function changeStat(name, amount) {
  let stat = stats.find(i => i.name === name);

  if (stat) {
    stat.rate = constrain(stat.rate + amount, 0, 100);
    storeItem("stats", stats);
  }
}


function mouseWheel(event) {
  // Only scroll when the shop is open
  if (!shopOpen) {
    return;
  }

  // Only scroll when the mouse is over the item list
  if (
    mouseX >= 170 && mouseX <= 630 &&
    mouseY >= 215 && mouseY <= 625
  ) {
    // Calculate how far down the list can scroll
    let contentBottom =
      220 + (shopItems.length - 1) * 95 + 80;

    let maxScroll = max(0, contentBottom - 625);

    // Scroll down or up
    shopScroll = constrain(
      shopScroll + event.delta,
      0,
      maxScroll
    );

    return false;
  }
}

function mousePressed() {
  // Garden seed menu
if (gardenSeedMenu) {

  // Close button
  if (
    mouseX >= 335 && mouseX <= 465 &&
    mouseY >= 460 && mouseY <= 495
  ) {
    gardenSeedMenu = false;
    return;
  }

  let seedsFound = 0;

  for (let i = 0; i < inventory.length; i++) {
    let item = shopItems.find(
      shopItem => shopItem.id === inventory[i]
    );

    if (item && item.type === "seed") {
      let y = 285 + seedsFound * 55;

      if (
        mouseX >= 255 && mouseX <= 545 &&
        mouseY >= y - 20 && mouseY <= y + 25
      ) {
        if (gardenPlanted) {
          itemMessage = "This plot is already planted!";
          gardenSeedMenu = false;
          return;
        }

        // Plant the selected seed
        gardenPlanted = true;
        gardenReadyAt = Date.now() + gardenGrowTime;

        // Remove the seed from inventory
        inventory.splice(i, 1);

        storeItem("inventory", inventory);
        storeItem("gardenPlanted", gardenPlanted);
        storeItem("gardenReadyAt", gardenReadyAt);

        itemMessage = "Seed planted!";
        gardenSeedMenu = false;
        return;
      }

      seedsFound++;
    }
  }

  return;
}

// Click the garden plot
if (
  room === "outside" &&
  mouseX >= 570 && mouseX <= 725 &&
  mouseY >= 490 && mouseY <= 585
) {
  if (!gardenPlanted) {
    gardenSeedMenu = true;
    return;
  }

  if (Date.now() < gardenReadyAt) {
    itemMessage = "Your plant is still growing!";
    return;
  }

  if (inventory.length >= inventorySlots) {
    itemMessage = "Your inventory is full!";
    return;
  }

  // Harvest a Berry
  addItem("berry");

  // Start the next growing cycle
  gardenReadyAt = Date.now() + gardenGrowTime;
  storeItem("gardenReadyAt", gardenReadyAt);

  itemMessage = "You harvested a Berry!";
  return;
}

// SETTINGS MENU
if (settingsOpen) {


  if (settingsNameMode) {
    return;
  }

  // Reset confirmation
  if (resetConfirm) {

    // Yes
    if (
      mouseX >= 230 && mouseX <= 380 &&
      mouseY >= 350 && mouseY <= 405
    ) {
      resetGame();
      return;
    }

    // Cancel
    if (
      mouseX >= 420 && mouseX <= 570 &&
      mouseY >= 350 && mouseY <= 405
    ) {
      resetConfirm = false;
      return;
    }

    return;
  }

  // Change name
  if (
    mouseX >= 230 && mouseX <= 380 &&
    mouseY >= 280 && mouseY <= 335
  ) {
    settingsNameMode = true;

    settingsNameInput.value(petName);
    settingsNameInput.show();
    saveNameButton.show();
    cancelNameButton.show();

    return;
  }

  // Reset game
  if (
    mouseX >= 420 && mouseX <= 570 &&
    mouseY >= 280 && mouseY <= 335
  ) {
    resetConfirm = true;
    return;
  }

  // Prevent clicking through the settings window
  if (
    mouseX >= 150 && mouseX <= 650 &&
    mouseY >= 150 && mouseY <= 650
  ) {
    return;
  }
}

  // INVENTORY
  if (inventoryOpen) {

    // Select inventory slot
    for (let i = 0; i < inventorySlots; i++) {
      let col = i % 5;
      let row = floor(i / 5);

      let x = 185 + col * 90;
      let y = 220 + row * 90;

      if (
        mouseX >= x && mouseX <= x + 75 &&
        mouseY >= y && mouseY <= y + 75
      ) {
        if (i < inventory.length) {
          selectedItem = i;
        } else {
          selectedItem = -1;
        }
        return;
      }
    }

    // Use button
    if (
      mouseX >= 230 && mouseX <= 380 &&
      mouseY >= 440 && mouseY <= 495
    ) {
      useItem();
      return;
    }

    // Sell button
    if (
      mouseX >= 420 && mouseX <= 570 &&
      mouseY >= 440 && mouseY <= 495
    ) {
      sellItem();
      return;
    }

    // Prevent clicking through inventory
    if (mouseX >= 150 && mouseX <= 650 &&
        mouseY >= 150 && mouseY <= 650) {
      return;
    }
  }

  
  // SHOP
  if (shopOpen) {
    // Buy buttons use the same scroll offset as the drawings
    for (let i = 0; i < shopItems.length; i++) {
      let y = 220 + i * 95 - shopScroll;

      if (
        mouseX >= 510 && mouseX <= 610 &&
        mouseY >= 215 && mouseY <= 625 &&
        mouseY >= y + 20 && mouseY <= y + 60
      ) {
        buyItem(shopItems[i].id);
        return;
      }
    }

    // Prevent clicking things behind the shop
    if (
      mouseX >= 150 && mouseX <= 650 &&
      mouseY >= 150 && mouseY <= 650
    ) {
      return;
    }
  }


  // INVENTORY BUTTON
  if (//440,70,130,130
    mouseX > 380 && mouseX < 500 &&
    mouseY > 15 && mouseY < 120
  ) {
    inventoryOpen = !inventoryOpen;
    shopOpen = false;
    settingsOpen = false;
    selectedItem = -1;
    itemMessage = "";
    return;
  }

  // SHOP BUTTON
  if (
    mouseX > 530 && mouseX < 650 &&
    mouseY > 15 && mouseY < 120
  ) {
    shopOpen = !shopOpen;
    inventoryOpen = false;
    settingsOpen = false;
    itemMessage = "";
    return;
  }

 // SETTINGS BUTTON
if (
  mouseX > 680 && mouseX < 780 &&
  mouseY > 15 && mouseY < 120
) {
  shopOpen = false;
  settingsOpen = !settingsOpen;
  inventoryOpen = false;
  resetConfirm = false;
  closeNameEditor();
  itemMessage = "";
  return;
}

  
// ACTION BUTTON
if (
  mouseX >= 265 && mouseX <= 535 &&
  mouseY >= 620 && mouseY <= 720
) {
  if (rooms === 0) {
    // Outside
    if (gardenPlanted && Date.now() >= gardenReadyAt) {
      if (inventory.length >= inventorySlots) {
        itemMessage = "Inventory is full!";
        return;
      }

      addItem("berry");

      gardenReadyAt = Date.now() + gardenGrowTime;
      storeItem("gardenReadyAt", gardenReadyAt);

      itemMessage = "Harvested a berry!";
    } else if (gardenPlanted) {
      itemMessage = "The berries are still growing!";
      return;
    } else {
      changeStat("happiness", 40);
      changeStat("energie", -20);
    }

  } else if (rooms === 1) {
    // Kitchen
    changeStat("hunger", 20);
    changeStat("energie", 10);

  } else if (rooms === 2) {
    // Bedroom
    changeStat("energie", 20);

  } else if (rooms === 3) {
    // Bathroom
    changeStat("health", 20);
    changeStat("happiness", -10);
  }

  gainXP(25);
  save();
  return;
}

  // LEFT ARROW
  if (
    mouseX >= 20 && mouseX <= 70 &&
    mouseY >= 400 && mouseY <= 500
  ) {
    rooms = max(0, rooms - 1);
    return;
  }

  // RIGHT ARROW
  if (
    mouseX >= 720 && mouseX <= 770 &&
    mouseY >= 400 && mouseY <= 500
  ) {
    rooms = min(3, rooms + 1);
    return;
  }
}

function getCondition() {
  let happiness = stats.find(s => s.name === "happiness").rate;
  let energie = stats.find(s => s.name === "energie").rate;
  let hunger = stats.find(s => s.name === "hunger").rate;
  let health = stats.find(s => s.name === "health").rate;

  if (
    (happiness < 10 && energie < 10 && hunger < 10) ||
    health < 20
  ) {
    return "sick";

  } else if (hunger < 20) {
    return "hungry";

  } else if (energie < 20) {
    return "sleepy";

  } else if (
    happiness < 40 ||
    hunger < 40 ||
    energie < 40 ||
    health < 40
  ) {
    return "sad";

  } else if (
    happiness < 80 &&
    hunger < 80 &&
    energie < 80 &&
    health < 80
  ) {
    return "normal";

  } else {
    return "healthy";
  }
};

function drawPet() {
  
  let condition = getCondition();

  let sprite = petSprites[species]?.[condition];

  //if sprite is not found
  if (!sprite) {
    sprite = petSprites[species]?.normal;
  }

  if (!sprite) return;

  push();
  imageMode(CENTER);
  translate(0, 50);
  image(sprite, width / 2, height / 2, 450, 300);
  pop();
}


function gainXP(amount) {
  xp += amount;

  if (xp >= level * 100) {
    xp = 0;
    level++;
    coins = coins + 50;

    console.log("Level up! Level:", level);
  }

  save();
}


function save() {
  storeItem("stats", stats);
  storeItem("level", level);
  storeItem("xp", xp);
}

function closeNameEditor() {
  settingsNameMode = false;

  settingsNameInput.hide();
  saveNameButton.hide();
  cancelNameButton.hide();
}

//cheat code for testing
function keyPressed() {
  if (key === 'r') {
   coins = coins + 100
  }
}

function resetGame() {

  // Reset pet
  petName = "Eevee";
  species = "Eevee";

  stats = [
    { name: "happiness", rate: 70 },
    { name: "energie", rate: 90 },
    { name: "hunger", rate: 60 },
    { name: "health", rate: 100 }
  ];
 
  level = 1;
  xp = 0;

  coins = 200;
  inventory = [];
  selectedItem = -1;

  gardenPlanted = false;
  gardenReadyAt = 0;
  gardenSeedMenu = false;

  rooms = 1;
  room = "kitchen";

  settingsOpen = false;
  inventoryOpen = false;
  shopOpen = false;
  settingsNameMode = false;
 
  closeNameEditor();

  itemMessage = "";

  storeItem("petName", petName);
  storeItem("species", species);
  storeItem("stats", stats);
  storeItem("level", level);
  storeItem("xp", xp);
  storeItem("coins", coins);
  storeItem("inventory", inventory);
  storeItem("gardenPlanted", gardenPlanted);
  storeItem("gardenReadyAt", gardenReadyAt);

  console.log("Game has been reset!");
}