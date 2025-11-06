
/*
class RyanDancer {
    constructor(startX, startY) {
        this.x = startX;
        this.y = startY;
        // add properties for your dancer here:
        //..
        //..
        //..
        this.degs = 0;
        this.blink = 0;
    }
    update() {
        // update properties here to achieve
        // your dancer's desired moves and behaviour
        this.deg = sin(frameCount * 0.01) * 10;

        this.x += sin(frameCount * 0.01);
        this.y += cos(frameCount * 0.01);

        this.blink = map(sin(frameCount * 0.01), -1, 1, 0, 20);
    }
    display() {
        // the push and pop, along with the translate 
        // places your whole dancer object at this.x and this.y.
        // you may change its position on line 19 to see the effect.
        push();
        translate(this.x, this.y);
        angleMode(DEGREES);

        // ******** //
        // ⬇️ draw your dancer from here ⬇️
        fill(0);
        stroke(255);
        // arms
        ellipse(40, -20, 40, 20);
        ellipse(-40, -20, 40, 20);
        // legs
        ellipse(40, 40, 40, 20);
        ellipse(-40, 40, 40, 20);
        pop();

        push();
        translate(this.x, this.y);
        // torso
        fill(255);
        rotate(-this.deg);
        ellipse(0, 0, 80, 100);
        pop();

        // head
        push();
        stroke(255);
        translate(this.x, this.y);
        rotate(this.deg);
        fill(0);
        circle(30, -80, 30);
        circle(-30, -80, 30);
        fill(255);
        stroke(0);
        circle(0, -50, 80);
        fill(0);
        // eyes
        ellipse(15, -50, 20, this.blink);
        ellipse(-15, -50, 20, this.blink);
        // nose
        ellipse(0, -40, 10, 5);
        //mouth
        arc(0, -35, 35, 40, 0, 180);

        pop();
    }
}

class HuySkibidiDancer {
    constructor(startX, startY) {
        this.x = startX;
        this.y = startY;
        // add properties for your dancer here:
        //..
        //..
        //..
    }
    update() {
        // update properties here to achieve
        // your dancer's desired moves and behaviour
        // let wave = sin(frameCount * 0.05) * 10
        // // this.y = height / 4 + wave
        // this.x = map(noise(frameCount * 0.015), 0, 1, -20, 20)

        // // push()
        // translate(this.x, this.y)
        // let angle = radians(30)

    }
    display() {
        // the push and pop, along with the translate 
        // places your whole dancer object at this.x and this.y.
        // you may change its position on line 19 to see the effect.
        push();
        let bodyMove = map(sin(frameCount * 0.1), -1, 1, -20, 20)
        let bodyMove2 = map(noise(frameCount * 0.1), 0, 1, -10, 10)
        translate(this.x + bodyMove2, this.y + bodyMove);
        fill(255, 120, 10)
        ellipse(0, 0, 100, 200);

        for (let i = -75; i < 100; i += 25) {
            strokeWeight(4)
            line(-50, i, 50, i);
        }

        //Hat
        strokeWeight(1)
        fill(0, 255, 0)
        let hatMove = map(sin(frameCount * 0.1), -1, 1, -5, 5)
        triangle(-10, -100 + hatMove, -50, -70 + hatMove, -52, -95 + hatMove)
        triangle(10, -100 + hatMove, 50, -70 + hatMove, 52, -95 + hatMove)
        triangle(-20, -100 + hatMove, 0, -50 + hatMove, +20, -100 + hatMove)
        noStroke()
        rect(-20, -150, 40, 50 + hatMove)

        //eyes
        fill(255)
        circle(-20, -20, 20)
        circle(20, -20, 20)
        //black eyes
        fill(0)
        let toggling = map(sin(frameCount * 0.1), -1, 1, -1, 5)
        let toggling2 = map(cos(frameCount * 0.1), -1, 1, -3, 4)
        circle(-20 + toggling, -17 + toggling2, 15)
        circle(20 + toggling2, -23 + toggling, 15)

        //mouth
        strokeWeight(2)
        stroke(0)
        fill(255, 0, 0)
        let shaking = map(sin(frameCount * 0.1), -1, 1, -1, 5)
        arc(0, 1 + shaking, 35, 40, 0, PI)

        //upper leg
        stroke(255)
        strokeWeight(5)
        let danceLeg = map(sin(frameCount * 0.1), -1, 1, -50, 50)
        line(-50, -25, -125 + danceLeg, -75)
        line(50, -25, 125 + danceLeg, -75)

        //lower leg
        let danceLeg2 = map(sin(frameCount * 0.1), -1, 1, -15, 15)
        line(-35, 75, -125, 150 + danceLeg2)
        line(35, 75, 125, 150 + danceLeg2)

        pop();
    }
}



class AnnaDancer {
    constructor(startX, startY) {
        this.x = startX;
        this.y = startY;
    }
    update() {
        let sinValue = sin(frameCount * 0.05) * 50
        this.y = height / 2 + sinValue
        this.x = map(noise(frameCount * 0.015), 0, 1, 0, width)
        this.angle = sin(frameCount * 0.05) * radians(15)


    }
    display() {

        push();
        translate(this.x, this.y);
        rotate(this.angle)
        //red circle 
        fill(139, 0, 0)
        circle(0, 0, 150, 155)
        //white circles
        noStroke()
        fill(255)
        ellipse(0, -35, 55, 60)
        ellipse(35, 0, 55, 60)
        ellipse(0, 35, 55, 60)
        ellipse(-35, 0, 55, 60)
        //yellow part
        noStroke()
        fill(255, 204, 0)
        ellipse(0, 0, 55, 55)
        //eyes
        fill(0)
        ellipse(-9, -8, 6, 8)
        ellipse(9, -8, 6, 8)
        fill(255)
        ellipse(-8, -10, 2, 2)
        ellipse(8, -10, 2, 3)
        //mouth
        noStroke()
        fill("red")
        arc(0, 1, 35, 40, 0, PI)

        pop()

    }
}

class AngelinaDancer {
    constructor(startX, startY) {
        this.x = startX;
        this.y = startY;
        // add properties for your dancer here:
        //..
        //..
        //..
    }
    update() {
        // this.drawWings(x, y)
    }
    display() {
        // the push and pop, along with the translate 
        // places your whole dancer object at this.x and this.y.
        // you may change its position on line 19 to see the effect.
        push();
        translate(this.x, this.y);

        this.drawWings(0, 0)
        push()
        fill(255, 253, 116)
        ellipse(0, 30, 60, 100)
        ellipse(15, -70, 10, 50)
        ellipse(-15, -70, 10, 50)
        circle(0, -30, 60)
        fill(0)
        circle(-10, -30, 9)
        circle(10, -30, 9)
        triangle(0, -25, -5, -15, 5, -15)
        pop()

        pop();
    }
    drawWings(x1, y1) {
        push()
        noStroke()
        fill(255, 192, 203)
        push()
        rotate(sin(frameCount * 0.05) * 0.3)
        ellipse(50, 10, 90, 50)
        pop()
        push()
        rotate(-sin(frameCount * 0.05) * 0.3)
        ellipse(-50, 10, 90, 50)
        pop()
        pop()
    }
}

class ChristinaDancer {
    constructor(startX, startY) {
        this.x = startX;
        this.y = startY;
        // add properties for your dancer here:
        this.angle = 0
        this.lEAr = 0
        this.rEar = 0
        this.spd = 5
        this.arm = 0
        this.jump = 0
        //..
        //..
        //..
    }
    update() {
        // update properties here to achieve
        // your dancer's desired moves and behaviour
        this.angle = sin(frameCount * 0.03) * 10
        this.lEar = sin(frameCount * this.spd * 0.01) * 10
        this.rEar = -sin(frameCount * this.spd * 0.01) * 9
        this.jump = cos(frameCount * 0.06) * 100
        this.arm = sin(frameCount * -0.06) * 6
    }
    display() {
        push();
        // console.log(this.active, frameCount)
        translate(this.x, this.y);
        // ******** //
        // ⬇️ draw your dancer from here ⬇️
        angleMode(DEGREES)
        push()
        translate(0, 50)
        translate(0, this.jump)
        rotate(this.angle)
        push()
        translate(2, -150)
        rotate(2)
        fill(255)
        push()
        rotate(this.arm)
        beginShape()
        curveVertex(-13, 34)
        curveVertex(-13, 34)
        curveVertex(-28, 49)
        curveVertex(0, 53)
        curveVertex(0, 53)
        endShape()
        pop()
        beginShape()
        curveVertex(-16, 53)
        curveVertex(-16, 53)
        curveVertex(-20, 72)
        curveVertex(-17, 74)
        curveVertex(0, 70)
        curveVertex(17, 74)
        curveVertex(20, 72)
        curveVertex(16, 53)
        curveVertex(16, 53)
        endShape()
        push()
        rotate(-this.arm)
        beginShape()
        curveVertex(0, 53)
        curveVertex(0, 53)
        curveVertex(28, 49)
        curveVertex(17, 34)
        curveVertex(17, 34)
        endShape()
        pop()
        push()
        noStroke()
        fill(255)
        beginShape()
        curveVertex(-13, 34)
        curveVertex(-15, 53)
        curveVertex(15, 53)
        curveVertex(13, 34)
        endShape(CLOSE)
        pop()
        pop()
        push()
        translate(5, -165)
        rotate(2)
        push()
        stroke(0)
        strokeWeight(1)
        ellipse(0, 0, 130, 110)
        pop()
        push()
        translate(-35, 15)
        push()
        rotate(55)
        fill(0)
        ellipse(0, 0, 40, 35)
        pop()
        fill(255)
        circle(-7, -7, 18)
        circle(6, 11, 10)
        noStroke()
        fill(255, 217, 247)
        ellipse(-20, 10, 13, 5)
        pop()
        push()
        translate(35, 15)
        push()
        rotate(305)
        fill(0)
        ellipse(0, 0, 40, 35)
        pop()
        fill(255)
        circle(7, -7, 18)
        circle(-6, 11, 10)
        noStroke()
        fill(255, 217, 247)
        ellipse(20, 10, 13, 5)
        pop()
        push()
        rotate(this.rEar)
        translate(0, -50)
        rotate(4)
        fill(255)
        beginShape()
        curveVertex(31, 4)
        curveVertex(31, 4)
        curveVertex(43, -3)
        curveVertex(63, -10)
        curveVertex(65, 10)
        curveVertex(61, 28)
        curveVertex(61, 28)
        endShape()
        pop()

        push()
        rotate(this.lEar)
        translate(0, -50)
        rotate(-4)
        fill(255)
        beginShape()
        curveVertex(-31, 4)
        curveVertex(-31, 4)
        curveVertex(-43, -3)
        curveVertex(-63, -10)
        curveVertex(-65, 10)
        curveVertex(-61, 28)
        curveVertex(-61, 28)
        endShape()
        pop()

        pop()
        push()
        translate(0, -218)
        noFill()
        stroke(117, 115, 114)
        strokeWeight(3)
        beginShape()
        curveVertex(8, 0)
        curveVertex(8, 0)
        curveVertex(6, 23)
        curveVertex(6, 23)
        endShape()
        beginShape()
        curveVertex(-11, 1)
        curveVertex(-11, 1)
        curveVertex(-11, 20)
        curveVertex(-11, 20)
        endShape()
        beginShape()
        curveVertex(23, 2)
        curveVertex(23, 2)
        curveVertex(21, 22)
        curveVertex(21, 22)
        endShape()
        pop()

        // console.log(mouseX - 283, mouseY - 377)
        pop()


        pop();
    }
}

class AustinDancer {
    constructor(startX, startY) {
        this.x = startX;
        this.y = startY;
        this.rotate = 0
        this.limbX = 25
        this.limbY = 25
        // add properties for your dancer here:
        //..
        //..
        //..
    }
    update() {
        // update properties here to achieve
        // your dancer's desired moves and behaviour
        this.rotate = map(sin(frameCount * 0.11), -1, 1, -.15, .15)
    }
    display() {
        // the push and pop, along with the translate 
        // places your whole dancer object at this.x and this.y.
        // you may change its position on line 19 to see the effect.

        push();

        translate(this.x, this.y);
        scale(1.2)
        noStroke()

        rotate(this.rotate)
        //body_upper
        fill(100, 50, 50)
        quad(-25, -25, 25, -25, 18, 25, -18, 25)
        fill(80, 40, 40)
        quad(1, 0, -1, 0, -1, -25, 1, -25)


        //arms
        fill(100, 50, 50)
        quad(-2 * this.limbX + 5, -2 * this.limbY - 5, -2 * this.limbX - 5, -2 * this.limbY + 5, -this.limbX + 5, -this.limbY + 15, -this.limbX + 15, -this.limbY + 5)
        quad(this.limbX - 15, -this.limbY + 5, 2 * this.limbX - 5, -2 * this.limbY - 5, 2 * this.limbX + 5, -2 * this.limbY + 5, this.limbX - 5, -this.limbY + 15)

        //hands
        fill(200, 0, 0)
        circle(2 * this.limbX, -2 * this.limbY, 20)
        circle(-2 * this.limbX, -2 * this.limbY, 20)

        //head
        fill(200, 0, 0)
        circle(0, -50, 60)

        //eyes
        fill(255)
        circle(-12, -50, 20)
        circle(12, -50, 20)

        fill(20)
        circle(-12, -50, 13)
        circle(12, -50, 13)

        //Mouth
        stroke(0)
        strokeWeight(2)
        noFill()
        arc(0, -38, 20, 12, 0.3, 2.5)
        pop();


        push()

        translate(this.x, this.y);
        noStroke()
        scale(1.2)

        rotate(-this.rotate)

        //body_lower
        fill(0, 0, 200)
        quad(-25, 25, 25, 25, 22, 0, -22, 0)
        ellipse(0, 25, 50, 20)
        //legs
        quad(-this.limbX + 15, this.limbY + 5, -1.5 * this.limbX + 15, 2 * this.limbY + 5, -1.65 * this.limbX + 5, 2 * this.limbY - 5, -this.limbX + 5, this.limbY - 5)
        quad(this.limbX - 15, this.limbY + 5, 1.5 * this.limbX - 15, 2 * this.limbY + 5, 1.65 * this.limbX - 5, 2 * this.limbY - 5, this.limbX - 5, this.limbY - 5)

        //feet
        fill(0, 0, 100)
        arc(-1.5 * this.limbX + 6, 2 * this.limbY + 5, 20, 20, 3.6, TWO_PI + 0.6)
        arc(1.5 * this.limbX - 6, 2 * this.limbY + 5, 20, 20, 2.7, TWO_PI - 0.6)

        pop()
    }
}

class sydneyDancer {
    constructor(startX, startY) {
        this.x = startX;
        this.y = startY;


        this.angle = 0;
        this.size = 90;
        this.tentacleCount = 6;
        this.xOffset = 0;
        this.yOffset = 0;
    }

    update() {

        this.angle += 0.05;
        this.xOffset = sin(this.angle) * 25;
        this.yOffset = cos(this.angle * 2) * 10;
    }

    display() {
        push();
        translate(this.x + this.xOffset, this.y + this.yOffset);

        noStroke();
        fill(200, 200, 200);
        ellipse(0, 0, this.size, this.size);


        fill(0);
        ellipse(-15, -10 + sin(this.angle * 2) * 3, 12, 12);
        ellipse(15, -10 - sin(this.angle * 2) * 3, 12, 12);


        stroke(200, 200, 200);
        strokeWeight(8);
        noFill();
        for (let i = 0; i < this.tentacleCount; i++) {
            let a = (TWO_PI / this.tentacleCount) * i;
            let wiggle = sin(this.angle * 3 + a) * 15;


            let tx = cos(a) * (this.size / 2);
            let ty = sin(a) * (this.size / 2);


            let ex = tx + wiggle;
            let ey = ty + 30 + wiggle * 0.5;

            line(tx, ty, ex, ey);
        }

        this.drawReferenceShapes();

        pop();
    }

    drawReferenceShapes() {
        noFill();
        stroke(255, 0, 0);
        line(-5, 0, 5, 0);
        line(0, -5, 0, 5);
        stroke(255);
        // rect(-100, -100, 200, 200);
        fill(255);
        stroke(0);
    }
}

class TowakoDancer {
    constructor(startX, startY) {
        this.x = startX;
        this.y = startY;
        // add properties for your dancer here:
        this.t = 0;
        this.bodyColor = color(188, 239, 247);
        this.accentColor = color(245, 74, 12);
        //..
        //..
        //..
    }


    update() {
        // update properties here to achieve
        // your dancer's desired moves and behaviour

        if (frameCount % 100 == 0)
            console.log("frame!")
        this.t += 0.05;


        this.floatY = sin(this.t * 2.0) * 6;

        this.swingX = sin(this.t * 1.4) * 4;

        this.wingDeg = sin(this.t * 3.5) * 15;

    }


    display() {
        // the push and pop, along with the translate 
        // places your whole dancer object at this.x and this.y.
        // you may change its position on line 19 to see the effect.
        push();
        translate(this.x + this.swingX, this.y + this.floatY);
        // ******** //
        // ⬇️ draw your dancer from here ⬇️
        noStroke()

        fill(this.bodyColor);
        ellipse(0, 30, 80, 170);
        circle(0, -50, 85);

        push();
        rotate(radians(this.wingDeg));
        ellipse(40, -10, 145, 30);
        pop();


        push();
        rotate(radians(-this.wingDeg));
        ellipse(-40, -10, 145, 30);
        pop();


        triangle(-10, -70, 40, -70, 30, -110);
        triangle(10, -70, -40, -70, -30, -110);


        fill(this.accentColor);
        circle(0, -40, 40);
        ellipse(0, 10, 40, 80);


        //   this.drawReferenceShapes();
        pop();
    }
    //   drawReferenceShapes() {
    //     noFill();
    //     stroke(255, 0, 0);
    //     line(-5, 0, 5, 0);
    //     line(0, -5, 0, 5);
    //     stroke(255);
    //     rect(-100, -100, 200, 200);
    //     fill(255);
    //     stroke(0);
    //   }
}

*/
class XinyanHuangDancer 
{
  constructor(startX, startY) 
  {
    this.x = startX;
    this.y = startY;
    this.glowColor = random(360);
    this.glowIntensity = 0.5;
    this.bodycolor = random(360);
    this.monsterSize = 70;
    this.eyeSize = 30;
    this.spikeSize = 20;
    this.breathe = true;
    this.Timer2 = 0;
    this.isBlinking = false;
    }
  update() 
    {
    //身体大小变化
    colorMode(HSB);
    //noLoop();
    if(this.breathe){
      this.monsterSize+=5;
      if(this.monsterSize>100){
        this.breathe = false;}
      }
      else{
        this.monsterSize -=10;
        if(this.monsterSize<70){
          this.breathe = true;
        }
      }
    
    /*
    this.monsterSize += 10;
    if(this.monsterSize>110){
    this.monsterSize = lerp(this.monsterSize,70,0.05);
    */

    //眨眼
    this.Timer2++;
  if (this.Timer2 > 100) { this.isBlinking = true; this.Timer2 = 0; }
  if (this.isBlinking) {
    this.eyeSize = lerp(this.eyeSize, 5, 0.3);
    if (this.eyeSize < 6) this.isBlinking = false;
  } else {
    this.eyeSize = lerp(this.eyeSize, 30, 0.3);
  }
  }



  
  display() 
  {
    // the push and pop, along with the translate
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️
    //发光
    fill(this.glowColor, 80, 100, this.glowIntensity);
    noStroke();
    circle(0,0, this.monsterSize + 15);
    fill(this.glowColor, 80, 100, this.glowIntensity * 0.5);
    circle(0,0, this.monsterSize + 25);
    fill(this.glowColor, 80, 100, this.glowIntensity * 0.35);
    circle(0,0, this.monsterSize + 35);

    //手
    fill(random(360),85,90);
    strokeWeight(10);
    bezier(0,0,-100,random(-50,50), - 75,
   random(-50,50),-100,0);
  bezier(0,0,100,random(-50,50),75,random(-50,50),100,0);
 
    //身体
    fill(this.bodycolor,80,90);
    circle(0,0,this.monsterSize);
    
    //尖刺
    for (let i = 0; i < 15; i++) {
      let angle = map(i, 0, 15, 0, TWO_PI);
      fill(random(360), 80, 90);
      noStroke();
      let r1 = this.monsterSize / 2 + this.spikeSize + 10;
      let r2 = this.monsterSize / 2 + this.spikeSize / 2;
      triangle(
        0,
        0,
        cos(angle) * r1,
        sin(angle) * r1,
        cos(angle + PI / 15) * r2,
        sin(angle + PI / 15) * r2
      );
    }
    //眼睛

    fill('white');
    ellipse(-40, -20, this.eyeSize + 15, this.eyeSize + 10);
    fill(0, 0, 0);
    ellipse(-40, -20, this.eyeSize / 2, this.eyeSize / 2);
    fill('white');
    ellipse(40, -20, this.eyeSize + 15, this.eyeSize + 10);
    fill(0, 0, 0);
    ellipse(40, -20, this.eyeSize / 2, this.eyeSize / 2);
    //嘴
    noFill();
    stroke(0, 0, 0);
    strokeWeight(4);
    arc(0, 20, 60, 40, 0, PI);

    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too,
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    // this.drawReferenceShapes()

    pop();
  }
 
}


// from Micheal
class Tapper {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.t = 0;
  }

  update() {
    this.t += 0.05;
    this.hipSwing = sin(this.t) * 8; //side movement
    this.legSwing = sin(this.t) * 12; // leg swing
    this.armSwing = sin(this.t * 0.5) * 0.3; // arm movement
  }
display() {
  push();
  translate(this.x, this.y);

  stroke(255);
  strokeWeight(3);
  noFill();

  // body tilt
  push();
  let tilt = this.hipSwing * 0.2; 
  translate(this.hipSwing, 0);
  rotate(tilt); 
  line(0, -50, 0, 0);
  // head
  ellipse(0, -80, 20);
  
  // arms swing relative to body
  let shoulderY = -40;
  let armLength = 30;
  let armAngle = this.armSwing;

  // left arm draws arm based off there the shoulder y level should be and rotates it 
  push();
  translate(-10, shoulderY);
  rotate(armAngle);
  line(0, 0, -armLength, 0);
  pop();

  // right arm draws arm based off there the shoulder y level should be and rotates it 
  push();
  translate(10, shoulderY);
  rotate(armAngle);
  line(0, 0, armLength, 0);
  pop();

  pop();

  // creates main hip point where the legs and hips will swing
  push();
  translate(this.hipSwing, 0);
  ellipse(0, 0, 10);

  // legs swing, just two lines going opposite directions just like the arms 
  let legMovement = this.legSwing;
  line(0, 0, -25 + legMovement, 40);
  line(0, 0, 25 + legMovement, 40);
  pop();

  // reference box and cross
  this.drawReferenceShapes();

  pop();
}

  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}


// From Nick
class NickDancer 
{
  constructor(startX, startY) 
  {
    this.x = startX;
    this.y = startY;
    // add properties for your dancer here:
    this.time = 0;
    this.bobAmount = 10;
    this.speed = 1.5;
  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    this.time += 0.08 * this.speed;
  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️

    let bob = sin(this.time) * this.bobAmount;
    
    stroke(255);
    strokeWeight(2);
    fill(255);
    
    push();
    translate(0, 70 + bob);
    rotate(this.time);
    noFill();
    circle(0, 0, 40);
    line(-10, -10, 10, 10);
    line(-10, 10, 10, -10);
    pop();
    
    push();
    translate(0, 40 + bob);
    line(0, 0, 0, 30);
    
    fill(255);
    noStroke();
    ellipse(0, 2, 20, 8);
    stroke(255);
    
    fill(255);
    triangle(-15, 0, 15, 0, 0, -25);
    
    strokeWeight(2);
    noFill();
    
    let pedalRadius = 15;
    let wheelCenterY = 30;
    let leftPedalX = cos(this.time) * pedalRadius;
    let leftPedalY = sin(this.time) * pedalRadius + wheelCenterY;
    let rightPedalX = cos(this.time + PI) * pedalRadius;
    let rightPedalY = sin(this.time + PI) * pedalRadius + wheelCenterY;
    
    line(0, wheelCenterY, leftPedalX, leftPedalY);
    line(0, wheelCenterY, rightPedalX, rightPedalY);
    
    let thighLength = 18;
    
    let leftDist = dist(0, 0, leftPedalX, leftPedalY);
    let leftAngle = atan2(leftPedalY, leftPedalX);
    let leftMidDist = min(leftDist / 2, thighLength);
    let leftKneeX = cos(leftAngle) * leftMidDist + sin(leftAngle) * 8;
    let leftKneeY = sin(leftAngle) * leftMidDist - cos(leftAngle) * 8;
    line(0, 0, leftKneeX, leftKneeY);
    line(leftKneeX, leftKneeY, leftPedalX, leftPedalY);
    
    rectMode(CENTER);
    fill(255);
    noStroke();
    rect(leftPedalX, leftPedalY, 12, 4);
    stroke(255);
    
    let rightDist = dist(0, 0, rightPedalX, rightPedalY);
    let rightAngle = atan2(rightPedalY, rightPedalX);
    let rightMidDist = min(rightDist / 2, thighLength);
    let rightKneeX = cos(rightAngle) * rightMidDist + sin(rightAngle) * 8;
    let rightKneeY = sin(rightAngle) * rightMidDist - cos(rightAngle) * 8;
    line(0, 0, rightKneeX, rightKneeY);
    line(rightKneeX, rightKneeY, rightPedalX, rightPedalY);
    
    rectMode(CENTER);
    fill(255);
    noStroke();
    rect(rightPedalX, rightPedalY, 12, 4);
    stroke(255);
    
    strokeWeight(2);
    line(-15, -10, -25, -5);
    line(15, -10, 25, -5);
    
    noFill();
    circle(0, -40, 25);
    
    fill(255);
    triangle(-10, -52, 10, -52, 0, -70);
    
    strokeWeight(3);
    point(3, -42);
    point(8, -40);
    
    pop();




    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    //this.drawReferenceShapes()

    pop();
}
}

// From Alyx
class AlyxDancer 
{
  constructor(startX, startY, colorR, colorG, colorB) {
    this.x = startX;
    this.y = startY;
    this.f = 100;
    this.j = 0
    this.r = colorR;
    this.g = colorG;
    this.b = colorB;
    this.arm = 0;
    this.leg = 0;
    this.tail = 0;
    this.horn = 20;
    this.speed = 1
    this.pistol = 0;
    
  }
  update() {
    this.x += this.speed;
    this.y += sin(frameCount*0.05) * 2 ;
    
    this.f += sin(frameCount*0.05) * 0.5 ;
    this.j += sin(frameCount*0.05);
    this.arm = sin(frameCount * 0.1) * 30;
    this.leg = sin(frameCount * 0.15) * 20;
    this.tail = sin(frameCount * 0.1) * 10;
    this.pistol += 1
    if( this.x > 2*width/3 | this.x < width/3) {
      this.speed *= -1
    }
    if(keyIsPressed) {
      this.leg *= 1.5
    }
    
  }
  
  
   
  display() {
    this.r = map(this.f, 90, 110, 200, 50);
    this.g = map(this.f, 90, 110, 50, 200);
    this.b = map(this.f, 90, 110, 50, 200);
    
    

    push();
    translate(this.x, this.y);
      push()
    scale(0.5)
   
      fill(this.r, this.g, this.b);
      noStroke();
      //body
      circle(0, 0 - this.j, this.f );
      rect(0 - this.f/2, 0 - this.j, this.f);
      ellipse(0, 0 + this.f - this.j, this.f, this.f - 60);
      //head
      ellipse(0, 0 - 50 - this.j, this.f, this.f - 20)
      //eyes
      fill(255)
      ellipse(-15 - this.j/6, -60 - this.j, 10, 10);
      ellipse(15 + this.j/6, -60 - this.j, 10, 10);
      fill(0)
      ellipse(-15 - this.j/6, -60 - this.j, 8, 8);
      ellipse(15 + this.j/6, -60 - this.j, 8, 8);
      //eye brown
      noFill()
      stroke(50)
      strokeWeight(3)
      bezier(-25 - this.j/6, -70 - this.j, -15 - this.j/6, -80 - this.j, -10 - this.j/6, -60 - this.j, -5 - this.j/6, -70 - this.j)
      bezier(25 + this.j/6, -70 - this.j, 15 + this.j/6, -80 - this.j, 10 + this.j/6, -60 - this.j, 5 + this.j/6, -70 - this.j)
      //heart
      noStroke()
      fill("red")
      circle(10 - this.j/10,10 - this.j/4,10 + this.j/5);
      circle(20 + this.j/10,10 - this.j/4,10 + this.j/5);
      triangle(
        5 - this.j/5,12 - this.j/4,25 + this.j/5,12 - this.j/4,15,22 - this.j/4  + this.j/5
      )
      //mouth
      fill(255, 100, 100);
      arc(0, -50 - 3 * this.j/4, 30, 20, 0, PI);
    
      //hat
      fill("#795548")
      stroke("#250C03B7")
      
      rect(20 - this.f/2, -150 - this.j, this.f - 45, this.f - 50)
      ellipse(0, - 90 - this.j, this.f + 20, 30)
      ellipse(-3, - 150 - this.j, this.f - 46, 20)
      noStroke()
      rect(22 - this.f/2, -110 - this.j, this.f - 49, this.f - 90)
      //arms and legs
      fill(this.r, this.g, this.b);
      push();
      rotate(radians(this.arm * 0.15));
      rect(-this.f * 0.7, -30, 10, 60);
       //pistol
       push();
        translate(-this.f * 0.7 - 2, 26); 
        rotate(radians(this.pistol * 10));    
        fill("grey");
        rect(-2.5, 0, 5, 30); 
        rect(0, -3, 17, 8)
        noFill()
        strokeWeight(2)
        stroke("grey")
        rect(0, -3, 10, 15)
        rect(0, 7, 5,1)
        pop();
      pop();


      push();
      rotate(radians(this.arm));
      rect(this.f * 0.6, -30, 10, 60);
      pop();

      rect(-30, 100 + this.leg, 15, 50);
      rect(20, 100 - this.leg, 15, 50);
    
    //tongue
    if(keyIsPressed){
      fill("#CE514C")
      rect(-10,-this.j * 0.8 - 45,20,30)
      ellipse(0, -this.j * 0.8 - 15 , 20, 10)
      fill("#BF3934")
      rect(-1,-this.j * 0.8 - 45,2,30)
    }
    
        



  
    pop();
    //this.drawReferenceShapes()
    
   
    
  }
}


// From Jinhan Niu
class Stickman
{ 
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.groundY = startY; // Remember the ground position

    //Basic Look
    this.bodyHeight = 80;
    this.limbLength = 40;
    this.headR = 20; 
    this.strokeW = 3; 
    this.color = color(255);

    //Movement
    this.bodyAngle = 0; //swayangle
    this.armAngle = 0;
    this.bodySpeed = random(0.01, 0.05); // swayspeed
    this.armSpeed = random(0.05, 0.1);

    //Mouse Jump
    this.velY = 0; // jump velocity
    this.gravity = 0.3; //Gravity
    this.isJumping = false; 
    this.hitBox = this.headR + 20; 
  }

  update() {
    //randomly change speed
    //chance each frame to change speed)
    if (random(1) < 0.01) {
      this.bodySpeed = random(0.01, 0.05);
    }
    if (random(1) < 0.01) {
      this.armSpeed = random(0.05, 0.2);
    }

    // Basic Movement
    this.bodyAngle += this.bodySpeed;
    this.armAngle += this.armSpeed;

    //Mouse Interaction
    //Calculate distance between mouse and stickman's head
    let d = dist(mouseX, mouseY, this.x, this.y - this.bodyHeight - this.headR);

    // if mouse is close
    if (d < this.hitBox && !this.isJumping) {
      this.isJumping = true; // Set state to "jumping"
      this.velY = -8; // Apply an upward force
    }

    //Jump Physics
    if (this.isJumping) {
      this.y += this.velY; // Move Y position based on velocity
      this.velY += this.gravity; // Apply gravity

      //if on the ground
      if (this.y >= this.groundY) {
        this.y = this.groundY; //on the ground
        this.isJumping = false; //set state
        this.velY = 0; //Reset
      }
    }
  }

  display() {
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️

    // Calculate body rotation
    let bodyRot = sin(this.bodyAngle) * 0.2;
    rotate(bodyRot);

    stroke(this.color);
    strokeWeight(this.strokeW);
    noFill();

    //Head
    ellipse(0, -this.bodyHeight - this.headR, this.headR * 2);

    //Body
    line(0, 0, 0, -this.bodyHeight);

    // Right Arm
    push();
    translate(0, -this.bodyHeight * 0.75); 
    rotate(sin(this.armAngle) * 0.5);
    line(0, 0, this.limbLength, 0);
    pop();

    //Left Arm
    push();
    translate(0, -this.bodyHeight * 0.75); 
    rotate(sin(this.armAngle) * -0.5);
    line(0, 0, -this.limbLength, 0);
    pop();

    //Right Leg
    push();
    translate(0, 0); 
    rotate(sin(this.bodyAngle * 0.8) * 0.2);
    line(0, 0, this.limbLength * 0.5, this.limbLength);
    pop();

    //Left Leg
    push();
    translate(0, 0); 
    rotate(sin(this.bodyAngle * 0.8) * -0.2);
    line(0, 0, -this.limbLength * 0.5, this.limbLength);
    pop();

    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // comment this out or delete it to remove the red box
    // this.drawReferenceShapes() //

    pop();
  }
}


// From Sarah
class BadbadtzSarah {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.t = 0;
    this.mouth = 0;
    this.jump = 0;
    this.jumpSpeed = 0;
    this.dance = random(0.5,1);
    this.move = random([-1,1]);
    this.moveSpeed = random(0.2,0.5);
    this.color = 0;
    // add properties for your dancer here:
    //..
    //..
    //..
  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    this.t += 0.05;
    this.mouth = sin(this.t)*6;
    this.jump += this.jumpSpeed;
    this.jumpSpeed += random(0.5,2);
    if (this.jump > 0) {
      this.jump = 0;
      this.jumpSpeed = random(-8, -5);
    }
    this.x += this.moveSpeed * this.move;
    if (this.x > 200 || this.x < -200) {
      this.move *= -1;
    }
    this.color += 0.005; 
     if (this.color > 1) {
      this.color = 0;
    }
  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    let bodyR = lerp(20, 50, this.color);
    let bodyG = lerp(20, 60, this.color);
    let bodyB = lerp(30, 160, this.color);

    push();//身体
    translate(this.x, this.y+this.jump);
    rotate(sin(this.t)*0.1);
    fill(bodyR, bodyG, bodyB);
    ellipse(0,40,80,90);
    fill(250);
    noStroke();
    ellipse(0,55,55,60);
    pop();

    push();//头
    translate(this.x, this.y+this.jump);
    noStroke();
    fill(bodyR, bodyG, bodyB);
    ellipse(0,-20,70,60);
    
    fill(255);
    ellipse(-15,-30,15,20);
    ellipse(15,-30,15,20);
    
    fill(0);
    ellipse(-15,-30,5,8);
    ellipse(15,-30,5,8);
    
    
    noStroke();
    fill(255,245,127);
    ellipse(0,this.mouth-14.5,18,20);

    stroke(0);
    fill(255);
    ellipse(0,this.mouth-14.5,13,15);
    pop();
    
    push();//左翅膀
    translate(this.x-35, this.y+10+this.jump);
    rotate(sin(this.t)*this.dance);
    noStroke();
    fill(bodyR, bodyG, bodyB);
    ellipse(0,30,30,50);
    pop();
  
    push();//右翅膀
    translate(this.x+30, this.y+10+this.jump);
    rotate(-sin(this.t)*this.dance);
    noStroke();
    fill(bodyR, bodyG, bodyB);
    ellipse(0,30,30,50);
    pop();
  
    push();//脚
    translate(this.x, this.y+this.jump);
    rotate(sin(this.t)*0.1);
    fill(255,245,127);
    noStroke()
    ellipse(15,90,20,10);
    ellipse(-15,90,20,10);
    pop();
    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    this.drawReferenceShapes()

    pop();
  }

  
  drawReferenceShapes() {
    translate(this.x, this.y);
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(100);
    rect(-100, -100, 200,200 );
    fill(255);
    stroke(0);
  }
}