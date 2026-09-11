function setup() {
  createCanvas(800, 600);

  
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


function draw() {
  background(220)

  fill(0)
  rect(0,0,800,600)
  

  
  stroke(0)
 
  

  
//sun
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
 translate(sun,0)
 fill(135,206,235)
  rect(-400,0,1200,600)
 fill(255,140,0,90)
 circle(100,100,sun1)
 fill(255,69,0,90)
 circle(100,100,sun2)
 fill(255,255,0)
 circle(100,100,50)
 
 if (sun > 800) {
  sun = -1200
 }
 pop()
 push() 
 //bergen
translate(0,100)
  fill(70)
  triangle(210,100, 60, 350, 350, 350)

  fill(105)
  triangle(350,230, 170, 350, 550, 350)
  triangle(118,180, 40, 350, 200, 350)

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
    car1 = car1 + 12
    car2 = car2 + 10
  
  }

  if(light == 2) {
    fill (255,165,0)
    circle(340,333,20)
    car1 = car1 + (1 * 1),
    car2 = car2 + (1 * 1)
  }
  

  if(light == 3) {
    fill (255,0,0)
    circle(340,310,20)
    if(car1 < 340) {
      car1 = car1 + 1
    }
    if(car2 < 340) {
      car2 = car2 + 1
    }
    if(car1 > 380) {
      car1 = car1 + 1
    }
    if(car2 > 380) {
      car2 = car2 + 1
    }
    
  }
  pop()
   
 noStroke()
 push()
 
 translate(car1,100)
 
 fill(255,0,0)
 quad(5,300,90,300,95,320,0,320,1)
 quad(0,320,95,320,95,345,0,345)
 quad(92,315,108,320,110,345,95,345,1)
 fill(50)
 circle(20,345,29)
 circle(80,345,29)
 if (car1 > 900) {
  car1 = -200
 }
  pop()

  push()
 translate(car2,150)
 fill(255,255,255)
 quad(5,300,90,300,95,320,0,320,1)
 quad(0,320,95,320,95,345,0,345)
 quad(92,315,108,320,110,345,95,345,1)
 fill(50)
 circle(20,345,29)
 circle(80,345,29)
 if (car2 > 900) {
  car2 = -200
  
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
