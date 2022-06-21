class Fish extends Character {
    constructor(x, y, sizex, sizey, ctx, image) {
        super(x, y, sizex, sizey, ctx, image);
        this.sizex = fishx;
        this.fishy = 0;
    }
}

/*-------------------------------Fish images--------------------------------*/
const fishImage = new Image();
fishImage.src = "../images/balloonFish.png";

/*-------------------------------Random creation of enemies--------------------------------*/
const fishes = [];

function createFish() {
    const randomNum = randomNumbers(22, 1000, 300);
    if (randomNum.random % 4 === 0) {
        x = 1900;
        fishx = 90;
        fishy = 90;
    }
        const fish = new Fish(x, randomNum.posY, fishx, fishy, ctx, fishImage);
        fishes.push(fish);

}

/*-------------------------------Drawing Fish--------------------------------*/

function callFish() {
fishes.forEach((fish, index) => {
    fish.x -= 4;
    fish.draw();
    if (fish.x === orca.x + 100 && (fish.y === orca.y || fish.y === orca.y + 100 || fish.y === orca.y - 100)) {
        orca.getBubbles(2);
        fishes.splice(index, 1);
    }

});

}