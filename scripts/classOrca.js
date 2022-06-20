class Orca extends Character {
    constructor(x, y, sizex, sizey, ctx, image) {
        super(x, y, sizex, sizey, ctx, image);
        this.life = 100;
        this.sink = 0;
        this.bubbles = 60;
    }

    moveFront() {

    }

    moveBack() {

    }

    jump() {

    }

    goDown() {

    }

    getDamage(damage) {
        this.life -= damage;
    }

    isAlive() {
        if (this.life > 0) {
            return true;
        }
        return false;
    }
}