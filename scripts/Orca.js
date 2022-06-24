class Orca extends Character {
    constructor(x, y, sizex, sizey, ctx, image) {
        super(x, y, sizex, sizey, ctx, image);
        this.life = 40;
        this.sink = 0;
        this.bubbles = 0;
    }

    moveFront() {
        if (this.x <= 1700) {
            this.x += 60;
        } else {
            this.x = this.x
        }

    }

    moveBack() {
        if (this.x >= 60) {
            this.x -= 60;
        } else {
            this.x = this.x
        }

    }

    jump() {
        if (this.y >= 250) {
            this.y -= 60;
        } else {
            this.y = this.y
        }

    }

    goDown() {
        if (this.y <= 1000) {
            this.y += 60;
        } else {
            this.y = this.y
        }

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