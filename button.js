class Button {
    constructor(posX, posY, w, h) {
        this.posX = posX;
        this.posY = posY;
        this.width =  w;
        this.height = h;
        this.pressed = false;
        this.on = false;
        this.TEALISH = color(2, 127, 106);
        this.LIGHT_TEALISH = color(0, 255, 212);
        this.currColor = this.TEALISH;
    }

    show() {
        push();
            translate(this.posX, this.posY);
            if(!this.pressed) {
                fill(this.currColor);
                rect(0, 0, this.width, this.height);
                quad(0, this.height, 4, this.height + 2,
                        this.width + 4, this.height + 2, this.width, this.height);
                quad(this.width, 0, this.width + 4, 2,
                        this.width + 4, this.height + 2, this.width, this.height);
            } else if (this.pressed) {
                fill(this.currColor);
                rect(4, 2, this.width, this.height);
            }
        pop();
    }

    clicked(mosX, mosY) {
        if(mosX >= this.posX && mosX <= this.posX + this.width
            && mosY >= this.posY && mosY <= this.posY + this.height) {
                return true;
            } else {
                return false;
            }
    }

    pressure() {
        this.pressed = true;
        if(this.on) {
            this.on = false;
            this.currColor = this.TEALISH;
        } else if (!this.on) {
            this.on = true;
            this.currColor = this.LIGHT_TEALISH;
        }
    }

    released() {
        this.pressed = false;
    }
}
