var vS, sS, jS, mS, emS, mmS, uS, nS, vT, sT, jT, mT, emT, mmT, uT, nT;
function setup() {
	createCanvas(410, 500);
    background(215);
    noStroke();

    vS = 1;
    sS = 1;
    jS = 1;
    mS = 1;
    emS = 1;
    mmS = 1;
    uS = 1;
    nS = 1;

    vT = false;
    sT = false;
    jT = false;
    mT = false;
    emT = false;
    mmt = false;
    uT = false;
    nT = false;
}

function draw() {
    background(225);
    bG();
    lines();
    person(205, 350);
    if(nS <= 1.4)
        neptune(141, 146, nS);
    if(uS <= 1.4)
        uranus(215, 125, uS);
    if(mS <= 1.4)
        mercury(242, 231, mS);
    if(jS <= 1.4)
        jupiter(216, 187, jS);
    if(sS <= 1.4)
        saturn(140, 215, sS);
    if(vS <= 1.4)
        venus(186, 255, vS);
    if(mmS <= 1.4)
        mars(160, 110, mmS);
    if(emS <= 1.4)
        moon(165, 165, emS);

    if(vT)
        vS += 0.2;
    if(sT)
        sS += 0.2;
    if(jT)
        jS += 0.2;
    if(mT)
        mS += 0.2;
    if(emT)
        emS += 0.2;
    if(mmT)
        mmS += 0.2;
    if(uT)
        uS += 0.2;
    if(nT)
        nS += 0.2;
}

function mouseClicked() {
    if(mouseX >= 162 && mouseY >= 231 && mouseX <= 208 && mouseY <= 282)
        vT = true;
    if(mouseX >= 105 && mouseY >= 177 && mouseX <= 162 && mouseY <= 246)
        sT = true;
    if(mouseX >= 185 && mouseY >= 155 && mouseX <= 238 && mouseY <= 212)
        jT = true;
    if(mouseX >= 226 && mouseY >= 226 && mouseX <= 267 && mouseY <= 262)
        mT = true;
    if(mouseX >= 151 && mouseY >= 151 && mouseX <= 175 && mouseY <= 179)
        emT = true;
    if(mouseX >= 125 && mouseY >= 77 && mouseX <= 190 && mouseY <= 141)
        mmT = true;
    if(mouseX >= 205 && mouseY >= 100 && mouseX <= 235 && mouseY <= 144)
        uT = true;
    if(mouseX >= 116 && mouseY >= 129 && mouseX <= 141 && mouseY <= 166)
        nT = true;
}

function lines() {
    push();
    stroke(0);
    strokeWeight(1);
    if(!sT)
        line(186, 384, 130, 217);
    if(!nT)
        line(186, 384, 138, 149);
    if(!vT)
        line(186, 384, 185, 255);
    if(!mT)
        line(186, 384, 230, 237);
    if(!uT)
        line(186, 384, 216, 124);
    if(!mmT)
        line(186, 384, 150, 104);
    if(!jT)
        line(186, 384, 220, 183);
    if(!emT)
        line(186, 384, 165, 163);
    pop();
}

function venus(x, y, s) {
    push();
    translate(x,y);
    scale(s);

    fill(241, 125, 98);
    ellipse(0, 0, 75);
    pop();
}

function saturn(x, y, s) {
    push();
    translate(x,y);
    scale(s);

    fill(231, 194, 175);
    ellipse(0, 0, 90);

    stroke(176, 151, 144);
    strokeWeight(5);
    rotate(radians(35));
    line(-80, 5, 80, 5);
    rotate(radians(-35));
    pop();
}

function jupiter(x, y, s) {
    push();
    translate(x,y);
    scale(s);

    fill(186, 179, 172);
    ellipse(0, 0, 85);
    stroke(170, 122, 116);
    strokeWeight(8);
    rotate(radians(30));
    line(-38, 5, 38, 5);
    strokeWeight(5);
    line(-30, 25, 30, 25);
    line(-38, -14, 38, -14);
    strokeWeight(3);
    line(-35, -22, 35, -22);
    rotate(radians(-30));
    pop();
}

function mercury(x, y, s) {
    push();
    translate(x,y);
    scale(s);

    fill(243, 190, 162);
    ellipse(0, 0, 60);
    pop();
}

function moon(x, y, s) {
    push();
    translate(x,y);
    scale(s);

    fill(226, 218, 210);
    ellipse(0, 0, 40);
    pop();
}

function mars(x, y, s) {
    push();
    translate(x,y);
    scale(s);

    fill(219, 98, 90);
    ellipse(0, 0, 90);
    pop();
}

function uranus(x, y, s) {
    push();
    translate(x,y);
    scale(s);

    fill(113, 109, 137);
    ellipse(0, 0, 50);
    pop();
}

function neptune(x, y, s) {
    push();
    translate(x,y);
    scale(s);

    fill(39, 52, 125);
    ellipse(0, 0, 50);
    pop();
}

function person(x, y) {
    push();
    translate(x, y);

    fill(226, 186, 171);
    rotate(radians(-18));
    rect(1, 40, 8, 5, 3, 3, 3, 3);
    rotate(radians(18));

    rotate(radians(18));
    rect(-8, 40, 8, 5, 3, 3, 3, 3);
    rotate(radians(-18));
    fill(37, 45, 81);

    beginShape();
    vertex(-9, 0);
    vertex(-15, 50);
    vertex(15, 50);
    vertex(9, 0);
    endShape();

    rect(-10, 40, 8, 35, 3, 3, 3, 3);
    rect(3, 40, 8, 35, 3, 3, 3, 3);

    rotate(radians(18));
    rect(-8, 8, 8, 35, 3, 3, 3, 3);
    rotate(radians(-18));

    rotate(radians(-18));
    rect(1, 6, 8, 35, 3, 3, 3, 3);
    rotate(radians(18));

    fill(236, 199, 186);
    ellipse(0, -8, 20);
    pop();
}

function bG() {
    push();
    fill(193, 186, 196);
    rect(-3, 354, 500, 500);

    fill(73, 77, 120);
    rect(-5, 394, 500, 500);

    fill(122, 120, 98);
    beginShape();
    vertex(-4, 392);
    vertex(196, 459);
    vertex(416, 394);
    vertex(168, 390);
    endShape();
    pop();
}
