let theme = 1;
let dinoQuestions = [
  {
    question: "Wat was de grootste dino die ooit heeft bestaan?",
    choices: ["Diplodocus", "Supersaurus", "Argentinosaurus", "Brachiosaurus"],
    correct: 2
  },
  {
    question: "Welke is de grootste carnivoor?",
    choices: ["Giganotosaurus", "Spinosaurus", "Tyrannosaurus rex", "Carnotaurus"],
    correct: 0
  },
  {
    question: "Wat betekent Velociraptor?",
    choices: ["Snelle dief", "Lenige rover", "Snelle rover", "Lenige hagedis"],
    correct: 0
  },
  {
    question: "Welke dino bestond niet?",
    choices: ["Triceratops", "Elasmosaurus", "Brunosaurus", "Baryonyx"],
    correct: 2
  },
  {
    question: "Welke dino hoort niet bij dezelfde familie?",
    choices: ["Brachylophosaurus", "Maiasaura", "Edmontosaurus", "Pachycephalosaurus"],
    correct: 3
  },
  {
    question: "Wat is de favoriete prooi van de tyrannosaurus rex?",
    choices: ["Torosaurus", "Euopocephalus", "triciratops", "Ankylosaurus"],
    correct: 2
  },
  {
    question: "Bij welke dino weten we zeker welk geluid hij maakte?",
    choices: ["Hadrosaurus", "Parasaurolophus", "Saurolophus", "iguanodon"],
    correct: 1
  },
  {
    question: "Hoe heet de kleinste dino?",
    choices: ["Pterodactylus", "Anchionis", "Microraptor", "Lystrosaurus"],
    correct: 3
  },
  {
    question: "Waar of niet waar: De oviraptor bij een nest wilde eieren stelen ?",
    choices: ["Waar", "Niet waar", "Weten ze niet", "weet ik niet"],
    correct: 1
  },
  {
    question: "De tand van de Tyrannosaurus Rex was even groot als ...?",
    choices: ["Een keukenmes", "Een zakmes", "Een zwaard", "Banaan"],
    correct: 3
  }
];
let pokemonQuestions = [
  {
    question: "Welke Pokémon was oorspronkelijk bedoeld als de laatste Pokémon in de Pokédex?",
    choices: ["Mew", "Mewtwo", "Celebi", "Arceus"],
    correct: 0
  },
  {
    question: "Welke Pokémon evolueert door overdag een hoge vriendschap te hebben?",
    choices: ["Umbreon", "Espeon", "Glaceon", "Sylveon"],
    correct: 1
  },
  {
    question: "Welke van deze Pokémon is géén pseudo-legendarische Pokémon?",
    choices: ["Metagross", "Dragonite", "Tyranitar", "Lucario"],
    correct: 3
  },
  {
    question: "Welke Pokémon heeft oorspronkelijk de Ability Levitate?",
    choices: ["Gengar", "Bronzong", "Flygon", "Alle drie"],
    correct: 3
  },
  {
    question: "Welke Pokémon is nummer 150 in de National Pokédex?",
    choices: ["Mew", "Mewtwo", "Lugia", "Deoxys"],
    correct: 1
  },
  {
    question: "Welke combinatie van types had Charizard oorspronkelijk?",
    choices: ["Fire/Flying", "Fire/Dragon", "Fire/Rock", "Dragon/Flying"],
    correct: 0
  },
  {
    question: "Welke Pokémon kan veranderen in verschillende vormen afhankelijk van de tijd van de dag?",
    choices: ["Lycanroc", "Zygarde", "Deerling", "Rotom"],
    correct: 0
  },
  {
    question: "Welke van deze Pokémon is géén fossiel-Pokémon?",
    choices: ["Omanyte", "Anorith", "Onix", "Aerodactyl"],
    correct: 2
  },
  {
    question: "Welke Pokémon heeft volgens de Pokédex een connectie met het ontstaan van het universum?",
    choices: ["Arceus", "Rayquaza", "Giratina", "Dialga"],
    correct: 0
  },
  {
    question: "Welke Pokémon is de enige die van oorsprong zowel Dragon als Ice als type kan hebben?",
    choices: ["Kyurem", "Drampa", "Baxcalibur", "Noivern"],
    correct: 0
  }
];
let spaceQuestions = [
  {
    question: "Welke planeet heeft de kortste dag?",
    choices: ["Jupiter", "Mercurius", "Mars", "Saturnus"],
    correct: 0
  },
  {
    question: "Welke planeet draait bijna volledig op zijn zij?",
    choices: ["Neptunus", "Uranus", "Venus", "Saturnus"],
    correct: 1
  },
  {
    question: "Wat is een lichtjaar eigenlijk?",
    choices: [
      "De tijd die licht nodig heeft om de aarde rond te gaan",
      "De afstand die licht in één jaar aflegt",
      "De leeftijd van een ster",
      "De tijd tussen twee zonsverduisteringen"
    ],
    correct: 1
  },
  {
    question: "Welke planeet heeft de hoogste gemiddelde oppervlaktetemperatuur?",
    choices: ["Mercurius", "Venus", "Mars", "Jupiter"],
    correct: 1
  },
  {
    question: "Wat is de grootste maan van Saturnus?",
    choices: ["Europa", "Titan", "Ganymedes", "Triton"],
    correct: 1
  },
  {
    question: "Welke maan is groter dan de planeet Mercurius?",
    choices: ["Titan", "Europa", "De maan van de aarde", "Phobos"],
    correct: 0
  },
  {
    question: "Wat bevindt zich in het centrum van de Melkweg?",
    choices: [
      "Een neutronenster",
      "Een supernova",
      "Een superzwaar zwart gat",
      "Een tweede zon"
    ],
    correct: 2
  },
  {
    question: "Welke planeet heeft de sterkste winden in ons zonnestelsel?",
    choices: ["Jupiter", "Saturnus", "Neptunus", "Uranus"],
    correct: 2
  },
  {
    question: "Waarom zien we vanaf de aarde steeds ongeveer dezelfde kant van de maan?",
    choices: [
      "De maan draait niet",
      "De aarde draait even snel als de maan",
      "De maan draait precies één keer om zijn as tijdens één baan om de aarde",
      "De zon houdt de maan op zijn plaats"
    ],
    correct: 2
  },
  {
    question: "Welke ster staat het dichtst bij de zon?",
    choices: ["Sirius", "Proxima Centauri", "Polaris", "Betelgeuse"],
    correct: 1
  }
];
let minecraftQuestions = [
  {
    question: "Welke vijandige mob kan niet natuurlijk in de Overworld spawnen?",
    choices: ["Creeper", "Blaze", "Zombie", "Skeleton"],
    correct: 1
  },
  {
    question: "Waarvoor heb je een Nether Star nodig?",
    choices: ["Een Enchanting Table", "Een Beacon", "Een Ender Chest", "Een Respawn Anchor"],
    correct: 1
  },
  {
    question: "Welke mob laat Ender Pearls vallen?",
    choices: ["Enderman", "Endermite", "Shulker", "Blaze"],
    correct: 0
  },
  {
    question: "Welk materiaal heb je nodig om een Nether Portal te maken?",
    choices: ["Obsidian", "Blackstone", "Crying Obsidian", "Basalt"],
    correct: 0
  },
  {
    question: "Welke van deze mobs is oorspronkelijk een vijandige mob?",
    choices: ["Iron Golem", "Wolf", "Piglin", "Villager"],
    correct: 2
  },
  {
    question: "Wat gebeurt er als je een Creeper met een bliksemschicht raakt?",
    choices: ["Hij verdwijnt", "Hij wordt een Charged Creeper", "Hij verandert in een Zombie", "Hij explodeert meteen"],
    correct: 1
  },
  {
    question: "Welke Minecraft-dimensie bevat de Ender Dragon?",
    choices: ["Nether", "Overworld", "The End", "Deep Dark"],
    correct: 2
  },
  {
    question: "Welke mob kan door muren heen teleporteren?",
    choices: ["Enderman", "Warden", "Ghast", "Vex"],
    correct: 0
  },
  {
    question: "Wat heb je nodig om een Enchanting Table te maken?",
    choices: ["2 diamanten", "1 diamant", "4 diamanten", "Geen diamanten"],
    correct: 1
  },
  {
    question: "Welke van deze blokken kan niet met een gewone pickaxe worden gedolven?",
    choices: ["Stone", "Diamond Ore", "Obsidian", "Deepslate"],
    correct: 2
  }
];
let greekQuestions = [
  {
    question: "Wie is de god van de zee in de Griekse mythologie?",
    choices: ["Zeus", "Hades", "Poseidon", "Ares"],
    correct: 2
  },
  {
    question: "Wie is de god van de onderwereld?",
    choices: ["Hades", "Hermes", "Apollo", "Hephaistos"],
    correct: 0
  },
  {
    question: "Welke held versloeg de Minotaurus?",
    choices: ["Perseus", "Theseus", "Achilles", "Odysseus"],
    correct: 1
  },
  {
    question: "Wat was de naam van het schip van Jason en de Argonauten?",
    choices: ["Argo", "Olympus", "Pegasus", "Aegis"],
    correct: 0
  },
  {
    question: "Wie was de vader van de goden volgens de Olympische mythologie?",
    choices: ["Zeus", "Uranus", "Cronus", "Poseidon"],
    correct: 2
  },
  {
    question: "Welke godin werd geboren uit het hoofd van Zeus?",
    choices: ["Aphrodite", "Artemis", "Athena", "Hera"],
    correct: 2
  },
  {
    question: "Wat was de zwakke plek van Achilles?",
    choices: ["Zijn hart", "Zijn hiel", "Zijn nek", "Zijn ogen"],
    correct: 1
  },
  {
    question: "Welke mythische vogel werd geassocieerd met wedergeboorte?",
    choices: ["Griffioen", "Phoenix", "Harpy", "Roc"],
    correct: 1
  },
  {
    question: "Wie werd gestraft door voor eeuwig een rotsblok een berg op te duwen?",
    choices: ["Sisyphus", "Tantalus", "Orpheus", "Icarus"],
    correct: 0
  },
  {
    question: "Welk wezen had het lichaam van een leeuw en het hoofd van een mens?",
    choices: ["Chimera", "Minotaurus", "Sfinx", "Centaur"],
    correct: 2
  }
];
let warhammerQuestions = [
  {
    question: "Welke factie bestaat uit enorme zwermen buitenaardse wezens die alles consumeren?",
    choices: ["Aeldari", "Tyranids", "Necrons", "Orks"],
    correct: 1
  },
  {
    question: "Wie zijn de Chaos Gods?",
    choices: [
      "Gork, Mork, Khorne en Nurgle",
      "Khorne, Tzeentch, Nurgle en Slaanesh",
      "Khorne, Guilliman, Tzeentch en Slaanesh",
      "Nurgle, Sanguinius, Khorne en Tzeentch"
    ],
    correct: 1
  },
  {
    question: "Welke factie bestaat uit oude, levende machines die uit hun tombes ontwaken?",
    choices: ["Necrons", "Mechanicus", "Tyranids", "Tau"],
    correct: 0
  },
  {
    question: "wie is heerst over het imperium?",
    choices: ["Roboute Guilliman", "The Emperor of Mankind", "Sanguinius", "Horus"],
    correct: 0
  },
  {
    question: "Welke Chaos God staat vooral voor ziekte en verval?",
    choices: ["Khorne", "Tzeentch", "Nurgle", "Slaanesh"],
    correct: 2
  },
  {
    question: "Wie was de eerste verader?",
    choices: ["Magnus", "Motarion", "Horus", "Lorgar"],
    correct: 3
  },
  {
    question: "Welke Primarch leidde de Ultramarines?",
    choices: ["Horus", "Rogal Dorn", "Roboute Guilliman", "Vulkan"],
    correct: 2
  },
  {
    question: "Wat is de Warp?",
    choices: [
      "Een planeet van de Imperium",
      "Een alternatieve dimensie vol psychische energie",
      "Een type Space Marine",
      "Een Necron-wapen"
    ],
    correct: 1
  },
  {
    question: "Welke factie gebruikt Titans zoals de enorme Warlord Titan?",
    choices: ["Astra Militarum", "Adeptus Mechanicus", "Imperial Knights", "Adeptus Titanicus"],
    correct: 3
  },
  {
    question: "Welke van deze is géén Chaos God?",
    choices: ["Nurgle", "Tzeentch", "Khorne", "Malal"],
    correct: 3
  }
];

let themes = [
  {
    name: "Dino`s",
    questions: dinoQuestions
  },
  {
    name: "Pokemon",
    questions: pokemonQuestions
  },
  {
    name: "Ruimte",
    questions: spaceQuestions
  },
  {
    name: "Minecraft",
    questions: minecraftQuestions
  },
  {
    name: "Greekse Mythologie",
    questions: greekQuestions
  },
  {
    name: "Warhammer",
    questions: warhammerQuestions
  }
]
let questions;
let selectedTheme = 0;
//random question order
function shuffleQuestions(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
}
//varaibles
let currentQuestion = 0;
let score = 0;

let gameStarted = false;
let gameOver = false;

let answerState = 0;
let answerLocked = false;
let timer = 20;
let restartButton;
let themeButton;

let bgDark = [20, 35, 45];
let bgLight = [35, 65, 75];

function setup() {
  createCanvas(800, 600);

  interval = setInterval(decreaseTimer, 1000);

  restartButton = createButton("SPEEL OPNIEUW");
  restartButton.position(width / 2 - 160, height / 2 + 100);
  restartButton.size(150, 45);
  restartButton.mousePressed(restartGame);
  restartButton.hide();

  themeButton = createButton("ANDER THEMA");
  themeButton.position(width / 2 + 10, height / 2 + 100);
  themeButton.size(150, 45);
  themeButton.mousePressed(changeTheme);
  themeButton.hide();
}

function draw() {
  background(bgDark);
  //title screen
  if (!gameStarted) {
    drawStartScreen();
    return;
  }
  //end screen
  if (gameOver) {
    drawGameOver();
    return;
  }
  //correct or wrong
  if (answerState == 1) {
    drawFeedback("GOED! 🦖", [70, 200, 120]);
  } 
  else if (answerState == 2) {
    drawFeedback("FOUT!", [220, 80, 80]);
  }
  textAlign(LEFT, CENTER);
//gui
  fill(255, 210, 80);
  noStroke();
  textSize(22);
  text("QUIZ", 30, 35);
   fill(255, 210, 80);
  noStroke();
  textSize(22);
  text("vraag " + (currentQuestion + 1) + "/" + questions.length, 600, 35);
  fill(255);
  text("score: " + score, 600, 55)
  let question = questions[currentQuestion].question;

  fill(35, 55, 65);
  stroke(90, 130, 130);
  strokeWeight(2);
  rectMode(CENTER);
  rect(width / 2, 170, 650, 130, 15);

  noStroke();
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(26);

  text(question, width / 2, 170, 590, 100);

  rectMode(CORNER);
  //questions
  let choices = questions[currentQuestion].choices;

  let positions = [
    [200, 330],
    [580, 330],
    [200, 420],
    [580, 420]
  ];

  for (let i = 0; i < 4; i++) {
    let x = positions[i][0];
    let y = positions[i][1];
    
   let isCorrect = answerLocked && i == questions[currentQuestion].correct;
   let isWrong = answerState == 2 && i == userChoice;

    if (isCorrect) {
      fill(60, 180, 100);
    } 
    else if (isWrong) {
      fill(210, 70, 70);
    } 
    else {
      fill(245);
    }

    stroke(80, 150, 150);
    strokeWeight(3);

    rectMode(CENTER);
    rect(x, y, 300, 65, 12);

    // Nummer
    if (isCorrect || isWrong) {
      fill(255);
    } else {
      fill(40);
    }

    noStroke();
    textAlign(LEFT, CENTER);
    textSize(17);

    text((i + 1) + ".", x - 135, y);

    textSize(16);
    text(choices[i], x , y, 230, 50);
  }

  rectMode(CORNER);

  textSize(23);
  stroke(0);
  strokeWeight(1);
  fill(255, 210, 80);
  text("Time left: " + timer + " seconds", 300, 80);
}


function drawStartScreen() {

  textAlign(CENTER, CENTER);
  // TITLE
  fill(255, 210, 80);
  stroke(0);
  strokeWeight(5);
  textSize(58);
  text("QUIZ", width / 2, 50);

  // THEME text
  noStroke();
  fill(255);
  textSize(22);
  text("Kies een thema", width / 2, 145);

  // THEMA BUTTONS
  let buttonWidth = 220;
  let buttonHeight = 60;

  let startY = 190;
  let startX = 140;

  let xspacing = 260;
  let yspacing = 85;

  for (let i = 0; i < themes.length; i++) {

    let column = i % 3;
    let row = floor(i/3);

    let x = startX + column * xspacing;
    let y = startY + row * yspacing;

    // Geselecteerd thema
    if (i == selectedTheme) {
      fill(255, 210, 80);
      stroke(255);
    } else {
      fill(35, 65, 75);
      stroke(90, 130, 130);
    }

    strokeWeight(3);
    rectMode(CENTER);
    rect(x, y, buttonWidth, buttonHeight, 12);

    // Tekst
    noStroke();
    if (i == selectedTheme) {
      fill(30);
    } else {
      fill(255);
    }

    textSize(21);

    text(themes[i].name, x, y);
  }

  // START KNOP
   let startButtonY = 390;

  fill(70, 180, 110);
  stroke(255);
  strokeWeight(3);

  rectMode(CENTER);

  rect(width / 2, startButtonY, 220, 55, 12);

  noStroke();

  fill(255);
  textSize(20);

  text("START QUIZ", width / 2, startButtonY);

  noStroke();
 
  fill(255);

  textSize(20);

  text("START QUIZ", width / 2, startButtonY);


  rectMode(CORNER);
}
function drawFeedback(message, colorValue) {
  fill(colorValue[0], colorValue[1], colorValue[2]);
  textAlign(CENTER, CENTER);
  textSize(20);
  text(message, width / 2, 530);

  fill(200);
  textSize(14);
  text("Klik om door te gaan", width / 2, 555);
}

function drawGameOver() {
  textAlign(CENTER, CENTER);

  fill(255, 210, 80);
  stroke(0);
  strokeWeight(4);
  textSize(52);
  text("QUIZ KLAAR!", width / 2, 160);

  noStroke();

  fill(255);
  textSize(28);
  text("score", width / 2, 245);

  fill(70, 200, 130);
  textSize(65);
  text(score + " / " + questions.length, width / 2, 320);

  restartButton.show();
  themeButton.show();
}

function keyPressed() {
  if (key === ' ' && !gameStarted) {
    startGame();
    timer = 10;
  }
}

function decreaseTimer() {
  if (timer > 0) {
    timer--;
  } else {
    moveToNextQuestion();
  }
}

function startGame() {
  gameStarted = true;
  gameOver = false;
  questions = [...themes[selectedTheme].questions];
  shuffleQuestions(questions)
  currentQuestion = 0;
  score = 0;
  answerState = 0;
  answerLocked = false;
  userChoice = -1;
  time = 10;
  restartButton.hide();
}

function mousePressed() {
  if (gameOver) {
    return;
  }

  if (answerLocked) {
    moveToNextQuestion();
    return;
  }

  if (!gameStarted) {
    handleThemeMenu();
    return;
  }

  // Antwoord 1
  if (
    mouseX > 30 &&
    mouseX < 330 &&
    mouseY > 297 &&
    mouseY < 363
  ) {
    chooseAnswer(0);
  }

  // Antwoord 2
  else if (
    mouseX > 270 &&
    mouseX < 570 &&
    mouseY > 297 &&
    mouseY < 363
  ) {
    chooseAnswer(1);
  }

  // Antwoord 3
  else if (
    mouseX > 30 &&
    mouseX < 330 &&
    mouseY > 387 &&
    mouseY < 453
  ) {
    chooseAnswer(2);
  }

  // Antwoord 4
  else if (
    mouseX > 270 &&
    mouseX < 570 &&
    mouseY > 387 &&
    mouseY < 453
  ) {
    chooseAnswer(3);
  }
}

function handleThemeMenu() {

  let buttonWidth = 220;

  let buttonHeight = 60;

  let startX = 140;
  let startY = 190;

  let xSpacing = 260;
  let ySpacing = 85; 


  for (let i = 0; i < themes.length; i++) {

    let column = i % 3;
    let row = floor(i / 3);

    let x = startX + column * xSpacing;
    let y = startY + row * ySpacing;

    if (
      mouseX > x - buttonWidth / 2 &&
      mouseX < x + buttonWidth / 2 &&
      mouseY > y - buttonHeight / 2 &&
      mouseY < y + buttonHeight / 2
    ) {
      selectedTheme = i;
    }
  }

let startButtonY = 390;

  if (
    mouseX > width / 2 - 110 &&
    mouseX < width / 2 + 110 &&
    mouseY > startButtonY - 27 &&
    mouseY < startButtonY + 27
  ) {

    startGame();
  }
}

function chooseAnswer(choice) {

  if (answerLocked) {
    return;
  }

  userChoice = choice;
  answerLocked = true;

  if (choice == questions[currentQuestion].correct) {
    answerState = 1;
    score++;
  } 
  else {
    answerState = 2;
  }
}

function moveToNextQuestion() {
  currentQuestion++;
  timer = 10; 
  answerState = 0;
  answerLocked = false;
  userChoice = -1;
  if (currentQuestion >= questions.length) {
    gameOver = true;
  }
}

function restartGame() {
  gameStarted = true;
  gameOver = false;

  questions = [...themes[selectedTheme].questions];
  shuffleQuestions(questions);

  currentQuestion = 0;
  score = 0;
  answerState = 0;
  answerLocked = false;
  userChoice = -1;
  timer = 10;

  restartButton.hide();
  themeButton.hide();
}

function changeTheme() {
  gameStarted = false;
  gameOver = false;

  currentQuestion = 0;
  score = 0;
  answerState = 0;
  answerLocked = false;
  userChoice = -1;

  restartButton.hide();
  themeButton.hide();
}