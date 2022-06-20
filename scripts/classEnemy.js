class Enemy extends Character {
    constructor(x, y, sizex, sizey, ctx, image) {
        super(x, y, sizex, sizey, ctx, image);
    }
}

function createEnemies() {
    const random = Math.floor(Math.random() * 40);
    const randPositionY = Math.floor(Math.random() * (1000 - 200) + 200);
    let typeEnemy;
    if (random % 3 === 0) {
        typeEnemy = ship;
        x = 1800;
        y = 150
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
}