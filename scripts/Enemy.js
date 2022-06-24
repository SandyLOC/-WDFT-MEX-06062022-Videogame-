class Enemy extends Character {
    constructor(x, y, sizex, sizey, ctx, image, name) {
        super(x, y, sizex, sizey, ctx, image);
        this.name = name;
        this.nets = [];
    }
    addNet() {
    /*-----------------------------Set random release of the nets----------------------*/
            const randomNum = randomNumbers(20);
            if (randomNum.random % 3 === 0) {
                const net = new Enemy(this.x, this.y + 200, 100, 100, ctx, netImage, this.name);
                console.log(net);
                this.nets.push(net);
            }
    }
}

/*-------------------------------Enemies images--------------------------------*/
const ship = new Image();
ship.src = "images/ship.png";

const toxicSpill = new Image();
toxicSpill.src = "images/oil.png";

const netImage = new Image();
netImage.src = "images/net.png";

/*-------------------------------Random creation of enemies--------------------------------*/
const enemies = [];
let nets = [];
let idIntervalNet = 0;
const enemyObj = {
    sizex: 0,
    sizey: 0,
    enemyType: ship,
    name: 0,

}
let identifier;
function createEnemies() {
    const randomNum = randomNumbers(40, 1000, 280);
    if (randomNum.random % 2 === 0) {
        enemyObj.enemyType = ship;
        identifier += 1;
        x = 1800;
        y = 200;
        enemyObj.sizex = 300;
        enemyObj.sizey = 250;
    }
    if (randomNum.random % 3 === 0) {
        enemyObj.enemyType = toxicSpill;
        identifier = false;
        x = 1800;
        y = randomNum.posY;
        enemyObj.sizex = 200;
        enemyObj.sizey = 200;
    }
        const enemy = new Enemy(x, y, enemyObj.sizex, enemyObj.sizey, ctx, enemyObj.enemyType, identifier);
        if (enemyObj.enemyType === ship) {
            idIntervalNet = setInterval(() => {
                enemy.addNet();
            }, 3000);

    }
    enemies.push(enemy);

}

/*-------------------------------Drawing enemies--------------------------------*/

function callEnemies() {
    console.log(enemies)
    enemies.forEach((enemy, index) => {
        enemy.x -= 2;
        enemy.draw();

        if (collision(orca, enemy , 180)) {
            orca.getDamage(20);
            orca.sink++;

            enemies.splice(index, 1);
        } else if (enemy.y > canvasHeight || enemy.x < -300) {
            enemies.splice(index, 1);
        }
        enemy.nets.forEach((net, index) => {
            net.y += 2;
            net.x -= 1;
            net.draw();

            if (collision(orca, net, 100)) {
                orca.getDamage(20);
                enemy.nets.splice(index, 1);

            } else if (net.y > canvasHeight) {
                enemy.nets.splice(index, 1);
            }
        });
    });
    nets.forEach((net, index) => {
        net.y += 2;
        net.x -= 1;
        net.draw();

        if (collision(orca, net, 100)) {
            orca.getDamage(20);
            nets.splice(index, 1);

        } else if (net.y > canvasHeight) {
            nets.splice(index, 1);
        }
    });

}