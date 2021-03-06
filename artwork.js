class Artwork {
    constructor(posX, posY, scl) {
        this.posX = posX;
        this.posY = posY;
        this.scl = scl;

        //STATES: 'sitting' or 'scalingBack', 'scaledBack'
        this.STATE = 'sitting';

        this.PLANET_HELD = false;

        //this.SHOW_NOT_ACTIVE = false;

        this.person = new Person(205, 350, 1);
        this.bg = new ArtworkBg(this.posX, this.posY, this.scl);

        this.activePlanets = new Array();
        this.notActivePlanets = new Array();

        this.activePlanets.push(new Neptune(141, 146, 1, 50, 0));
        this.activePlanets.push(new Uranus(215, 125, 1, 50, 0));
        this.activePlanets.push(new Mercury(242, 231, 1, 60, 0));
        this.activePlanets.push(new Jupiter(216, 187, 1, 85, 0));
        this.activePlanets.push(new Saturn(140, 215, 1, 90, 0));
        this.activePlanets.push(new Venus(186, 255, 1, 75, 0));
        this.activePlanets.push(new Mars(160, 110, 1, 90, 0));
        this.activePlanets.push(new Moon(165, 165, 1, 40, 0));
    }

    show() {
        push();
            translate(this.posX, this.posY);
            scale(this.scl);

            noStroke();
            this.bg.show();
            push();
                //translate(186, 384);
                //rotate(radian(degree));
                for(let i = 0; i < this.activePlanets.length; i++) {
                    stroke(0);
                    strokeWeight(1);
                    line(186, 384,
                            this.activePlanets[i].posX,
                            this.activePlanets[i].posY);
                }

                for(let i = 0; i < this.activePlanets.length; i++) {
                    noStroke();
                    this.activePlanets[i].show();
                }
            pop();
            this.person.show(this.bg.posX, this.bg.posY);
        pop();
    }

    update() {
        for(let i = 0; i < this.activePlanets.length; i++) {
            if(this.activePlanets[i].exploded()) {
                this.notActivePlanets.push(this.activePlanets[i]);
                this.activePlanets.splice(i, 1);
                console.log(this.activePlanets.length);
            } else if(!this.activePlanets.length < 1) {
                this.activePlanets[i].update();
            }
        }

        if(this.STATE == 'sitting' && this.activePlanets.length == 0) {
            this.STATE = 'scalingBack';
        } else if (this.STATE == 'scalingBack') {
            this.posX += 2;
            this.posY += 1;
            this.scl -= 0.0035;

            this.person.updateScale(this.scl);
            this.bg.updateScale(this.scl);

            if(this.scl < .75) {
                this.STATE = 'scaledBack';
            }
        } else if (this.STATE == 'scaledBack') {

        }
    }

    getParticlePlanets(){
        for(let i = 0; i < this.notActivePlanets; i++) {
            this.notActivePlanets[i].scl = 0.001;
        }

        return this.notActivePlanets;
    }

    scaleBack() {
        this.STATE = 'scalingBack';
    }

    processClick(x, y) {
        if(this.PLANET_HELD == false) {
            for(let i = 0; i < this.activePlanets.length; i++) {
                this.activePlanets[i].checkClick(x, y);
            }
        }
    }

    mouseDrag(x, y) {
        for(let i = 0; i < this.activePlanets.length; i++) {
            if(this.activePlanets[i].checkDrag(x, y)) {
                this.PLANET_HELD = true;
                break;
            }
        }
    }
}
