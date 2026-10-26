let stats = [
{name: "happiness", rate: 70}, 
{name: "energie", rate: 90}, 
{name: "hunger", rate: 60}, 
{name: "health", rate: 100}, 
];
let backgrounds = [
  "outside", "bedroom", "bathroom", "kitchen"
];

let degrationRate = 0.05;
let evo;
let species = "Eevee";
let petSprites;
let level = 1;
let xp = 0;

let buttonLeft = 0;
let buttonRight = 0;

let room;
let rooms = 2;

let img
function preload() {
imgRightButtonOn = loadImage("button on right.png");
imgRightButtonOff = loadImage("button off right.png");
imgLeftButtonOff = loadImage("button off left.png");
imgLeftButtonOn = loadImage("button on left.png");

imgNormal = loadImage("Eevee-normal.png");
imgSleepy = loadImage("Eevee-sleepy.png");
imgSad = loadImage("Eevee-sad.png");
imgHealthy = loadImage("Eevee-healthy.png");
imgSick = loadImage("Eevee-sick.png");
imgHungry = loadImage("Eevee-hungry.png");

imgVaporeonSick = loadImage("vaporeon-sick.png");
}

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
    normal: "",
    sleepy: "",
    sad: "",
    healthy: "",
    sick: imgVaporeonSick,
    hungry: ""
  }
};
  room = "kitchen"
  let savedStats = getItem("stats");

  if (savedStats !== null) {
    stats = savedStats;
  } else {
    storeItem("stats", stats);
  }

}

function draw() {
  if (rooms >= 3) {
    room = "bathroom";
  } else if (rooms == 2) {
    room = "bedroom";
  } else if (rooms == 1) {
    room = "kitchen";
  } else {
    room = "outside"
  }

  drawRoom();
  
  drawRoomButton(50, 730, 165, 42, "OUTSIDE", "outside");
  drawRoomButton(230, 730, 165, 42, "BEDROOM", "bedroom");
  drawRoomButton(410, 730, 165, 42, "BATHROOM", "bathroom");
  drawRoomButton(590, 730, 165, 42, "KITCHEN", "kitchen");

  drawButton(130, 597, 200, 46, "FEED");
  drawButton(470, 597, 200, 46, "CLEAN");
  drawButton(130, 667, 200, 46, "SLEEP");
  drawButton(470, 667, 200, 46, "PLAY");

  drawButton(600, 27, 170, 100, "inventory");

  drawButtonRight(750,450,50,100);
  drawButtonLeft(50,450,50,100)
  
  

  fill(150);
  rect(-10,-10,270,138,10);
  fill(200);
  rect(-10,-10,260,130,10);

  for (let i = 0; i < stats.length; i++) {
    let y = 32 + i * 25;
    let stat = stats[i];

    fill(0);
    textSize(16);
    text(stat.name + ":", 10, y)
  
  
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
    ellipse(420, 530, 540, 165);

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


function drawRoomButton(x, y, w, h, label, roomName) {
  if (room === roomName) {
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

function drawButtonRight(x,y,w,h) {
  if (
    mouseX >= x - 20 && mouseX <= x + 20 &&
    mouseY >= y - 45 && mouseY <= y + 45
  ) {
    image(imgRightButtonOn,x,y,w,h)
  } else {
  image(imgRightButtonOff,x,y,w,h);
}
}

function drawButtonLeft(x,y,w,h) {
  if (
    mouseX >= x - 20 && mouseX <= x + 20 &&
    mouseY >= y - 45 && mouseY <= y + 45
  ) {
    image(imgLeftButtonOn,x,y,w,h)
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

function mousePressed() {
   // Change rooms
  
   if (rooms > 0) {
   if (
    mouseX >= 20 && mouseX <= 70 &&
    mouseY >= 400 && mouseY <= 500
  ) {
    rooms = rooms - 1
    console.log(rooms)
  }
}
  if (rooms <= 4) {
  if (
    mouseX >= 780 && mouseX <= 710 &&
    mouseY >= 400 && mouseY <= 500
  ) {
    rooms = rooms + 1
    console.log(rooms)
  }
}

  if (mouseY >= 730 && mouseY <= 772) {
    if (mouseX >= 50 && mouseX <= 215) {
      room = "outside";
      return;
    } else if (mouseX >= 230 && mouseX <= 395) {
      room = "bedroom";
      return;
    } else if (mouseX >= 410 && mouseX <= 575) {
      room = "bathroom";
      return;
    } else if (mouseX >= 590 && mouseX <= 755) {
      room = "kitchen";
      return;
    }
  }
   if (
    mouseX > 600 &&
    mouseX < 770 &&
    mouseY > 27 &&
    mouseY < 127
  ) {
 
    console.log("inventory")
  }
  if (
    mouseX > 130 &&
    mouseX < 330 &&
    mouseY > 597 &&
    mouseY < 663
  ) {
    changeStat("hunger", 20);
    changeStat("energie", 10);
    console.log("feed")
  }

  else if (
    mouseX > 470 &&
    mouseX < 670 &&
    mouseY > 597 &&
    mouseY < 663
  ) {
    changeStat("health", 20);
    changeStat("happiness", -10);
    console.log("clean")
  }

  else if (
    mouseX > 130 &&
    mouseX < 330 &&
    mouseY > 667 &&
    mouseY < 733
  ) {
    changeStat("energie", 20);
    console.log("sleep")
  }

   else if (
    mouseX > 470 &&
    mouseX < 670 &&
    mouseY > 667 &&
    mouseY < 733
  ) {
    changeStat("happiness", 40);
    changeStat("energie", -20);
    console.log("play")
  }
  gainXP(25);
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

  let sprite = petSprites[species][condition];

  imageMode(CENTER);

  push();
  translate(0, 50);
  image(sprite, width / 2, height / 2, 320, 300);
  pop();
}

function gainXP(amount) {
  xp += amount;

  while (xp >= level * 100) {
    xp -= level * 100;
    level++;
    console.log("Level up! Level:", level);
  }
}

function save() {
  storeItem("stats", stats);
  storeItem("level", level);
  storeItem("xp", xp);
}