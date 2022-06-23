//const data = require("./data.js");
class Enemy extends Character {
    constructor(x, y, sizex, sizey, ctx, image, name) {
        super(x, y, sizex, sizey, ctx, image);
        this.name = name;
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
const nets = [];
const fatherShip = [];
const enemyObj = {
    sizex: 0,
    sizey: 0,
    enemyType: ship,
    name: 0
}
let identifier;
function createEnemies() {
    const randomNum = randomNumbers(40, 1000, 280);
    if (randomNum.random % 3 === 0) {
        enemyObj.enemyType = ship;
        identifier += 1;
        x = 1800;
        y = 200;
        enemyObj.sizex = 300;
        enemyObj.sizey = 250;
    }
    if (randomNum.random % 2 === 0) {
        enemyObj.enemyType = toxicSpill;
        identifier = false;
        x = 1800;
        y = randomNum.posY;
        enemyObj.sizex = 200;
        enemyObj.sizey = 200;
    }
        const enemy = new Enemy(x, y, enemyObj.sizex, enemyObj.sizey, ctx, enemyObj.enemyType, identifier);
        enemies.push(enemy);
        //console.log(enemy.name);
    /*-----------------------------Set random release of the nets----------------------*/
        if (enemyObj.enemyType === ship) {

            setInterval(() => {
            const randomNum = randomNumbers(20);
            if (randomNum.random % 3 === 0) {
                const net = new Enemy(enemy.x, enemy.y + 200, 100, 100, ctx, netImage);
                nets.push(net);
            }
        }, 3000);

        }
}

/*-------------------------------Drawing enemies--------------------------------*/

function callEnemies() {
    enemies.forEach((enemy, index) => {
        enemy.x -= 2;
        enemy.draw();

        if (collision(orca, enemy , 180)) {
            orca.getDamage(20);
            orca.sink++;
            enemies.splice(index, 1);
        } else if (enemy.y > canvasHeight || enemy.x > canvasWidth) {
            enemies.splice(index, 1);
        }

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