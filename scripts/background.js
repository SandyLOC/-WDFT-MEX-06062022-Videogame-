/*-------------------------------Moving background--------------------------------*/

const background = new Image();
background.src = "../images/Ocean-light.png";

const backgroundImage = {
    img: background,
    x: 0,
    speed: -1,

    move() {
        this.x += this.speed;
        this.x %= canvas.width;
    },

    draw: function () {
        ctx.drawImage(this.img, this.x, 0, 2000, 1200);
        if (this.speed < 0) {
            ctx.drawImage(this.img, this.x + canvas.width, 0, 2000, 1200);
        } else {
            ctx.drawImage(this.img, this.x - this.img.width, 0, 2000, 1200);
        }
    },
};