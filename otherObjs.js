class Person {
    constructor(posX, posY, scl) {
        this.posX = posX;
        this.posY = posY;
        this.scl = scl;
    }

    show(bgX, bgY) {
        push();
            translate(bgX, bgY);
            scale(this.scl);
            push();
                translate(this.posX, this.posY);
                scale(this.scl);

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
        pop();
    }

    updateScale(scl) {
        this.scl = scl;
    }
}

class ArtworkBg {
    construnctor(posX, posY, scl) {
        this.posX = posX;
        this.posY = posY;
        this.scl = scl;
    }

    show() {
        push();
            translate(this.posX, this.posY);
            scale(this.scl);

            fill(225);
            rect(0, 0, 410, 500);

            fill(193, 186, 196);
            rect(-3, 354, 413, 146);

            fill(73, 77, 120);
            rect(-5, 394, 415, 106);

            fill(122, 120, 98);
            beginShape();
            vertex(-4, 392);
            vertex(196, 459);
            vertex(416, 394);
            vertex(168, 390);
            endShape();
        pop();
    }

    updateScale(scl) {
        this.scl = scl;
    }
}
