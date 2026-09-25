let board;
let player;
let winner;
let finish;
let gamestart = 0;
let playercount = 0;
let player1;
let player2;
let player3;
let player4;

let botMode = false;

function setup() {
  createCanvas(600, 700);
  background(200);

player1 = color(0, 100, 255);
player2 = color(255, 50, 50);
player3 = color(0, 250, 50);
player4 = color(255, 105, 180);

colorPicker1 = createColorPicker("#0064FF");
colorPicker2 = createColorPicker("#FF3232");
colorPicker3 = createColorPicker("#00FA32");
colorPicker4 = createColorPicker("#FF69B4");

colorPicker1.position(350, 65);
colorPicker2.position(350, 215);
colorPicker3.position(350, 365);
colorPicker4.position(350, 515);

colorPicker1.hide();
colorPicker2.hide();
colorPicker3.hide();
colorPicker4.hide();
}

function draw() {
  if (gamestart == 0) {

  colorPicker1.show();
  colorPicker2.show();
  colorPicker3.show();
  colorPicker4.show();

  player1 = colorPicker1.color();
  player2 = colorPicker2.color();
  player3 = colorPicker3.color();
  player4 = colorPicker4.color();

  background(200);
  } else {

  colorPicker1.hide();
  colorPicker2.hide();
  colorPicker3.hide();
  colorPicker4.hide();
  }
  // MENU
  if (gamestart == 0) {

    background(200);

    // 1 PLAYER
    fill(player1);
    rect(200, 50, 120, 70, 10);

    // 2 PLAYERS
    fill(player2);
    rect(200, 200, 120, 70, 10);

    // 3 PLAYERS
    fill(player3);
    rect(200, 350, 120, 70, 10);

    // 4 PLAYERS
    fill(player4);
    rect(200, 500, 120, 70, 10);

    strokeWeight(5);
    stroke(0);
    fill(255);
    textSize(16);

    text("1 player", 235, 85);
    text("2 players", 235, 235);
    text("3 players", 235, 385);
    text("4 players", 235, 535);
  }

  // GAME
  else {

    // Background turn color
    if (player == 1) {
      background(0, 100, 255);
    }
    else if (player == 2) {
      background(255, 50, 50);
    }
    else if (player == 3) {
      background(0, 250, 50);
    }
    else if (player == 4) {
      background(255, 105, 180);
    }

    textSize(22);

    strokeWeight(5);
    stroke(0);
    fill(150);

    text("reset", 240, 600);
    text("menu", 240, 650);

    // Player turn
    if (!finish) {

      fill(255);

      if (botMode) {
        if (player == 1) {
          text("Player 1 - Blue", width / 2, 80);
        }
        else {
          text("Bot - Red", width / 2, 80);
        }
      }
      else {
        if (player == 1) {
          text("player 1 - Blue", width / 2, 80);
        }
        else if (player == 2) {
          text("player 2 - Red", width / 2, 80);
        }
        else if (player == 3) {
          text("player 3 - Green", width / 2, 80);
        }
        else if (player == 4) {
          text("player 4 - pink", width / 2, 80);
        }
      }
    }

    else {
      fill(255);
      text(winner, width / 2, 80);
    }

    drawBoard();

    // BOT TURN
    if (botMode && player == 2 && !finish) {
      botMove();
    }
  }
}

function drawBoard() {

  let grootte;

  // board size
  if (playercount == 1) {
    grootte = 130;
    boardGrootte = 3;
  }
  else if (playercount == 2) {
    grootte = 130;
    boardGrootte = 3;
  }
  else if (playercount == 3) {
    grootte = 100;
    boardGrootte = 4;
  }
  else if (playercount == 4) {
    grootte = 75;
    boardGrootte = 5;
  }

  let startX = 75;
  let startY = 120;

  // board
  fill(0);
  stroke(0);
  strokeWeight(8);

  rect(startX, startY,
       grootte * boardGrootte,
       grootte * boardGrootte);

  // cells
  for (let rij = 0; rij < boardGrootte; rij++) {

    for (let kolom = 0; kolom < boardGrootte; kolom++) {

      let x = startX + kolom * grootte;
      let y = startY + rij * grootte;

      fill(200);
      stroke(0);
      strokeWeight(2);

      rect(x, y, grootte, grootte, 10);

      // PLAYER 1
      if (board[rij][kolom] == 1) {

        stroke(player1);
        strokeWeight(8);

        line(x + 30, y + 30,
             x + grootte - 30,
             y + grootte - 30);

        line(x + grootte - 30, y + 30,
             x + 30,
             y + grootte - 30);
      }

      // PLAYER 2
      else if (board[rij][kolom] == 2) {

        noFill();
        stroke(player2);
        strokeWeight(8);

        circle(x + grootte / 2,
               y + grootte / 2,
               grootte - 60);
      }

      // PLAYER 3
      else if (board[rij][kolom] == 3) {

        noFill();
        stroke(player3);
        strokeWeight(6);

        if (playercount == 3) {
          rect(x + 30, y + 30, grootte - 60);
        }
        else {
          push();
          translate(x, y);
          triangle(40, 25, 25, 50, 55, 50);
          pop();
        }
      }

      // PLAYER 4
      else if (board[rij][kolom] == 4) {

        noFill();
        stroke(player4);
        strokeWeight(8);

        rect(x + 30, y + 30, grootte - 60);
      }
    }
  }
}

function mousePressed() {

  // MENU
  if (gamestart == 0) {

    // 1 PLAYER
    if (mouseX >= 200 && mouseX < 320 &&
        mouseY >= 50 && mouseY < 120) {

      playercount = 1;
      botMode = true;
      startGame();
    }

    // 2 PLAYERS
    else if (mouseX >= 200 && mouseX < 320 &&
             mouseY >= 200 && mouseY < 270) {

      playercount = 2;
      botMode = false;
      startGame();
    }

    // 3 PLAYERS
    else if (mouseX >= 200 && mouseX < 320 &&
             mouseY >= 350 && mouseY < 420) {

      playercount = 3;
      botMode = false;
      startGame();
    }

    // 4 PLAYERS
    else if (mouseX >= 200 && mouseX < 320 &&
             mouseY >= 500 && mouseY < 570) {

      playercount = 4;
      botMode = false;
      startGame();
    }
  }

  // GAME
  else {

    // RESET
    if (mouseX >= 150 && mouseX < 300 &&
        mouseY >= 570 && mouseY < 620) {

      startGame();
      return;
    }

    // MENU
    if (mouseX >= 150 && mouseX < 300 &&
        mouseY >= 630 && mouseY < 660) {

      gamestart = 0;
      return;
    }

    if (finish) {
      return;
    }

    if (botMode && player == 2) {
      return;
    }

    let grootte;

    if (playercount == 1 || playercount == 2) {
      grootte = 130;
    }
    else if (playercount == 3) {
      grootte = 100;
    }
    else {
      grootte = 75;
    }
    let boardGrootte;

    if (playercount == 1) {
      boardGrootte = 3;
    }
    else {
      boardGrootte = playercount + 1;
    }

    let startX = 75;
    let startY = 120;

    // mouse position
    if (mouseX >= startX &&
        mouseX < startX + grootte * boardGrootte &&
        mouseY >= startY &&
        mouseY < startY + grootte * boardGrootte) {

      let kolom = floor((mouseX - startX) / grootte);
      let rij = floor((mouseY - startY) / grootte);

      // Check if empty
      if (board[rij][kolom] == "") {

        board[rij][kolom] = player;

        // Check winner
        if (controleerWinnaar()) {

          finish = true;

          if (botMode && player == 1) {
            winner = "Player 1 heeft gewonnen!";
          }
          else {
            winner = "player " + player + " heeft gewonnen!";
          }
        }

        // Check draw
        else if (boardVol()) {

          finish = true;
          winner = "Gelijkspel!";
        }

        // Next player
        else {

          player = player + 1;

          if (player > playercount && !botMode) {
            player = 1;
          }

         
          if (botMode) {
            player = 2;
          }
        }
      }
    }
  }
}

function startGame() {

  gamestart = 1;

  player = 1;

  winner = 0;
  finish = false;

  let boardGrootte;

  if (botMode) {
    boardGrootte = 3;
  }
  else {
    boardGrootte = playercount + 1;
  }

  board = [];

  for (let rij = 0; rij < boardGrootte; rij++) {

    board[rij] = [];

    for (let kolom = 0; kolom < boardGrootte; kolom++) {

      board[rij][kolom] = "";
    }
  }
}

function botMove() {

  
  if (frameCount % 20 != 0) {
    return;
  }

  let boardGrootte = 3;

  //Bot win?
  for (let rij = 0; rij < boardGrootte; rij++) {

    for (let kolom = 0; kolom < boardGrootte; kolom++) {

      if (board[rij][kolom] == "") {

        board[rij][kolom] = 2;

        if (controleerWinnaar()) {

          finish = true;
          winner = "Bot heeft gewonnen!";
          return;
        }

        board[rij][kolom] = "";
      }
    }
  }

  //Can player win next turn?
  for (let rij = 0; rij < boardGrootte; rij++) {

    for (let kolom = 0; kolom < boardGrootte; kolom++) {

      if (board[rij][kolom] == "") {

        board[rij][kolom] = 1;

        if (controleerWinnaar()) {

          // Block player
          board[rij][kolom] = 2;

          player = 1;

          return;
        }

        board[rij][kolom] = "";
      }
    }
  }

  // random
  let emptySpaces = [];

  for (let rij = 0; rij < boardGrootte; rij++) {

    for (let kolom = 0; kolom < boardGrootte; kolom++) {

      if (board[rij][kolom] == "") {

        emptySpaces.push({
          rij: rij,
          kolom: kolom
        });
      }
    }
  }

  if (emptySpaces.length > 0) {

    let keuze = random(emptySpaces);

    board[keuze.rij][keuze.kolom] = 2;

    // Check winner
    if (controleerWinnaar()) {

      finish = true;
      winner = "Bot heeft gewonnen!";
      return;
    }

    // Check draw
    if (boardVol()) {

      finish = true;
      winner = "Gelijkspel!";
      return;
    }

    // Back to player
    player = 1;
  }
}


function controleerWinnaar() {

  let boardGrootte;

  if (botMode) {
    boardGrootte = 3;
  }
  else {
    boardGrootte = playercount + 1;
  }

  // Check rows
  for (let rij = 0; rij < boardGrootte; rij++) {

    let winnaar = true;

    for (let kolom = 0; kolom < boardGrootte; kolom++) {

      if (board[rij][kolom] != player) {
        winnaar = false;
      }
    }

    if (winnaar) {
      return true;
    }
  }

  // Check columns
  for (let kolom = 0; kolom < boardGrootte; kolom++) {

    let winnaar = true;

    for (let rij = 0; rij < boardGrootte; rij++) {

      if (board[rij][kolom] != player) {
        winnaar = false;
      }
    }

    if (winnaar) {
      return true;
    }
  }

  // Check diagonal from top-left
  let winnaar = true;

  for (let i = 0; i < boardGrootte; i++) {

    if (board[i][i] != player) {
      winnaar = false;
    }
  }

  if (winnaar) {
    return true;
  }

  // Check diagonal from top-right
  winnaar = true;

  for (let i = 0; i < boardGrootte; i++) {

    if (board[i][boardGrootte - 1 - i] != player) {
      winnaar = false;
    }
  }

  if (winnaar) {
    return true;
  }

  return false;
}


function boardVol() {

  let boardGrootte;

  if (botMode) {
    boardGrootte = 3;
  }
  else {
    boardGrootte = playercount + 1;
  }

  for (let rij = 0; rij < boardGrootte; rij++) {

    for (let kolom = 0; kolom < boardGrootte; kolom++) {

      if (board[rij][kolom] == "") {
        return false;
      }
    }
  }

  return true;
}