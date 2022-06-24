class Cage {
    constructor(x, y, sizex, sizey, image, ctx) {
        this.x = x;
        this.y = y;
        this.sizex = sizex;
        this.sizey = sizey;
        this.img = image;
        this.ctx = ctx;
    }

    bubbleHits() {

    }

    draw() {
        this.ctx.drawImage(this.img, this.x, this.y, this.sizex, this.sizey);
    }
}

