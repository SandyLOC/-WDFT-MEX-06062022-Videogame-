const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const background = new Image();
background.src = "../images/Ocean-light.png";

const characterOrca = new Image();
characterOrca.src = "../images/orca.png";
const orca = new Orca(10,650, 150, 100, ctx, characterOrca);

let idFrame;

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

function startGame() {
    /*Start screen behavior*/
    const btnStart = document.querySelectorAll(".intro");

    btnStart.forEach(element => element.classList.add("noShow"));
    canvas.classList.remove("noShow");

    updateScenario();

}

function updateScenario() {
    ctx.clearRect(0, 0, 2000, 1200);
    backgroundImage.draw();
    backgroundImage.move();

    orca.draw();

    showData(orca.life, orca.x, orca.y, orca.sink, orca.bubbles);
    idFrame = requestAnimationFrame(updateScenario);

}

function showData(life, x, y, k, b) {
    ctx.font = "40px Arial";
    ctx.fillText(life, 1000, 40);
    ctx.font = "22px Arial";
    ctx.fillText(`Remaining Bubbles: ${b}`, 30, 35);
    ctx.font = "22px Arial";
    ctx.fillText(`Boats sunken: ${k}`, 30, 60);
    ctx.font = "22px Arial";
    ctx.fillText(`X: ${x},Y: ${y}`, 1850,35);
}


