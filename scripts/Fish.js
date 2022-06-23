class Fish extends Character {
    constructor(x, y, sizex, sizey, ctx, image) {
        super(x, y, sizex, sizey, ctx, image);
    }
}

/*-------------------------------Fish images--------------------------------*/
const fishBalloon = new Image();
fishBalloon.src = "../images/balloonFish.png";

const fishTuna = new Image();
fishTuna.src = "../images/tuna.png";
/*-------------------------------Random creation of fish--------------------------------*/
const fishes = [];

const fishObj = {
    fishx: 60,
    fishy: 60,
    fishType: fishBalloon,
    fishPower: 0,
    balloon: false
}

function createFish() {

    const randomNum = randomNumbers(22, 1000, 300);

    let x = 1900;

    if (fishObj.balloon === false) {
        fishObj.fishx = 60;
        fishObj.fishy = 60;
        fishObj.fishType = fishBalloon;
        fishObj.fishPower = 2;
        fishObj.balloon = true;
    } else {
        fishObj.fishx = 70;
        fishObj.fishy = 50;
        fishObj.fishType = fishTuna;
        fishObj.fishPower = 1;
        fishObj.balloon = false;
    }
        const fish = new Fish(x, randomNum.posY, fishObj.fishx, fishObj.fishy, ctx, fishObj.fishType);
        fishes.push(fish);
}

/*-------------------------------Drawing Fish--------------------------------*/

function callFish() {
fishes.forEach((fish, index) => {
    fish.x -= 4;
    fish.draw();
    if (collision(orca, fish, 60)) {
        orca.getBubbles(fishObj.fishPower);
        fishes.splice(index, 1);
    }

});

}