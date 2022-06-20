class Character {
    constructor(x, y, sizex, sizey, ctx, image) {
        this.x = x;
        this.y = y;
        this.width = sizex;
        this.height = sizey;
        this.life = 100;
        this.speed = 1;
        this.ctx = ctx;
        this.img = image;
        this.draw();
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

    }

    isAlive() {

    }

    draw() {
        this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}