class Venus {
    constructor(posX, posY, scl, diameter) {
        this.posX = posX;
        this.posY = posY;
        this.scl = scl;

        this.diameter = diameter;

        this.CLICKED = false;
    }

    show() {
        push();
            translate(this.posX, this.posY);
            scale(this.scl);

            fill(241, 125, 98);
            ellipse(0, 0, this.diameter);
        pop();
    }

    update() {
        if(this.CLICKED) {
            this.scl += 0.2;
        }
    }

    exploded() {
        if(this.scl > 1.4) {
            return true;
        }
    }

    checkClick(clickX, clickY) {
        let xDistance = clickX - this.posX;
        let yDistance = clickY - this.posY;

        let distance = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));

        if(distance <= ((this.scl * this.diameter) / 2)) {
            this.CLICKED = true;
        }
    }
}


class Saturn {
    constructor(posX, posY, scl, diameter) {
        this.posX = posX;
        this.posY = posY;
        this.scl = scl;

        this.diameter = diameter;

        this.CLICKED = false;
    }

    show() {
        push();
            translate(this.posX, this.posY);
            scale(this.scl);

            fill(231, 194, 175);
            ellipse(0, 0, this.diameter);

            stroke(176, 151, 144);
            strokeWeight(5);
            rotate(radians(35));
            line(-80, 5, 80, 5);
            rotate(radians(-35));
        pop();
    }

    update() {
        if(this.CLICKED) {
            this.scl += 0.2;
        }
    }

    exploded() {
        if(this.scl > 1.4) {
            return true;
        }
    }

    checkClick(clickX, clickY) {
        let xDistance = clickX - this.posX;
        let yDistance = clickY - this.posY;

        let distance = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));

        if(distance <= ((this.scl * this.diameter) / 2)) {
            this.CLICKED = true;
        } else {
            this.CLICKED = false;
        }
    }
}


class Jupiter {
    constructor(posX, posY, scl, diameter) {
        this.posX = posX;
        this.posY = posY;
        this.scl = scl;

        this.diameter = diameter;

        this.CLICKED = false;
    }

    show() {
        push();
            translate(this.posX, this.posY);
            scale(this.scl);

            fill(186, 179, 172);
            ellipse(0, 0, this.diameter);
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

    update() {
        if(this.CLICKED) {
            this.scl += 0.2;
        }
    }

    exploded() {
        if(this.scl > 1.4) {
            return true;
        }
    }

    checkClick(clickX, clickY) {
        let xDistance = clickX - this.posX;
        let yDistance = clickY - this.posY;

        let distance = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));

        if(distance <= ((this.scl * this.diameter) / 2)) {
            this.CLICKED = true;
        } else {
            this.CLICKED = false;
        }
    }
}

class Mercury {
    constructor(posX, posY, scl, diameter) {
        this.posX = posX;
        this.posY = posY;
        this.scl = scl;

        this.diameter = diameter;

        this.CLICKED = false;
    }

    show() {
        push();
            translate(this.posX, this.posY);
            scale(this.scl);

            fill(243, 190, 162);
            ellipse(0, 0, this.diameter);
        pop();
    }

    update() {
        if(this.CLICKED) {
            this.scl += 0.2;
        }
    }

    exploded() {
        if(this.scl > 1.4) {
            return true;
        }
    }

    checkClick(clickX, clickY) {
        let xDistance = clickX - this.posX;
        let yDistance = clickY - this.posY;

        let distance = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));

        if(distance <= ((this.scl * this.diameter) / 2)) {
            this.CLICKED = true;
        } else {
            this.CLICKED = false;
        }
    }
}


class Moon {
    constructor(posX, posY, scl, diameter) {
        this.posX = posX;
        this.posY = posY;
        this.scl = scl;

        this.diameter = diameter;

        this.CLICKED = false;
    }

    show() {
        push();
            translate(this.posX, this.posY);
            scale(this.scl);

            fill(226, 218, 210);
            ellipse(0, 0, this.diameter);
        pop();
    }

    update() {
        if(this.CLICKED) {
            this.scl += 0.2;
        }
    }

    exploded() {
        if(this.scl > 1.4) {
            return true;
        }
    }

    checkClick(clickX, clickY) {
        let xDistance = clickX - this.posX;
        let yDistance = clickY - this.posY;

        let distance = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));

        if(distance <= ((this.scl * this.diameter) / 2)) {
            this.CLICKED = true;
        } else {
            this.CLICKED = false;
        }
    }
}

class Mars {
    constructor(posX, posY, scl, diameter) {
        this.posX = posX;
        this.posY = posY;
        this.scl = scl;

        this.diameter = diameter;

        this.CLICKED = false;
    }

    show() {
        push();
            translate(this.posX, this.posY);
            scale(this.scl);

            fill(219, 98, 90);
            ellipse(0, 0, this.diameter);
        pop();
    }

    update() {
        if(this.CLICKED) {
            this.scl += 0.2;
        }
    }

    exploded() {
        if(this.scl > 1.4) {
            return true;
        }
    }

    checkClick(clickX, clickY) {
        let xDistance = clickX - this.posX;
        let yDistance = clickY - this.posY;

        let distance = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));

        if(distance <= ((this.scl * this.diameter) / 2)) {
            this.CLICKED = true;
        } else {
            this.CLICKED = false;
        }
    }
}

class Uranus {
    constructor(posX, posY, scl, diameter) {
        this.posX = posX;
        this.posY = posY;
        this.scl = scl;

        this.diameter = diameter;

        this.CLICKED = false;
    }

    show() {
        push();
            translate(this.posX, this.posY);
            scale(this.scl);

            fill(113, 109, 137);
            ellipse(0, 0, this.diameter);
        pop();
    }

    update() {
        if(this.CLICKED) {
            this.scl += 0.2;
        }
    }

    exploded() {
        if(this.scl > 1.4) {
            return true;
        }
    }

    checkClick(clickX, clickY) {
        let xDistance = clickX - this.posX;
        let yDistance = clickY - this.posY;

        let distance = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));

        if(distance <= ((this.scl * this.diameter) / 2)) {
            this.CLICKED = true;
        } else {
            this.CLICKED = false;
        }
    }
}

class Neptune {
    constructor(posX, posY, scl, diameter) {
        this.posX = posX;
        this.posY = posY;
        this.scl = scl;

        this.diameter = diameter;

        this.CLICKED = false;
    }

    show() {
        push();
            translate(this.posX, this.posY);
            scale(this.scl);

            fill(39, 52, 125);
            ellipse(0, 0, this.diameter);
        pop();
    }

    update() {
        if(this.CLICKED) {
            this.scl += 0.2;
        }
    }
    exploded() {
        if(this.scl > 1.4) {
            return true;
        }
    }

    checkClick(clickX, clickY) {
        let xDistance = clickX - this.posX;
        let yDistance = clickY - this.posY;

        let distance = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));

        if(distance <= ((this.scl * this.diameter) / 2)) {
            this.CLICKED = true;
        } else {
            this.CLICKED = false;
        }
    }
}
