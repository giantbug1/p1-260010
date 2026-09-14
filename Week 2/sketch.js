function getrandomcolor1() {
  return color(random(0,255),random(0,255),random(0,255))
}

function getrandomcar() {
  return(random(0,3))
}

function setup() {
  createCanvas(800, 600);
  noStroke();
  dayC = color(150,220,255);
  nightC = color(0,0,50);
  sunriseC = color(220,150,200)
 carColor1 = getrandomcolor1()
 carColor2 = getrandomcolor1()
 carvariant1 = getrandomcar()


  
}
 

let light = 1

  function keyPressed() {
 if (keyCode === ENTER) {
    (light++)
   console.log("Enter wordt gedrukt");
   if(light == 4) {
  (light = 1)
 }
} 
}
 
let sun = 0;
let sun1 = 0;
sun1 =40
let z = 2
let sun2 = 0;
sun2 = 110
let a = 2
let car1 = 0;
let car2 = 240;
let x = 1000;
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




function draw() {

    if (car1 > 900) {
      carColor = getrandomcolor()
    }
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

  background(C);

  

  
 //sun
  if (time >= 0.25 && time < 0.75) {
    let sunTime = (time - 0.25) / 0.5;
    let sunX = 30 + sunTime * 740;
  push()
 noStroke()
 if (sun1 > 100) {
  z = -1
 }
 if (sun1 < 50) {
  z = 1
 }
 sun1 = sun1 + (1 * z)
 if (sun2 > 100) {
  a = -1
 }
 if (sun2 < 50) {
  a =  1
 }
 sun2 = sun2 + (1 * a)
 sun = sun + 10
 translate(sunX,0)
 fill(255,140,0,90)
 circle(100,100,sun1)
 fill(255,69,0,90)
 circle(100,100,sun2)
 fill(255,255,0)
 circle(100,100,50)
 pop()
    
  }

  //moon
  if (time >= 0.75 || time < 0.25) {
    let moonTime;

    if (time >= 0.75) {
      moonTime = (time - 0.75) / 0.5;
    } else {
      moonTime = (time + 0.25) / 0.5;
    }

    let moonX = 30 + moonTime * 740;

    push()
    translate(moonX,0,0)
    fill(240);
    circle(100, 100, 50);
    fill(200)
    circle(90,90,13);
    circle(112,97,11);
    circle(102,113,12);
    circle(90,104,10)
    pop()
  }
   if (time >= 0.75 || time < 0.25) {
    fill(255)
    push()
    translate(0,0)
    circle(random(0,800),random(0,500),5);
    circle(random(0,800),random(0,500),5);
    circle(random(0,800),random(0,500),5);
    circle(random(0,800),random(0,500),5);
    circle(random(0,800),random(0,500),5);
    circle(random(0,800),random(0,500),5);
    circle(random(0,800),random(0,500),5);
    circle(random(0,800),random(0,500),5);
    pop()
   }

  //tower
  fill(112,128,144)
  rect(20,100,130,600)
  fill(176,196,222,50);
    rect(30,150,40,40,5)
    rect(30,210,40,40,5)
    rect(30,280,40,40,5)
    rect(30,340,40,40,5)
    rect(30,400,40,40,5)
    rect(95,150,40,40,5)
    rect(95,210,40,40,5)
    rect(95,280,40,40,5)
    rect(95,340,40,40,5)
    rect(95,400,40,40,5)
  if (time >= 0.75 || time < 0.25) {
    fill(255,239,213)
    rect(30,150,40,40,5)
    rect(30,210,40,40,5)
    rect(30,280,40,40,5)
    rect(30,340,40,40,5)
    rect(30,400,40,40,5)
    rect(95,150,40,40,5)
    rect(95,210,40,40,5)
    rect(95,280,40,40,5)
    rect(95,340,40,40,5)
    rect(95,400,40,40,5)
  }
  //mauntains
 push() 
 translate(0,100)
  fill(70)
  triangle(410,80, 190, 450, 650, 450)

  fill(105)
  triangle(650,230, 370, 450, 950, 450)
  triangle(270,180, 140, 450, 400, 450)
  pop()
  noStroke(0)

  //road
  push()
  translate(0,75);
  fill(0,128,0)
  rect(0,412,800,5)
  fill(0,105,0)
  rect(0,408,800,200)
  fill(105)
  rect(0,417,800,5)
  fill(128)
  rect(0,420,800,100)
  push()
  translate(200,100)
  fill(40)
  rect(328,195,23,75,1)
  rect(337,250,5,70,5)
  fill(240)
  //lights off
 fill (80,60,0)
 circle(340,233,20)
 fill (0,80,0)
 circle(340,255,20)
 fill (100,10,0)
 circle(340,210,20)
  pop()
 //road stipes
 stroke(190)
  strokeWeight(5)
 let linelength = 35;
 let lingegap= 70;
 let linecount= 12;
 let roadmiddle= 467;

 for(x=0; x < linecount; x++){
  let newx = (x*lingegap);
  line(newx,roadmiddle,newx+linelength,roadmiddle)
  }

 strokeWeight(1)

 stroke(1)



 

 push()
 noStroke()
 fill(100,50,19)
 rect(52,320,15,90)
 if (leaf1 > 70) {
 leafA = -0.5
 }
 if (leaf1 < 50){
  leafA = 0.5
 }
 leaf1 = leaf1 + (1 * leafA)
 fill(0,130,0)
 circle(leaf1,300,60)
 if (leaf2 > 70) {
  leafB = -0.5
 }
 if (leaf2 < 50) {
  leafB = 0.5
 }
 leaf2 = leaf2 + (1 * leafB)
 fill(0,120,0)
 circle(leaf2,300,60)
 if (leaf3 > 70) {
 leafC = -0.5
 }
 if (leaf3 < 50){
  leafC = 0.5
 }
 leaf3 = leaf3 + (1 * leafC)
 fill(0,100,0)
 circle(leaf3,300,60)
 if (leaf4 > 70) {
  leafD = -0.5
 }
 if (leaf4 < 50) {
  leafD = 0.5
 }
 leaf4 = leaf4 + (1 * leafD)
 fill(0,90,0)
 circle(leaf4,300,60)
 pop()
noStroke()
 push()
 
  fill(100,50,19)
 rect(142,320,15,90)
  fill(0,130,0)
 translate(leaf1,0)
 circle(90,300,60)
 pop()
 push()
 fill(0,120,0)
 translate(leaf2,0)
 circle(90,300,60)
 pop()
 push()
 fill(0,110,0)
 translate(leaf3,0)
 circle(90,300,60)
 pop()
 push()
  fill(0,100,0)
 translate(leaf4,0)
 circle(90,300,60)
  pop()

 push()
 noStroke()
 fill(100,50,19)
 rect(242,320,15,90)
 push()
  fill(0,130,0)
 translate(leaf1,0)
 circle(200,300,60)
 pop()
 push()
 fill(0,120,0)
 translate(leaf2,0)
 circle(200,300,60)
 pop()
 push()
 fill(0,110,0)
 translate(leaf3,0)
 circle(200,300,60)
 pop()
 push()
  fill(0,100,0)
 translate(leaf4,0)
 circle(200,300,60)
  pop()

  push()
  translate(100,0)
 noStroke()
 fill(100,50,19)
 rect(242,320,15,90)
 push()
  fill(0,130,0)
 translate(leaf1,0)
 circle(200,300,60)
 pop()
 push()
 fill(0,120,0)
 translate(leaf2,0)
 circle(200,300,60)
 pop()
 push()
 fill(0,110,0)
 translate(leaf3,0)
 circle(200,300,60)
 pop()
 push()
  fill(0,100,0)
 translate(leaf4,0)
 circle(200,300,60)
  pop()
  pop()

  push()
  translate(200,0)
 noStroke()
 fill(100,50,19)
 rect(242,320,15,90)
 push()
  fill(0,130,0)
 translate(leaf1,0)
 circle(200,300,60)
 pop()
 push()
 fill(0,120,0)
 translate(leaf2,0)
 circle(200,300,60)
 pop()
 push()
 fill(0,110,0)
 translate(leaf3,0)
 circle(200,300,60)
 pop()
 push()
  fill(0,100,0)
 translate(leaf4,0)
 circle(200,300,60)
  pop()
  pop()

  push()
  translate(400,0)
 noStroke()
 fill(100,50,19)
 rect(242,320,15,90)
 push()
  fill(0,130,0)
 translate(leaf1,0)
 circle(200,300,60)
 pop()
 push()
 fill(0,120,0)
 translate(leaf2,0)
 circle(200,300,60)
 pop()
 push()
 fill(0,110,0)
 translate(leaf3,0)
 circle(200,300,60)
 pop()
 push()
  fill(0,100,0)
 translate(leaf4,0)
 circle(200,300,60)
  pop()
  pop()




 push()
 
 cloud1 = cloud1 -1;

 
  translate(cloud1, 0);
 noStroke()
 fill(221)
 circle( 44,105,35)
 circle( 0,100,30)
 circle( 20,100,40)
 fill(245)
 circle(20,105,40)
 circle(44,110,35)
 circle(0,105,30)
 if (cloud1 < -250) {
  cloud1 = 900
 }
 pop()

 push()
 cloud2 =  cloud2 -3;

 
  translate(cloud2, 0);
 noStroke()
 fill(221)
 circle( 64,55,45)
 circle( 0,50,40)
 circle( 30,50,50)
 fill(245)
 circle(30,55,50)
 circle(64,60,45)
 circle(0,55,40)
 if (cloud2 < -250) {
  cloud2 = 900
 }
 pop()

 push()
 cloud3 =  cloud3 -3;

 
  translate(cloud3, 0);
 noStroke()
 fill(221)
 circle( 64,79,40)
 circle( 0,74,35)
 circle( 30,74,45)
 fill(245)
 circle(30,79,45)
 circle(64,84,40)
 circle(0,79,35)
 if (cloud3 < -250) {
  cloud3 = 900
 }
 pop()

  push()



 translate(200,0)
  if(light == 1) {
    fill (0,255,0)
    circle(340,355,20)
    car1 = car1 + lerp(speedLane1G, speedLane1O, 0.05)
    car2 = car2 + lerp(speedLane2G, speedLane2O, 0.05)
  
  }

  if(light == 2) {
    fill (255,165,0)
    circle(340,333,20)
    car1 = car1 + lerp(speedLane1R, speedLane1G, 0.05)
    car2 = car2 + lerp(speedLane2R, speedLane2G, 0.05)
  }
  

  if(light == 3) {
    fill (255,0,0)
    circle(340,310,20)
    if(car1 > Lane1Start + 10) {
      car1 = car1 + 12
    } else if(car1 < Lane1Start) {
      car1 = lerp(car1, Lane1Start, 0.05)
    }
    if(car2 > Lane2Start + 10) {
      car2 = car2 + 12
    } else if(car2 < Lane2Start) {
      car2 = lerp(car2, Lane2Start, 0.05)
    }
   
  }
  pop()
   
 noStroke()
 push()
 
 

 translate(car1,100)
 
 
 fill(carColor1)
 if(carvariant1 = 1) {
 quad(345,295,430,295,435,320,340,320,1)
 quad(340,320,435,320,435,345,340,345)
 quad(432,315,448,320,440,345,435,345,1)
 } else if (carvariant1 = 2) {
 quad(360,300,420,300,435,320,340,320,1)
 quad(340,320,435,320,435,345,340,345)
 quad(432,315,450,320,450,345,435,345,1)
 }

 fill(50)
 circle(360,345,29)
 circle(410,345,29)
 if (car1 > 900) {
  car1 = -500
  carColor1 = getrandomcolor1()

 }
  pop()

  push()
 translate(car2,150)
 fill(carColor2)
  quad(360,300,420,300,435,320,340,320,1)
 quad(340,320,435,320,435,345,340,345)
 quad(432,315,450,320,450,345,435,345,1)
 fill(50)
 circle(360,345,29)
 circle(410,345,29)
 if (car2 > 900) {
  car2 = -500
  carColor2 = getrandomcolor1()
  
 } 
pop()

 push()
 translate(10,160)
 noStroke()
 fill(100,50,19)
 rect(160,300,15,90)
 push()
  fill(0,130,0)
 translate(leaf1,0)
 circle(110,280,60)
 pop()
 push()
 fill(0,120,0)
 translate(leaf2,0)
 circle(110,280,60)
 pop()
 push()
 fill(0,110,0)
 translate(leaf3,0)
 circle(110,280,60)
 pop()
 push()
  fill(0,100,0)
 translate(leaf4,0)
 circle(110,280,60)
  pop()
}

