let board;
let player;
let winner;
let finish;
let gamestart = 0;
let playercount = 0;
let player1 
let player2 
let player3 
let player4 
function setup() {
  createCanvas(600, 700);
  background(200);
 player1 = color(0, 100, 255);
 player2 = color(255, 50, 50);
 player3 = color(0, 250, 50);
 player4 = color(255, 105, 180);
}

function draw() {

  // MENU
  if (gamestart == 0) {

    background(200);

    fill(0, 100, 255);
    rect(200, 100, 120, 70, 10);

    fill(255, 50, 50);
    rect(200, 300, 120, 70, 10);

    fill(0, 250, 50);
    rect(200, 500, 120, 70, 10);

    strokeWeight(5);
    stroke(0);
    fill(255);

    text("2 players", 235, 135);
    text("3 players", 235, 335);
    text("4 players", 235, 535);
  }

  // GAME
  else {

    // Background turn colour
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

    else {
      fill(255);
      text(winner, width / 2, 80);
    }

    tekenBord();
  }
}

function tekenBord() {

  let grootte;
 
  // board X players
  if (playercount == 2) {
    grootte = 130;
    bordGrootte = 3;
  }
  else if (playercount == 3) {
    grootte = 100;
    bordGrootte = 4;
  }
  else if (playercount == 4) {
    grootte = 75;
    bordGrootte = 5;
  }

  let startX = 75;
  let startY = 120;

  // board
  fill(0);
  stroke(0);
  strokeWeight(8);

  rect(startX, startY,
       grootte * bordGrootte,
       grootte * bordGrootte);


  // cells
  for (let rij = 0; rij < bordGrootte; rij++) {

    for (let kolom = 0; kolom < bordGrootte; kolom++) {

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

    // 2 PLAYERS
    if (mouseX >= 200 && mouseX < 320 &&
        mouseY >= 100 && mouseY < 170) {

      playercount = 2;
      startGame();
    }

    // 3 PLAYERS
    else if (mouseX >= 200 && mouseX < 320 &&
             mouseY >= 300 && mouseY < 370) {

      playercount = 3;
      startGame();
    }

    // 4 PLAYERS
    else if (mouseX >= 200 && mouseX < 320 &&
             mouseY >= 500 && mouseY < 570) {

      playercount = 4;
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

    // finish
    if (finish) {
      return;
    }

    let grootte;

    if (playercount == 2) {
      grootte = 130;
    }
    else if (playercount == 3) {
      grootte = 100;
    }
    else {
      grootte = 75;
    }

    let bordGrootte = playercount + 1;
    let startX = 75;
    let startY = 120;

    // mouse position
    if (mouseX >= startX &&
        mouseX < startX + grootte * bordGrootte &&
        mouseY >= startY &&
        mouseY < startY + grootte * bordGrootte) {


      let kolom = floor((mouseX - startX) / grootte);
      let rij = floor((mouseY - startY) / grootte);

      // Check if empty
      if (board[rij][kolom] == "") {

        board[rij][kolom] = player;

        // Check winner
        if (controleerWinnaar()) {
          finish = true;
          winner = "player " + player + " heeft gewonnen!";
        }

        // Check draw
        else if (bordVol()) {

          finish = true;
          winner = "Gelijkspel!";
        }

        // Next player
        else {
          player = player + 1;

          if (player > playercount) {
            player = 1;
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

  let bordGrootte = playercount + 1;
  board = [];
  for (let rij = 0; rij < bordGrootte; rij++) {

    board[rij] = [];

    for (let kolom = 0; kolom < bordGrootte; kolom++) {

      board[rij][kolom] = "";
    }
  }
}

function controleerWinnaar() {
  let bordGrootte = playercount + 1;

  // Check rows
  for (let rij = 0; rij < bordGrootte; rij++) {

    let winnaar = true;

    for (let kolom = 0; kolom < bordGrootte; kolom++) {

      if (board[rij][kolom] != player) {
        winnaar = false;
      }
    }

    if (winnaar) {
      return true;
    }
  }

  // Check columns
  for (let kolom = 0; kolom < bordGrootte; kolom++) {

    let winnaar = true;

    for (let rij = 0; rij < bordGrootte; rij++) {

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

  for (let i = 0; i < bordGrootte; i++) {

    if (board[i][i] != player) {
      winnaar = false;
    }
  }

  if (winnaar) {
    return true;
  }

  // Check diagonal from top-right
  winnaar = true;

  for (let i = 0; i < bordGrootte; i++) {

    if (board[i][bordGrootte - 1 - i] != player) {
      winnaar = false;
    }
  }

  if (winnaar) {
    return true;
  }

  return false;
}

function bordVol() {

  let bordGrootte = playercount + 1;

  for (let rij = 0; rij < bordGrootte; rij++) {

    for (let kolom = 0; kolom < bordGrootte; kolom++) {

      if (board[rij][kolom] == "") {
        return false;
      }
    }
  }

  return true;
}