class Orca extends Character {
    constructor(x, y, sizex, sizey, ctx, image) {
        super(x, y, sizex, sizey, ctx, image);
        this.sink = 0;
        this.bubbles = 60;
    }
}