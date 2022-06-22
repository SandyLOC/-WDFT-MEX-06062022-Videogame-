class Orca extends Character {
    constructor(x, y, sizex, sizey, ctx, image) {
        super(x, y, sizex, sizey, ctx, image);
        this.life = 40;
        this.sink = 0;
        this.bubbles = 0;
    }

    moveFront() {
        this.x += 60;
    }

    moveBack() {
        this.x -= 60;
    }

    jump() {
        this.y -= 60;
    }

    goDown() {
        this.y += 60;
    }

    getDamage(damage) {
        this.life -= damage;
    }
    getBubbles(bubbles) {
        this.bubbles += bubbles;
    }
    shoot(x, y, image) {
        const createdBubble = new Bubble(x, y, image, ctx);
        return createdBubble;
    }

    isAlive() {
        if (this.life > 0) {
            return true;
        }
        return false;
    }
}