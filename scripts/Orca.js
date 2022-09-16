class Orca extends Character {
    constructor(x, y, sizex, sizey, ctx, image) {
        super(x, y, sizex, sizey, ctx, image);
        this.life = 40;
        this.sink = 0;
        this.bubbles = 0;
    }

    moveFront() {
        if (this.x <= 1026) {
            this.x += 30;
        } else {
            this.x = this.x
        }

    }

    moveBack() {
        if (this.x >= 30) {
            this.x -= 30;
        } else {
            this.x = this.x
        }

    }

    jump() {
        if (this.y >= 160) {
            this.y -= 30;
        } else {
            this.y = this.y
        }

    }

    goDown() {
        if (this.y <= 600) {
            this.y += 30;
        } else {
            this.y = this.y
        }

    }

    getDamage(damage) {
        this.life -= damage;
    }
    getBubbles(bubbles) {
        if(this.bubbles <= 3) this.bubbles += bubbles;
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