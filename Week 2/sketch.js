const ss = 700;
function getrandomcolor1() {
  return color(random(0, 255), random(0, 255), random(0, 255));
}

function getrandomcar() {
  return random(0,100);
}
function randomtower() {
  return random(10,600);
}
function randommauntain1() {
 return random(-100,700);
}
function randommauntain2() {
  return random(-100,700);
}
function randommauntain3() {
  return random(-100,700);
}
function randomstarx1() {
  return random(700);
}
function randomstary1() {
  return random(400);
}
function randomstarr1() {
  return random(1,3);
}
function randomstarx2() {
  return random(700);
}
function randomstary2() {
  return random(400);
}
function randomstarr2() {
  return random(1,3);
}
  function randomstarx3() {
  return random(700);
}
function randomstary3() {
  return random(400);
}
function randomstarr3() {
  return random(1,3);
}
function setup() {
  createCanvas(800, 600);
  noStroke();
  dayC = color(150, 220, 255);
  nightC = color(0, 0, 50);
  sunriseC = color(220, 150, 200);
  carColor1 = getrandomcolor1();
  carColor2 = getrandomcolor1();
  carvariant1 = int(getrandomcar());
  carvariant2 = int(getrandomcar());
  towerposition = randomtower();
  mauntainposition1 = randommauntain1();
  mauntainposition2 = randommauntain2();
  mauntainposition3 = randommauntain3();
 x1 = randomstarx1();
 y1 = randomstary1();
 r1 = randomstarr1();
 x2 = randomstarx2();
 y2 = randomstary2();
 r2 = randomstarr2();
 x3 = randomstarx3();
 y3 = randomstary3();
 r3 = randomstarr3();
}
 
let light = 1;

function keyPressed() {
  if (keyCode === ENTER) {
    light++;
    if (light == 4) {
      light = 1;
    }
  }
 }
let carvariant1 = 1;
let sun = 0;
let sun1 = 0;
sun1 = 40;
let z = 2;
let sun2 = 0;
sun2 = 110;
let a = 2;
let car1 = 0;
let car2 = 240;
let roadx = 1000;
let car4 = 0;
let car5 = 0;
let cloud1 = 100;
let cloud2 = 350;
let cloud3 = 0;
let leaf1 = 30;
let leafA = 0;
let leaf2 = 40;
let leafB = 1;
let leaf3 = 50;
let leafC = 1;
let leaf4 = 60;
let leafD = 1;
let time;
let C;
let night = 0;
let speedLane1G = 13;
let speedLane1O = 0;
let speedLane1R = 7;
let speedLane2G = 10;
let speedLane2O = 0;
let speedLane2R = 6;
let Lane1Start = 80;
let Lane2Start = 70;
let police = 0
let policelight = 1;
let day = 0;
let ufo = 1;
let ufospawn = 2;
let ufochance = [0,0,0,0,0,0,1]
let ufolocation = 900;
let lazer = 0;
let lazerhit = 0;
let mutation = 0;



function draw() {
  noStroke()
  time = (frameCount % 1000) / 1000;

  //day night cycle
  if (time < 0.25) {
    C = lerpColor(nightC, sunriseC, time / 0.25);
  } else if (time < 0.25) {
    C = lerpColor(sunriseC, dayC, (time - 0.25) / 0.25);
  } else if (time < 0.75) {
    C = lerpColor(dayC, sunriseC, (time - 0.5) / 0.25);
  } else {
    C = lerpColor(sunriseC, nightC, (time - 0.75) / 0.25);
  }
  
  if(time == 0.25) {
    day++
    ufospawn = ufospawn + int(random(0,2))
  }

  background(C);

  //sun
  push()
  if (time >= 0.25 && time < 0.75) {
    let sunTime = (time - 0.25) / 0.5;
    let sunX = 30 + sunTime * 740;
    push();
    noStroke();
    if (sun1 > 100) {
      z = -1;
    }
    if (sun1 < 50) {
      z = 1;
    }
    sun1 = sun1 + 1 * z;
    if (sun2 > 100) {
      a = -1;
    }
    if (sun2 < 50) {
      a = 1;
    }
    sun2 = sun2 + 1 * a;
    sun = sun + 10;
    translate(sunX, 0);
    fill(255, 140, 0, 90);
    circle(100, 100, sun1);
    fill(255, 69, 0, 90);
    circle(100, 100, sun2);
    fill(255, 255, 0);
    circle(100, 100, 50);
    pop();
  }
  
  
 
  pop()
  //moon
  if (time >= 0.75 || time < 0.25) {
    let moonTime;

    if (time >= 0.75) {
      moonTime = (time - 0.75) / 0.5;
    } else {
      moonTime = (time + 0.25) / 0.5;
    }

    let moonX = 30 + moonTime * 740;

    //stars
 if (time >= 0.75 || time < 0.25) {
 for (let i = 0; i < 80; i++) {
    
    fill(color(255, 80*r1));
    circle(x1, y1, r1);
    fill(color(255, 20*r1));
    circle(x1, y1, 2*r1);
  }
  for (let i = 0; i < 80; i++) {
    
    fill(color(255, 80*r2));
    circle(x2, y2, r2);
    fill(color(255, 20*r2));
    circle(x2, y2, 2*r2);
  }
  for (let i = 0; i < 80; i++) {
    
    fill(color(255, 80*r3));
    circle(x3, y3, r3);
    fill(color(255, 20*r3));
    circle(x3, y3, 2*r3);
  }
 
 }
    push();
    translate(moonX, 0, 0);
    fill(240);
    circle(100, 100, 50);
    fill(200);
    circle(90, 90, 13);
    circle(112, 97, 11);
    circle(102, 113, 12);
    circle(90, 104, 10);
    pop();
  }
  
  if (time >= 0.75 || time < 0.25) {
    fill(255);
    
    push();
    translate(0, 0);
    circle(447,410, 5);
    circle(708,109, 5);
    circle(128,85, 5);
    circle(706,260, 5);
    circle(27,286, 5);
    circle(744,261, 5);
    circle(115,257, 5);
    circle(226,23, 5);
    circle(746,43,5)
    circle(475,90,5)
    circle(210,164,5)
    pop();
  }

  //cloud
  push();

  cloud1 = cloud1 - 1;

  translate(cloud1, 0);
  noStroke();
  fill(221);
  circle(44, 105, 35);
  circle(0, 100, 30);
  circle(20, 100, 40);
  fill(245);
  circle(20, 105, 40);
  circle(44, 110, 35);
  circle(0, 105, 30);
  if (cloud1 < -250) {
    cloud1 = 900;
  }
  pop();
  //tower
  push();
  translate(towerposition,0)
  fill(112, 128, 144);
  rect(20, 100, 130, 600);
  fill(176, 196, 222, 50);
  rect(30, 150, 40, 40, 5);
  rect(30, 210, 40, 40, 5);
  rect(30, 280, 40, 40, 5);
  rect(30, 340, 40, 40, 5);
  rect(30, 400, 40, 40, 5);
  rect(95, 150, 40, 40, 5);
  rect(95, 210, 40, 40, 5);
  rect(95, 280, 40, 40, 5);
  rect(95, 340, 40, 40, 5);
  rect(95, 400, 40, 40, 5);
  if (time >= 0.75 || time < 0.25) {
    fill(255, 239, 213);
    rect(30, 150, 40, 40, 5);
    rect(30, 210, 40, 40, 5);
    rect(30, 280, 40, 40, 5);
    rect(30, 340, 40, 40, 5);
    rect(30, 400, 40, 40, 5);
    rect(95, 150, 40, 40, 5);
    rect(95, 210, 40, 40, 5);
    rect(95, 280, 40, 40, 5);
    rect(95, 340, 40, 40, 5);
    rect(95, 400, 40, 40, 5);
   }
  pop();
  //mauntains
  push();
  translate(mauntainposition1, 100);
  fill(70);
  triangle(220, 80, 0, 450, 460, 450);
  pop();
  fill(105);
  push();
  translate(mauntainposition2,100);
  triangle(280, 230, 0, 450, 580, 450);
  pop();
  fill(85);
  push();
  translate(mauntainposition3,100)
  triangle(130, 180, 0, 450, 260, 450);
  pop();
  noStroke(0);

  //road
  push();
  translate(0, 75);
  fill(0, 128, 0);
  rect(0, 412, 800, 5);
  fill(0, 105, 0);
  rect(0, 408, 800, 200);
  fill(105);
  rect(0, 417, 800, 5);
  fill(128);
  rect(0, 420, 800, 100);
  push();
  translate(200, 100);
  fill(40);
  rect(328, 195, 23, 75, 1);
  rect(337, 250, 5, 70, 5);
  fill(240);
  //lights off
  fill(80, 60, 0);
  circle(340, 233, 20);
  fill(0, 80, 0);
  circle(340, 255, 20);
  fill(100, 10, 0);
  circle(340, 210, 20);
  pop();
  //road stipes
  stroke(190);
  strokeWeight(5);
  let linelength = 35;
  let lingegap = 70;
  let linecount = 12;
  let roadmiddle = 467;

  for (roadx = 0; roadx < linecount; roadx++) {
    let newx = roadx * lingegap;
    line(newx, roadmiddle, newx + linelength, roadmiddle);
  }

  strokeWeight(1);

  stroke(1);

  //tree1
  push();
  noStroke();
  fill(100, 50, 19);
  rect(52, 320, 15, 90);
  if (leaf1 > 70) {
    leafA = -0.5;
  }
  if (leaf1 < 50) {
    leafA = 0.5;
  }
  leaf1 = leaf1 + 1 * leafA;
  fill(0, 130, 0);
  circle(leaf1, 300, 60);
  if (leaf2 > 70) {
    leafB = -0.5;
  }
  if (leaf2 < 50) {
    leafB = 0.5;
  }
  leaf2 = leaf2 + 1 * leafB;
  fill(0, 120, 0);
  circle(leaf2, 300, 60);
  if (leaf3 > 70) {
    leafC = -0.5;
  }
  if (leaf3 < 50) {
    leafC = 0.5;
  }
  leaf3 = leaf3 + 1 * leafC;
  fill(0, 100, 0);
  circle(leaf3, 300, 60);
  if (leaf4 > 70) {
    leafD = -0.5;
  }
  if (leaf4 < 50) {
    leafD = 0.5;
  }
  leaf4 = leaf4 + 1 * leafD;
  fill(0, 90, 0);
  circle(leaf4, 300, 60);
  pop();
  noStroke();
  push();
  //tree 2
  fill(100, 50, 19);
  
  rect(142, 320, 15, 90);
  if (lazerhit == 0) {
    fill(0, 130, 0);
  } else if (lazerhit == 1) {
    fill(random(0,255),random(0,255),random(0,255));
  }
  translate(leaf1, 0);
  circle(90, 300, 60);
  pop();
  push();
  if (lazerhit == 0) {
    fill(0, 120, 0);
  } else if (lazerhit == 1) {
    fill(random(0,255),random(0,255),random(0,255));
  }
  translate(leaf2, 0);
  circle(90, 300, 60);
  pop();
  push();
  if (lazerhit == 0) {
      fill(0, 110, 0);
  } else if (lazerhit == 1) {
    fill(random(0,255),random(0,255),random(0,255));
  }
  translate(leaf3, 0);
  circle(90, 300, 60);
  pop();
  push();
  if (lazerhit == 0) {
     fill(0, 100, 0);
  } else if (lazerhit == 1) {
    fill(random(0,255),random(0,255),random(0,255));
  }
  translate(leaf4, 0);
  circle(90, 300, 60);
  pop();
 //tree3
  push();
  noStroke();
  fill(100, 50, 19);
  rect(242, 320, 15, 90);
  push();
  fill(0, 130, 0);
  translate(leaf1, 0);
  circle(200, 300, 60);
  pop();
  push();
  fill(0, 120, 0);
  translate(leaf2, 0);
  circle(200, 300, 60);
  pop();
  push();
  fill(0, 110, 0);
  translate(leaf3, 0);
  circle(200, 300, 60);
  pop();
  push();
  fill(0, 100, 0);
  translate(leaf4, 0);
  circle(200, 300, 60);
  pop();
 //tree4
  push();
  translate(100, 0);
  noStroke();
  fill(100, 50, 19);
  rect(242, 320, 15, 90);
  push();
  fill(0, 130, 0);
  translate(leaf1, 0);
  circle(200, 300, 60);
  pop();
  push();
  fill(0, 120, 0);
  translate(leaf2, 0);
  circle(200, 300, 60);
  pop();
  push();
  fill(0, 110, 0);
  translate(leaf3, 0);
  circle(200, 300, 60);
  pop();
  push();
  fill(0, 100, 0);
  translate(leaf4, 0);
  circle(200, 300, 60);
  pop();
  pop();
 //tree5
  push();
  translate(200, 0);
  noStroke();
  fill(100, 50, 19);
  rect(242, 320, 15, 90);
  push();
  fill(0, 130, 0);
  translate(leaf1, 0);
  circle(200, 300, 60);
  pop();
  push();
  fill(0, 120, 0);
  translate(leaf2, 0);
  circle(200, 300, 60);
  pop();
  push();
  fill(0, 110, 0);
  translate(leaf3, 0);
  circle(200, 300, 60);
  pop();
  push();
  fill(0, 100, 0);
  translate(leaf4, 0);
  circle(200, 300, 60);
  pop();
  pop();
 //tree6
  push();
  translate(400, 0);
  noStroke();
  fill(100, 50, 19);
  rect(242, 320, 15, 90);
  push();
  fill(0, 130, 0);
  translate(leaf1, 0);
  circle(200, 300, 60);
  pop();
  push();
  fill(0, 120, 0);
  translate(leaf2, 0);
  circle(200, 300, 60);
  pop();
  push();
  fill(0, 110, 0);
  translate(leaf3, 0);
  circle(200, 300, 60);
  pop();
  push();
  fill(0, 100, 0);
  translate(leaf4, 0);
  circle(200, 300, 60);
  pop();
  pop();
 //clouds
  push();
  cloud2 = cloud2 - 3;

  translate(cloud2, 0);
  noStroke();
  fill(221);
  circle(64, 55, 45);
  circle(0, 50, 40);
  circle(30, 50, 50);
  fill(245);
  circle(30, 55, 50);
  circle(64, 60, 45);
  circle(0, 55, 40);
  if (cloud2 < -250) {
    cloud2 = 900;
  }
  pop();

  push();
  cloud3 = cloud3 - 3;

  translate(cloud3, 0);
  noStroke();
  fill(221);
  circle(64, 79, 40);
  circle(0, 74, 35);
  circle(30, 74, 45);
  fill(245);
  circle(30, 79, 45);
  circle(64, 84, 40);
  circle(0, 79, 35);
  if (cloud3 < -250) {
    cloud3 = 900;
  }
  pop();

  push();
  //stoplight
  translate(200, 0);
  if (light == 1) {
    fill(0, 255, 0);
    circle(340, 355, 20);
    car1 = car1 + lerp(speedLane1G, speedLane1O, 0.05);
    car2 = car2 + lerp(speedLane2G, speedLane2O, 0.05);
  }

  if (light == 2) {
    fill(255, 165, 0);
    circle(340, 333, 20);
    if (police == 0) {
    car1 = car1 + lerp(speedLane1R, speedLane1G, 0.05);
    } else if (police == 1){
      car1 = car1 + lerp(speedLane1G, speedLane1O, 0.05);
    }
    car2 = car2 + lerp(speedLane2R, speedLane2G, 0.05);
  }

  if (light == 3) {
    fill(255, 0, 0);
    circle(340, 310, 20);
    if (police == 0) {
    if (car1 > Lane1Start + 10) {
      car1 = car1 + 12;
    } else if (car1 < Lane1Start) {
      car1 = lerp(car1, Lane1Start, 0.05);
    }
    } else if (police == 1){
      car1 = car1 + lerp(speedLane1G, speedLane1O, 0.05);
    }
    
    if (car2 > Lane2Start + 10) {
      car2 = car2 + 12;
    } else if (car2 < Lane2Start) {
      car2 = lerp(car2, Lane2Start, 0.05);
    }
  }
  pop();
 
  noStroke();
  push();
 //car1
  translate(car1, 100);

  fill(carColor1);
  if (carvariant1 < 25) {
    quad(345, 295, 430, 295, 435, 320, 340, 320, 1);
    quad(340, 320, 435, 320, 435, 345, 340, 345);
    quad(432, 315, 448, 320, 440, 345, 435, 345, 1);
    fill(200,200,255);
    quad(360,300,390,300,390,320,360,320);
    quad(400,300,420,300,428,320,400,320);
  } else if (carvariant1 < 50) {
    quad(390, 295, 425, 295, 435, 320, 385, 320, 1);
  quad(340, 320, 435, 320, 435, 345, 340, 345);
  quad(432, 315, 443, 320, 443, 345, 435, 345, 1);
  fill(200,200,255);
  quad(400,300,420,300,428,320,400,320);
  } else if  (carvariant1 < 90) {
    quad(360, 300, 420, 300, 435, 320, 340, 320, 1);
    quad(340, 320, 435, 320, 435, 345, 340, 345);
    quad(432, 315, 450, 320, 450, 345, 435, 345, 1);
    fill(200,200,255);
    quad(365,304,385,304,385,320,355,320);
    quad(395,304,415,304,426,320,395,320);
  } else{
    police = 1;
  fill(255);
  quad(360, 300, 420, 300, 435, 320, 340, 320, 1);
  quad(340, 320, 435, 320, 435, 345, 340, 345);
  fill(0)
  quad(430, 315, 450, 320, 450, 345, 435, 345, 1);
  quad(340,335,450,335,450,345,340,345);
  quad(340,320,355,320,355,345,340,345);
  fill(200,200,255);
  quad(365,304,385,304,385,320,355,320);
  quad(395,304,415,304,426,320,395,320);
  
  if (policelight < 10) {
    fill(255,0,0,50);
    policelight++
  } else {
    fill(0,0,255,50)
    policelight++
  }
  if (policelight == 20) {
    policelight = 1
  } 
  rect(382,290,15,10)
  circle(390,300,200);
  }

  fill(50);
  circle(360, 345, 29);
  circle(420, 345, 29);
  if (car1 > 900) {
    car1 = -500;
    carColor1 = getrandomcolor1();
    carvariant1 = int(random(0,100));
    police = 0;
  }
  pop();
  //car2
  push();
  translate(car2, 150);
  fill(carColor2);
  if (carvariant2 < 25) {
    quad(345, 295, 430, 295, 435, 320, 340, 320, 1);
    quad(340, 320, 435, 320, 435, 345, 340, 345);
    quad(432, 315, 448, 320, 440, 345, 435, 345, 1);
    fill(200,200,255);
    quad(360,300,390,300,390,320,360,320);
    quad(400,300,420,300,428,320,400,320);
  } else if (carvariant2 < 50) {
    quad(390, 295, 425, 295, 435, 320, 385, 320, 1);
  quad(340, 320, 435, 320, 435, 345, 340, 345);
  quad(432, 315, 443, 320, 443, 345, 435, 345, 1);
  fill(200,200,255);
  quad(400,300,420,300,428,320,400,320);
  } else if (carvariant2 < 70) {
    quad(360, 300, 420, 300, 435, 320, 340, 320, 1);
    quad(340, 320, 435, 320, 435, 345, 340, 345);
    quad(432, 315, 450, 320, 450, 345, 435, 345, 1);
    fill(200,200,255);
    quad(365,304,385,304,385,320,355,320);
    quad(395,304,415,304,426,320,395,320);
  } else {
  rect(310,255,250,80)
  fill(255)
  quad(565,265,620,270,620,335,565,335)
  fill(200,200,255);
  quad(580,276,610,279,610,300,580,300);
fill(50);
  circle(590, 345, 29);
  }
  fill(50);
  circle(360, 345, 29);
  circle(420, 345, 29);
  if (car2 > 900) {
    car2 = -800;
    carColor2 = getrandomcolor1();
    carvariant2 = int(random(0,100));
  }
  pop();
 //tree7
  push();
  translate(10, 160);
  noStroke();
  fill(100, 50, 19);
  rect(160, 300, 15, 90);
  push();
  fill(0, 130, 0);
  translate(leaf1, 0);
  circle(110, 280, 60);
  pop();
  push();
  fill(0, 120, 0);
  translate(leaf2, 0);
  circle(110, 280, 60);
  pop();
  push();
  fill(0, 110, 0);
  translate(leaf3, 0);
  circle(110, 280, 60);
  pop();
  push();
  fill(0, 100, 0);
  translate(leaf4, 0);
  circle(110, 280, 60);
  pop();
 //car designer
 fill(carColor2);
 

  /*
  fill(50);
  circle(360, 345, 29);
  circle(410, 345, 29);
  */
 //ufo
 let px_size = 3;
   if (ufospawn >= 3) {
  if(ufolocation >= -280) {
  ufolocation = ufolocation - 5
  translate(ufolocation,-30)
  } else {
  translate(ufolocation,-30)
  }
 if (ufolocation == -285) {
    fill(154,205,50)
    stroke(300)
    strokeWeight(5)
    line(429,30,429,140)
    lazer++
 }
 if (lazer == 20) {
  ufolocation = ufolocation -5
  lazerhit = 1
 }
  if (ufo < 10) {
    push();
  translate(400,0);
  noStroke();
  const ufo1 = [
    [0,0,0,0,0,0,0,0,1,1,1],
    [0,0,0,0,0,0,1,1,1,1,2,2,1,],
    [0,0,0,0,0,1,1,1,1,1,1,2,2,1],
    [0,0,0,0,1,1,1,1,1,1,1,1,2,1,1],
    [0,0,0,0,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
    [0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
    [5,7,5,7,5,5,5,7,5,5,5,7,5,5,5,7,5,7,5],
    [0,8,6,5,4,3,3,3,3,3,3,3,3,3,4,5,6,8],
    [0,0,8,6,5,4,4,4,4,4,4,4,4,4,5,6,8],
    [0,0,0,0,6,5,5,5,5,5,5,5,5,5,6],
    [0],
    [0,0,0,0,0,0,7,7,7,7,7,7,7],
    [0],
    [0,0,0,0,0,0,0,7,7,7,7,7],
    [0],
    [0,0,0,0,0,0,0,0,7,7,7]
    [0],
    [0,0,0,0,0,0,0,0,0,0]
  ];

  let ufo1_colors = [
    color(0,0,0,0),
    color(0,0,205),
    color(176,196,222),
    color(192,192,192),
    color(128,128,128),
    color(105,105,105),
    color(70,70,70),
    color	(154,205,50),
    color(30)

  ]
  for (let y = 0; y < ufo1.length; y++) {
    for (let x = 0; x < ufo1[y].length; x++) {
      fill(ufo1_colors[ufo1[y][x]]);
      square(x*px_size, y*px_size, px_size);
    }
  }

    pop()
    ufo++
  } else if (ufo < 20){
     push();
  translate(400,0);
  noStroke();

  

  const ufo2 = [
    [0,0,0,0,0,0,0,0,1,1,1],
    [0,0,0,0,0,0,1,1,1,1,2,2,1,],
    [0,0,0,0,0,1,1,1,1,1,1,2,2,1],
    [0,0,0,0,1,1,1,1,1,1,1,1,2,1,1],
    [0,0,0,0,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
    [0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
    [5,7,5,7,5,5,5,7,5,5,5,7,5,5,5,7,5,7,5],
    [0,8,6,5,4,3,3,3,3,3,3,3,3,3,4,5,6,8],
    [0,0,8,6,5,4,4,4,4,4,4,4,4,4,5,6,8],
    [0,0,0,0,6,5,5,5,5,5,5,5,5,5,6],
    [0],
    [0,0,0,0,0,0,0,7,7,7,7,7],
    [0],
    [0,0,0,0,0,0,0,0,7,7,7],
    [0],
    [0,0,0,0,0,0,0,0,0,7]
  ];

  let ufo2_colors = [
    color(0,0,0,0),
    color(0,0,205),
    color(176,196,222),
    color(192,192,192),
    color(128,128,128),
    color(105,105,105),
    color(70,70,70),
    color	(154,205,50),
    color(30)

  ]
  for (let y = 0; y < ufo2.length; y++) {
    for (let x = 0; x < ufo2[y].length; x++) {
      fill(ufo2_colors[ufo2[y][x]]);
      square(x*px_size, y*px_size, px_size);
    }
  }

    pop()
    

    ufo++
  } else {
   push();
  translate(400,0);
  noStroke();

  

  const ufo3 = [
    [0,0,0,0,0,0,0,0,1,1,1],
    [0,0,0,0,0,0,1,1,1,1,2,2,1,],
    [0,0,0,0,0,1,1,1,1,1,1,2,2,1],
    [0,0,0,0,1,1,1,1,1,1,1,1,2,1,1],
    [0,0,0,0,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
    [0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
    [5,7,5,7,5,5,5,7,5,5,5,7,5,5,5,7,5,7,5],
    [0,8,6,5,4,3,3,3,3,3,3,3,3,3,4,5,6,8],
    [0,0,8,6,5,4,4,4,4,4,4,4,4,4,5,6,8],
    [0,0,0,0,6,5,5,5,5,5,5,5,5,5,6],
    [0,0,0,0,0,0,7,7,7,7,7,7,7],
    [0],
    [0,0,0,0,0,0,0,7,7,7,7,7],
    [0],
    [0,0,0,0,0,0,0,0,7,7,7,],
    [0],
    [0,0,0,0,0,0,0,0,0,7,],
  ];

  let ufo3_colors = [
    color(0,0,0,0),
    color(0,0,205),
    color(176,196,222),
    color(192,192,192),
    color(128,128,128),
    color(105,105,105),
    color(70,70,70),
    color	(154,205,50),
    color(30)

  ]
  for (let y = 0; y < ufo3.length; y++) {
    for (let x = 0; x < ufo3[y].length; x++) {
      fill(ufo3_colors[ufo3[y][x]]);
      square(x*px_size, y*px_size, px_size);
    }
  }

    pop()
    ufo++

  }
  if (ufo == 30) {
    ufo = 1
  } 
 }
 if (ufospawn >3) {
  ufospawn = 0;
 }
 
 if (lazerhit == 1) {
  mutation++
 }
 if (mutation >= 500) {
  lazerhit = 0;
 }
}