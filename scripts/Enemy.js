class Enemy extends Character {
    constructor(x, y, sizex, sizey, ctx, image, name) {
        super(x, y, sizex, sizey, ctx, image);
        this.name = name;
        this.nets = [];
    }
    addNet() {
    /*-----------------------------Set random release of the nets----------------------*/
        if (stop !== true){
            const randomNum = randomNumbers(20);
            if (randomNum.random % 3 === 0) {
                const net = new Enemy(this.x, this.y + 120, 60, 60, ctx, netImage, this.name);
                this.nets.push(net);
            }
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
let enemies = [];
let nets = [];
const enemyObj = {
    sizex: 0,
    sizey: 0,
    enemyType: ship,
    name: 0,

}
let identifier;
function createEnemies() {
    const randomNum = randomNumbers(40, 600, 168);
    if (randomNum.random % 2 === 0) {
        enemyObj.enemyType = ship;
        identifier += 1;
        x = 1080;
        y = 130;
        enemyObj.sizex = 180;
        enemyObj.sizey = 150;
    }
    if (randomNum.random % 3 === 0) {
        enemyObj.enemyType = toxicSpill;
        identifier = false;
        x = 1080;
        y = randomNum.posY;
        enemyObj.sizex = 120;
        enemyObj.sizey = 120;
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
    enemies.forEach((enemy, index) => {
        enemy.x -= 2;
        enemy.draw();

        if (collision(orca, enemy , enemy.sizey)) {
            orca.getDamage(20);
            enemies.splice(index, 1);
            
        } else if (enemy.y > canvasHeight || enemy.x < -180) {
            enemies.splice(index, 1);
        }
        enemy.nets.forEach((net, index) => {
            net.y += 2;
            net.x -= 1;
            net.draw();

            if (collision(orca, net, 60)) {
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

        if (collision(orca, net, 60)) {
            orca.getDamage(20);
            nets.splice(index, 1);

        } else if (net.y > canvasHeight) {
            nets.splice(index, 1);
        }
    });

}