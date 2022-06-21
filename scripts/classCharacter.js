/*-------------------------------Parent class that draws all the characters--------------------------------*/

class Character {
    constructor(x, y, sizex, sizey, ctx, image) {
        this.x = x;
        this.y = y;
        this.width = sizex;
        this.height = sizey;
        this.speed = 1;
        this.ctx = ctx;
        this.img = image;
        this.draw();
    }

    draw() {
        this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}