var artwork;
var button;

var notActiveParticlePlanets;

var inc = 0.005;
var scl = 10;
var cols, rows;

var particles = [];
var flowfield;
var zoff = 0;

function setup() {
    createCanvas(410, 500);

    artwork = new Artwork(0, 0, 1);
    button = new Button(40, 150, 60, 30);
    frameRate(120);

    cols = floor(400 / scl);
    rows = floor(400 / scl);
    flowfield = new Array(cols, rows);

    for(let i = 0; i < 200; i++) {
        particles[i] = new Particle();
    }
}

function draw() {
    if(artwork.STATE == 'scaledBack' && !button.on
        || artwork.STATE == 'scalingBack' && !button.on) {
        colorMode(RGB, 255);
        background(255);
        notActiveParticlePlanets = artwork.getParticlePlanets();
    } else if(artwork.STATE == 'scaledBack' && button.on) {
        yoff = 0;
        for(var y = 0; y < rows; y++) {
            var xoff = 0;
            for(var x = 0; x < cols; x++) {
                var index = (x + y * cols);
                var angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
                var v = p5.Vector.fromAngle(angle);
                v.setMag(1);
                flowfield[index] = v;
                xoff += inc;
                stroke(0, 50);
            }
            yoff += inc;
        }
        zoff += 0.001;
    }

    stroke(0);
    fill(151);
    setGradient(0, 390, width, 500 - 390, color(255), color(50), 'y_axis');
    line(0, 390, 410, 390);
    if(artwork.STATE == 'scaledBack') {
        button.show();
    }

    if(button.on) {
        for(let i = 0; i < particles.length; i++) {
            particles[i].follow(flowfield);
            particles[i].update();
            particles[i].edges();
            particles[i].show();
        }

        for(let i = 0; i < notActiveParticlePlanets.length; i++) {
            notActiveParticlePlanets[i].posX = particles[i].pos.x;
            notActiveParticlePlanets[i].posY = particles[i].pos.y;
        }
    }

    if(button.counter > 2) {
        background(255);
        colorMode(RGB, 255);
        for(let i = 0; i < notActiveParticlePlanets.length; i++) {
            notActiveParticlePlanets[i].scl = 0.5;
            notActiveParticlePlanets[i].show();
        }
    } else {

    }

    colorMode(RGB, 255);
    artwork.show();
    artwork.update();
}

function mousePressed() {
    if(artwork.STATE == 'scaledBack' && button.clicked(mouseX, mouseY)) {
        if(button.counter <= 2) {
            button.pressure();
        }
    }
}

function mouseReleased() {
    button.released();
    if(artwork.PLANET_HELD) {
        artwork.PLANET_HELD = false;
    } else if (!artwork.PLANET_HELD) {
        artwork.processClick(mouseX, mouseY);
    }
}

function mouseDragged() {
    artwork.mouseDrag(mouseX, mouseY);
}

function setGradient(x, y, w, h, col1, col2, drawAcross) {

  noFill();

  if (drawAcross == 'y_axis') {
    for (var i = y; i <= y+h; i++) {
      var interval = map(i, y, y+h, 0, 1);
      var c = lerpColor(col1, col2, interval);
      stroke(c);
      line(x, i, x+w, i);
    }
  }
  else if (drawAcross == 'x_axis') {
    for (var i = x; i <= x+w; i++) {
      var interval = map(i, x, x+w, 0, 1);
      var c = lerpColor(c1, c2, interval);
      stroke(c);
      line(i, y, i, y+h);
    }
  }
}
