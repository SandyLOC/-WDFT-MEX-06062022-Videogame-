class Enemy extends Character {
    constructor(x, y, sizex, sizey, ctx, image) {
        super(x, y, sizex, sizey, ctx, image);
    }
}

const ship = new Image();
ship.src = "../images/ship.png";

const toxicSpill = new Image();
toxicSpill.src = "../images/oil.png";

const netImage = new Image();
netImage.src = "../images/toxic.png";

const nets = [];

function createEnemies() {
    const random = Math.floor(Math.random() * 40);
    const randPositionY = Math.floor(Math.random() * (1000 - 280) + 280);
    let typeEnemy;
    if (random % 3 === 0) {
        typeEnemy = ship;
        x = 1800;
        y = 150;
        sizex = 300;
        sizey = 250;
    }
    if (random % 2 === 0) {
        typeEnemy = toxicSpill;
        x = 1800;
        y = randPositionY;
        sizex = 200;
        sizey = 200;
    }
        const enemy = new Enemy(x, y, sizex, sizey, ctx, typeEnemy);
        enemies.push(enemy);
    /*Set random release of the nets*/
        if (typeEnemy === ship) {
            setInterval(() => {
            const netRandom = Math.floor(Math.random() * 20);
            if (netRandom % 3 === 0) {
                const net = new Enemy(enemy.x, enemy.y + 200, 100, 100, ctx, netImage);
                nets.push(net);
            }
        }, 4000);

        }
}

function callEnemies() {
enemies.forEach((enemy, index) => {
    enemy.x -= 2;
    enemy.draw();
    if (enemy.x === orca.x + 100 && (enemy.y === orca.y || enemy.y === orca.y + 100 || enemy.y === orca.y - 100)) {
        orca.getDamage(20);
        enemies.splice(index, 1);
    }

});
    nets.forEach(net => {
        net.y += 2;
        net.x -= 1;
        net.draw();
    });

}