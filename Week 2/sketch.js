function setup() {
  createCanvas(400, 400);

  
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
function draw() {
  background(220)

  
  stroke(0)
 
  push() //bergen

  fill(135,206,235)
  rect(0,0,400)

  fill(70)
  triangle(210,100, 60, 350, 350, 350)

  fill(105)
  triangle(350,230, 170, 350, 550, 350)
  triangle(118,180, 40, 350, 200, 350)

  pop()

  noStroke(0)

  //road
  push()
  translate(0,15);
  fill(0,128,0)
  rect(0,312,400,5)
  fill(0,105,0)
  rect(0,308,400,5)
  fill(105)
  rect(0,317,400,5)
  fill(128)
  rect(0,320,400,100)
  fill(40)
  rect(328,195,23,75,1)
  rect(337,250,5,70,5)
  fill(240)


  rect(-10,350,60,7,5)
  rect(95,350,60,7,5)
  rect(190,350,60,7,5)
  rect(285,350,60,7,5)
  rect(370,350,60,7,5)
 fill (80,60,0)
 circle(340,233,20)
 fill (0,80,0)
 circle(340,255,20)
 fill (100,10,0)
 circle(340,210,20)

 stroke(1)

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
 sun = sun + (1 * 0.2)
 translate(sun, -60)
 fill(255,140,0,90)
 circle(100,100,sun1)
 fill(255,69,0,90)
 circle(100,100,sun2)
 fill(255,255,0)
 circle(100,100,50)
 
 if (sun > 450) {
  sun = -100
 }

 pop()


 push()
 cloud1 = cloud1 + (1 * 0.5);

 
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
 if (cloud1 > 450) {
  cloud1 = -100
 }
 pop()

 push()
 cloud2 =  cloud2 + (1 * 0.7);

 
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
 if (cloud2 > 450) {
  cloud2 = -100
 }
 pop()

 push()
 cloud3 =  cloud3 + (1 * 1);

 
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
 if (cloud3 > 450) {
  cloud3 = -100
 }
 pop()



  if(light == 1) {
    fill (0,255,0)
    circle(340,255,20)
    car1 = car1 + (1 * 0,5),
    car2 = car2 + (1 * 0,6)
  
  }

  if(light == 2) {
    fill (255,165,0)
    circle(340,233,20)
    car1 = car1 + (1 * 0,2),
    car2 = car2 + (1 * 0,2)
  }
  

  if(light == 3) {
    fill (255,0,0)
    circle(340,210,20)
    
  }

 

  
 noStroke()
 push()
 translate(car1,-15)
 fill(255,0,0)
 quad(5,300,90,300,95,320,0,320,1)
 quad(0,320,95,320,95,345,0,345)
 quad(92,315,108,320,110,345,95,345,1)
 fill(50)
 circle(20,345,29)
 circle(80,345,29)
 if (car1 > 450) {
  car1 = -100
 }
  pop()

  push()
 translate(car2,20)
 fill(255,255,255)
 quad(5,300,90,300,95,320,0,320,1)
 quad(0,320,95,320,95,345,0,345)
 quad(92,315,108,320,110,345,95,345,1)
 fill(50)
 circle(20,345,29)
 circle(80,345,29)
 if (car2 > 450) {
  car2 = -100
  pop()
 } 
 
}
