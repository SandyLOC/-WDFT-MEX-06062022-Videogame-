class Fish extends Character {
    constructor(x, y, sizex, sizey, ctx, image) {
        super(x, y, sizex, sizey, ctx, image);
    }
}

/*-------------------------------Fish images--------------------------------*/
const fishBalloon = new Image();
fishBalloon.src = "images/balloonFish.png";

const fishTuna = new Image();
fishTuna.src = "images/tuna.png";
/*-------------------------------Random creation of fish--------------------------------*/
const fishes = [];

const fishObj = {
    fishx: 36,
    fishy: 36,
    fishType: fishBalloon,
    fishPower: 0,
    balloon: false
}

function createFish() {

    const randomNum = randomNumbers(22, 600, 180);

    let x = 1140;

    if (fishObj.balloon === false) {
        fishObj.fishx = 36;
        fishObj.fishy = 36;
        fishObj.fishType = fishBalloon;
        fishObj.fishPower = 2;
        fishObj.balloon = true;
    } else {
        fishObj.fishx = 42;
        fishObj.fishy = 30;
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
    if (collision(orca, fish, 36)) {
        orca.getBubbles(fishObj.fishPower);
        fishes.splice(index, 1);
    }

});

}