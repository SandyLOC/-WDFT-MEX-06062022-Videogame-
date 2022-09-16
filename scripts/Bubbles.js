class Bubble {
    constructor(x, y, image, ctx) {
        this.x = x;
        this.y = y;
        this.img = image;
        this.ctx = ctx;
    }

    draw() {
        this.ctx.drawImage(this.img, this.x + 60, this.y, 36, 36);
    }
}
/*-------------------------------Bubble images--------------------------------*/
const bubbleImage = new Image();
bubbleImage.src = "images/bubbles.gif";

const bubbles = [];
let hits = 0;

function shootBubbles() {

    bubbles.forEach((bubble, indexBubble) => {
        bubble.x += 4;
        bubble.draw();

        enemies.forEach((enemy, indexEnemy) => {
        //This segment allows nets to continue path when a bubble sinks a boat.
            if (collision(enemy, bubble, 36)) {
                enemy.nets.forEach((net) => {
                nets.push(net)
                });

                enemies.splice(indexEnemy, 1);
                
                bubbles.splice(indexBubble, 1);
                
                if (enemy.name  !== false) {
                orca.sink++;
                }

            }
        })

    });

}