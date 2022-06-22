//const data = require("./data.js");
class Enemy extends Character {
    constructor(x, y, sizex, sizey, ctx, image) {
        super(x, y, sizex, sizey, ctx, image);
    }
}
//Array.from({length: 20 - 10}, (f, g) => g + 10);
function collision(char, sizeY) {
    //console.log(Array.from({length: (orca.x + 240) - (orca.x - 100)}, (n, i) => i + (orca.x + 100)));
    //console.log(Array.from({length: (orca.y + 150) - (orca.y - 100)}, (n, i) => i + (orca.y + 100)));
    //console.log(orca.x, orca.y, char.x, char.y);
    //console.log(Array.from({length: (orca.y + 250) - (orca.y - 1)}, (n, i) => i + (orca.y)), (char.y + 100));
    return Array.from({length: (orca.x + 250) - (orca.x - 1)}, (n, i) => i + (orca.x)).includes(char.x + 10) && (Array.from({length: (orca.y + 150) - (orca.y - 1)}, (n, i) => i + (orca.y)).includes(char.y + (sizeY/2)))
 }
/*-------------------------------Enemies images--------------------------------*/
const ship = new Image();
ship.src = "../images/ship.png";

const toxicSpill = new Image();
toxicSpill.src = "../images/oil.png";

const netImage = new Image();
netImage.src = "../images/toxic.png";

/*-------------------------------Random creation of enemies--------------------------------*/
const enemies = [];
const nets = [];

const enemyObj = {
    sizex: 0,
    sizey: 0,
    enemyType: ship,
}

function createEnemies() {
    const randomNum = randomNumbers(40, 1000, 280);
    if (randomNum.random % 3 === 0) {
        enemyObj.enemyType = ship;
        x = 1800;
        y = 200;
        enemyObj.sizex = 300;
        enemyObj.sizey = 250;
    }
    if (randomNum.random % 2 === 0) {
        enemyObj.enemyType = toxicSpill;
        x = 1800;
        y = randomNum.posY;
        enemyObj.sizex = 200;
        enemyObj.sizey = 200;
    }
        const enemy = new Enemy(x, y, enemyObj.sizex, enemyObj.sizey, ctx, enemyObj.enemyType);
        enemies.push(enemy);

    /*-----------------------------Set random release of the nets----------------------*/
        if (enemyObj.enemyType === ship) {
            setInterval(() => {
            const randomNum = randomNumbers(20);
            if (randomNum.random % 3 === 0) {
                const net = new Enemy(enemy.x, enemy.y + 200, 100, 100, ctx, netImage);
                nets.push(net);
            }
        }, 4000);

        }
}

/*-------------------------------Drawing enemies--------------------------------*/

function callEnemies() {
enemies.forEach((enemy, index) => {
    enemy.x -= 2;
    enemy.draw();

    if (collision(enemy , 180)) {
        orca.getDamage(20);
        enemies.splice(index, 1);
    }

});
    nets.forEach((net, index) => {
        net.y += 2;
        net.x -= 1;
        net.draw();

        if (collision(net, 100)) {
            orca.getDamage(20);
            nets.splice(index, 1);
        }
    });

}