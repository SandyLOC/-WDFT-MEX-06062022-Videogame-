class Bubble {
    constructor(x, y, image, ctx) {
        this.x = x;
        this.y = y;
        this.img = image;
        this.ctx = ctx;
    }

    draw() {
        this.ctx.drawImage(this.img, this.x + 100, this.y, 60, 60);
    }
}
/*-------------------------------Bubble images--------------------------------*/
const bubbleImage = new Image();
bubbleImage.src = "../images/bubbles.gif";

const bubbles = [];

function shootBubbles() {
    bubbles.forEach((bubble, indexBubble) => {
        bubble.x += 2;
        bubble.draw();

        enemies.forEach((enemy, indexEnemy) => {
            if (collision(enemy, bubble, 60)) {
                enemies.splice(indexEnemy, 1);
                bubbles.splice(indexBubble, 1);
                if (enemy.name  !== false) {
                orca.sink++;
                }
                if (orca.sink >= 5) {
                    const winScreen = document.querySelector(".win-game");
                        winScreen.classList.remove("displayNo");
                        canvas.classList.add("displayNo");
                }
            }
        })
    });
}