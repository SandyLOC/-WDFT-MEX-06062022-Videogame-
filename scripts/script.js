/*-------------------------------Canvas variable--------------------------------*/
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

/*-------------------------------Orca creation--------------------------------*/
const characterOrca = new Image();
characterOrca.src = "../images/orca.png";
const orca = new Orca(10,300, 250, 150, ctx, characterOrca);

const orcaLeft = new Image();
orcaLeft.src = "../images/orcaLeft.png";

const orcaJumpR = new Image();
orcaJumpR.src = "../images/orcaJumpR.png";
/*-------------------------------Frame ID variable declaration--------------------------------*/
let idFrame;
let idIntervalEnemies;
let idIntervalFish;

/*-------------------------------Random generator function--------------------------------*/
function randomNumbers(timer, endPosition, initPosition) {
    const randomNum = Math.floor(Math.random() * timer);
    const randPositionY = Math.floor(Math.random() * (endPosition - initPosition) + initPosition);
    return {
        random: randomNum,
        posY: randPositionY
    }
}

/*-------------------------------Start button behavior--------------------------------*/
function startGame() {
    const btnStart = document.querySelectorAll(".intro");
    btnStart.forEach(element => element.classList.add("displayNo"));
    canvas.classList.remove("displayNo");

    updateScenario();
    keyBehavior();

    /*-------------Set how often the function to create enemies will be called--------*/
    idIntervalEnemies = setInterval(() => {
        createEnemies();
    }, 5000);
    idIntervalFish = setInterval(() => {
        createFish();
    }, 7000);
}
/*-------------------------------Scenario update every frame--------------------------------*/
function updateScenario() {
    ctx.clearRect(0, 0, 2000, 1200);
    backgroundImage.draw();
    backgroundImage.move();

    /*------------------Draw the orca and the enemies---------------------*/
    orca.draw();

    callEnemies();
    callFish();
    shootBubbles();

    showData(orca.life, orca.x, orca.y, orca.sink, orca.bubbles);
    idFrame = requestAnimationFrame(updateScenario);

    if (!orca.isAlive()) {
        cancelAnimationFrame(idFrame);
        const endScreen = document.querySelector(".end-game");
        clearInterval(idIntervalEnemies);
        clearInterval(idIntervalFish);
        setTimeout(() => {
            endScreen.classList.remove("displayNo");
            canvas.classList.add("displayNo");
        }, 3000);
    }
}

/*-------------------------------Data text--------------------------------*/
function showData(life, x, y, k, b) {
    ctx.font = "40px Arial";
    ctx.fillText(life, 1000, 40);
    ctx.font = "22px Arial";
    ctx.fillText(`Remaining Bubbles: ${b}`, 30, 35);
    ctx.font = "22px Arial";
    ctx.fillText(`Boats sunken: ${k}`, 30, 60);
    ctx.font = "22px Arial";
    ctx.fillText(`X: ${x},Y: ${y}`, 1850,35);
}

