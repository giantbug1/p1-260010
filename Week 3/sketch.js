let board;
let player;
let winner;
let finish;
let gamestart = 0;
let playercount = 0;

function setup() {
  createCanvas(600, 700);
  background(200)
  
  

}

function draw() {
  fill(0,100,255)
  rect(200,100,120,70,10)
  fill (255,50,50)
  rect(200,300,120,70,10)
  fill(0,250,50)
  rect(200,500,120,70,10)
  strokeWeight(5);
      stroke(0);
      fill(255);
      text("2 players", 240, 135);
      text("3 players", 240, 335);
      text("4 players", 240, 535)
 if (playercount == 2) {
  if (player == 1) {
    background(0, 100, 255);
  } else if (player == 2) {
    background(255,50,50)
  }

  

  if (gamestart == 1) {
    textSize(22);


   strokeWeight(5);
      stroke(0);
      fill(150);
      text("reset", 240, 600);
      text("menu", 240, 650);
   if (!finish) {
    if (player == 1) {
      strokeWeight(5);
      stroke(0);
      fill(255);
      text("player 1 - Blue", width / 2, 80);
    } else if (player == 2) {
      strokeWeight(5);
       stroke(0);
      fill(255);
      text("player 2 - Red", width / 2, 80);
    } 
  
   } else {
    stroke(0);
    fill(255);
    text("winner", width / 2, 80);
   }
  }

  if (gamestart == 1) {
 tekenBord();
  }
}
  if (playercount == 3) {
  if (player == 1) {
    background(0, 100, 255);
  } else if (player == 2) {
    background(255,50,50)
  } else {
    background(0,250,50)
  }

  

  if (gamestart == 1) {
    textSize(22);


   strokeWeight(5);
      stroke(0);
      fill(150);
      text("reset", 240, 600);
      text("menu", 240, 650);
   if (!finish) {
    if (player == 1) {
      strokeWeight(5);
      stroke(0);
      fill(255);
      text("player 1 - Blue", width / 2, 80);
    } else if (player == 2) {
      strokeWeight(5);
       stroke(0);
      fill(255);
      text("player 2 - Red", width / 2, 80);
    } else {
      strokeWeight(5);
       stroke(0);
      fill(255);
      text("player 3 - Green", width / 2, 80)
    }
  
   } else {
    stroke(0);
    fill(255);
    text("winner", width / 2, 80);
   }
  }

  if (gamestart == 1) {
 tekenBord();
  }
}
 if (playercount == 4) {
  if (player == 1) {
    background(0, 100, 255);
  } else if (player == 2) {
    background(255,50,50)
  } else if (player == 3){
    background(0,250,50)
  } else {
    background(255,105,180)
  }

  

  if (gamestart == 1) {
    textSize(22);


   strokeWeight(5);
      stroke(0);
      fill(150);
      text("reset", 240, 600);
      text("menu", 240, 650);
   if (!finish) {
    if (player == 1) {
      strokeWeight(5);
      stroke(0);
      fill(255);
      text("player 1 - Blue", width / 2, 80);
    } else if (player == 2) {
      strokeWeight(5);
       stroke(0);
      fill(255);
      text("player 2 - Red", width / 2, 80);
    } else if (player == 3) {
      strokeWeight(5);
       stroke(0);
      fill(255);
      text("player 3 - Green", width / 2, 80)
    } else {
      strokeWeight(5);
       stroke(0);
      fill(255);
      text("player 4 - pink", width / 2, 80)
    }
  
   } else {
    stroke(0);
    fill(255);
    text("winner", width / 2, 80);
   }
  }

  if (gamestart == 1) {
 tekenBord();
  }
}

}

function tekenBord() {
  if (playercount == 2) {
  let grootte = 130;
  let startX = 75;
  let startY = 120;

  
  fill(0);
  stroke(0);
  strokeWeight(8);
  rect(startX, startY, grootte * 3, grootte * 3);

  
  for (let rij = 0; rij < 3; rij++) {
    for (let kolom = 0; kolom < 3; kolom++) {

      let x = startX + kolom * grootte;
      let y = startY + rij * grootte;

      
      fill(200);
      stroke(0);
      strokeWeight(2);
      rect(x, y, grootte, grootte,10);

      
      if (board[rij][kolom] == 1) {
        
        stroke(0, 100, 255);
        strokeWeight(8);

        line(x + 30, y + 30, x + grootte - 30, y + grootte - 30);
        line(x + grootte - 30, y + 30, x + 30, y + grootte - 30);

      } else if (board[rij][kolom] == 2) {
      
        noFill();
        stroke(255, 50, 50);
        strokeWeight(8);

        circle(
          x + grootte / 2,
          y + grootte / 2,
          grootte - 60
        );
      } 
      
    }
  }
}
  if (playercount == 3) {
  let grootte = 100;
  let startX = 75;
  let startY = 120;

  
  fill(0);
  stroke(0);
  strokeWeight(8);
  rect(startX, startY, grootte * 4, grootte * 4);

  
  for (let rij = 0; rij < 4; rij++) {
    for (let kolom = 0; kolom < 4; kolom++) {

      let x = startX + kolom * grootte;
      let y = startY + rij * grootte;

      
      fill(200);
      stroke(0);
      strokeWeight(2);
      rect(x, y, grootte, grootte,10);

      
      if (board[rij][kolom] == 1) {
        
        stroke(0, 100, 255);
        strokeWeight(8);

        line(x + 30, y + 30, x + grootte - 30, y + grootte - 30);
        line(x + grootte - 30, y + 30, x + 30, y + grootte - 30);

      } else if (board[rij][kolom] == 2) {
      
        noFill();
        stroke(255, 50, 50);
        strokeWeight(8);

        circle(
          x + grootte / 2,
          y + grootte / 2,
          grootte - 60
        );
      } else if (board[rij][kolom] == 3) {

        noFill();
        stroke(50,255,50)
        strokeWeight(8)
        
        rect(x + 30, y + 30, grootte - 60)
      }
      
    }
  }
}
if (playercount == 4) {
  let grootte = 80;
  let startX = 75;
  let startY = 120;

  
  fill(0);
  stroke(0);
  strokeWeight(8);
  rect(startX, startY, grootte * 5, grootte * 5);

  
  for (let rij = 0; rij < 5; rij++) {
    for (let kolom = 0; kolom < 5; kolom++) {

      let x = startX + kolom * grootte;
      let y = startY + rij * grootte;

      
      fill(200);
      stroke(0);
      strokeWeight(2);
      rect(x, y, grootte, grootte,10);

      
      if (board[rij][kolom] == 1) {
        
        stroke(0, 100, 255);
        strokeWeight(8);

        line(x + 30, y + 30, x + grootte - 30, y + grootte - 30);
        line(x + grootte - 30, y + 30, x + 30, y + grootte - 30);

      } else if (board[rij][kolom] == 2) {
      
        noFill();
        stroke(255, 50, 50);
        strokeWeight(8);

        circle(
          x + grootte / 2,
          y + grootte / 2,
          grootte - 60
        );
      } else if (board[rij][kolom] == 3) {

        noFill();
        stroke(50,255,50)
        strokeWeight(6)
        
        push()
        translate(x,y)
        triangle(40,25,25,50,55,50,10)
        pop()
      }
      else if (board[rij][kolom] == 4) {

        noFill();
        stroke(255,105,180)
        strokeWeight(8)
        
        rect(x + 30, y + 30, grootte - 60)
      }
      
    }
  }
}
}

function mousePressed() {
  
if (gamestart == 0) {
  gamestart = 1;
 
 if (
    mouseX >= 200 && 
    mouseX < 320 && 
    mouseY >= 100 && 
    mouseY < 170) {
    board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  player = 1;
  winner = 0;
  finish = false;
  playercount = 2;
  }
 if (
    mouseX >= 200 && 
    mouseX < 320 && 
    mouseY >= 300 && 
    mouseY < 370) {
    board = [
    ["", "", "",""],
    ["", "", "",""],
    ["", "", "",""],
    ["", "", "",""],
  ];

  player = 1;
  winner = 0;
  finish = false;
  playercount = 3;
  }
  if (
    mouseX >= 200 && 
    mouseX < 320 && 
    mouseY >= 500 && 
    mouseY < 570) {
    board = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ];

  player = 1;
  winner = 0;
  finish = false;
  playercount = 4;
  }
  
} else {
  
  if (gamestart == 1) {
  if (playercount == 2) {
 if (
    mouseX >= 150 && 
    mouseX < 300 && 
    mouseY >= 570 && 
    mouseY < 620) {
    board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  player = 1;
  winner = 0;
  finish = false;
  }
 if (
   mouseX >= 150 && 
    mouseX < 300 && 
    mouseY >= 630 && 
    mouseY < 660) {
      board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  player = 1;
  winner = 0;
  finish = false;
    }
  if (finish) {
    return;
  }
 if (gamestart == 1) {
  let grootte = 130;
  let startX = 75;
  let startY = 120;

  
  if (
    mouseX >= startX &&
    mouseX < startX + grootte * 3 &&
    mouseY >= startY &&
    mouseY < startY + grootte * 3
  ) {

  
    let kolom = floor((mouseX - startX) / grootte);
    let rij = floor((mouseY - startY) / grootte);

   
    if (board[rij][kolom] == "") {

      board[rij][kolom] = player;

     
      if (controleerWinnaar()) {
        finish = true;
        winner = "player " + player + " heeft gewonnen!";
      }

      
      else if (bordVol()) {
        finish = true;
        winner = "Gelijkspel!";
      }

      
      else {
        if (player == 1) {
          player = 2;
        } else if (player == 2) {
          player = 1;
        }
      }
    }
  }
 } 
}
}
if (playercount == 3) {
 if (
    mouseX >= 150 && 
    mouseX < 300 && 
    mouseY >= 570 && 
    mouseY < 650) {
    board = [
    ["", "", "",""],
    ["", "", "",""],
    ["", "", "",""],
    ["", "", "",""],
  ];

  player = 1;
  winner = 0;
  finish = false;
  }
  if (finish) {
    return;
  }
 if (gamestart == 1) {
  let grootte = 100;
  let startX = 75;
  let startY = 120;

  
  if (
    mouseX >= startX &&
    mouseX < startX + grootte * 4 &&
    mouseY >= startY &&
    mouseY < startY + grootte * 4
  ) {

  
    let kolom = floor((mouseX - startX) / grootte);
    let rij = floor((mouseY - startY) / grootte);

   
    if (board[rij][kolom] == "") {

      board[rij][kolom] = player;

     
      if (controleerWinnaar()) {
        finish = true;
        winner = "player " + player + " heeft gewonnen!";
      }

      
      else if (bordVol()) {
        finish = true;
        winner = "Gelijkspel!";
      }

      
      else {
        if (player == 1) {
          player = 2;
        } else if (player == 2) {
          player = 3;
        } else {
          player = 1
        }
      }
    }
  }
 } 
}
if (playercount == 4) {
 if (
    mouseX >= 150 && 
    mouseX < 300 && 
    mouseY >= 570 && 
    mouseY < 650) {
    board = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ];

  player = 1;
  winner = 0;
  finish = false;
  }
  if (finish) {
    return;
  }
 if (gamestart == 1) {
  let grootte = 75;
  let startX = 75;
  let startY = 120;

  
  if (
    mouseX >= startX &&
    mouseX < startX + grootte * 5 &&
    mouseY >= startY &&
    mouseY < startY + grootte * 5
  ) {

  
    let kolom = floor((mouseX - startX) / grootte);
    let rij = floor((mouseY - startY) / grootte);

   
    if (board[rij][kolom] == "") {

      board[rij][kolom] = player;

     
      if (controleerWinnaar()) {
        finish = true;
        winner = "player " + player + " heeft gewonnen!";
      }

      
      else if (bordVol()) {
        finish = true;
        winner = "Gelijkspel!";
      }

      
      else {
        if (player == 1) {
          player = 2;
        } else if (player == 2) {
          player = 3;
        } else if (player == 3) {
          player = 4;
        } else {
          player = 1;
        }
      }
    }
  }
 } 
}
}
}

function controleerWinnaar() {
  if(playercount == 2) {
  
  for (let rij = 0; rij < 3; rij++) {
    if (
      board[rij][0] != "" &&
      board[rij][0] == board[rij][1] &&
      board[rij][1] == board[rij][2] 
    ) {
      return true;
    }
  }

 
  for (let kolom = 0; kolom < 3; kolom++) {
    if (
      board[0][kolom] != "" &&
      board[0][kolom] == board[1][kolom] &&
      board[1][kolom] == board[2][kolom] 
    ) {
      return true;
    }
  }


  if (
    board[0][0] != "" &&
    board[0][0] == board[1][1] &&
    board[1][1] == board[2][2] 
  ) {
    return true;
  }


  if (
    board[0][2] != "" &&
    board[0][2] == board[1][1] &&
    board[1][1] == board[2][0] 
  ) {
    return true;
  }

  return false;
}
 if(playercount == 3) {
  
  for (let rij = 0; rij < 4; rij++) {
    if (
      board[rij][0] != "" &&
      board[rij][0] == board[rij][1] &&
      board[rij][1] == board[rij][2] &&
      board[rij][2] == board[rij][3]
    ) {
      return true;
    }
  }

 
  for (let kolom = 0; kolom < 4; kolom++) {
    if (
      board[0][kolom] != "" &&
      board[0][kolom] == board[1][kolom] &&
      board[1][kolom] == board[2][kolom] &&
      board[2][kolom] == board[3][kolom]
    ) {
      return true;
    }
  }


  if (
    board[0][0] != "" &&
    board[0][0] == board[1][1] &&
    board[1][1] == board[2][2] &&
    board[2][2] == board[3][3]
  ) {
    return true;
  }


  if (
    board[0][2] != "" &&
    board[0][2] == board[1][1] &&
    board[1][1] == board[2][0] &&
    board[2][0] == board[3][0]
  ) {
    return true;
  }

  return false;
}
if(playercount == 4) {
  
  for (let rij = 0; rij < 5; rij++) {
    if (
      board[rij][0] != "" &&
      board[rij][0] == board[rij][1] &&
      board[rij][1] == board[rij][2] &&
      board[rij][2] == board[rij][3] &&
      board[rij][3] == board[rij][4]
    ) {
      return true;
    }
  }

 
  for (let kolom = 0; kolom < 5; kolom++) {
    if (
      board[0][kolom] != "" &&
      board[0][kolom] == board[1][kolom] &&
      board[1][kolom] == board[2][kolom] &&
      board[2][kolom] == board[3][kolom] &&
      board[3][kolom] == board[4][kolom]
    ) {
      return true;
    }
  }


  if (
    board[0][0] != "" &&
    board[0][0] == board[1][1] &&
    board[1][1] == board[2][2] &&
    board[2][2] == board[3][3] &&
    board[3][3] == board[4][4]
  ) {
    return true;
  }


  if (
    board[0][2] != "" &&
    board[0][2] == board[1][1] &&
    board[1][1] == board[2][0] &&
    board[2][0] == board[3][0] &&
    board[3][0] == board[4][0]
  ) {
    return true;
  }

  return false;
}
}

function bordVol() {
  if (playercount == 2) {
  for (let rij = 0; rij < 3; rij++) {
    for (let kolom = 0; kolom < 3; kolom++) {

      if (board[rij][kolom] == "") {
        return false;
      }
    }
  }

  return true;
}
if (playercount == 3) {
  for (let rij = 0; rij < 4; rij++) {
    for (let kolom = 0; kolom < 4; kolom++) {

      if (board[rij][kolom] == "") {
        return false;
      }
    }
  }

  return true;
}
if (playercount == 4) {
  for (let rij = 0; rij < 5; rij++) {
    for (let kolom = 0; kolom < 5; kolom++) {

      if (board[rij][kolom] == "") {
        return false;
      }
    }
  }

  return true;
}
}
