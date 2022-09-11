/*-------------------------------Canvas variable--------------------------------*/
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

/*-------------------------------Background variable--------------------------------*/
const background = new Image();
background.src = "images/scenario.png";
/*-------------------------------Orca creation--------------------------------*/
const characterOrca = new Image();
characterOrca.src = "images/orca.png";
const orca = new Orca(10,300, 250, 150, ctx, characterOrca);

const orcaLeft = new Image();
orcaLeft.src = "images/orcaLeft.png";

const orcaJumpR = new Image();
orcaJumpR.src = "images/orcaJumpR.png";

const orcaJumpL = new Image();
orcaJumpL.src = "images/orcaJumpL.png";
/*-------------------------------Frame ID variable declaration--------------------------------*/
let stop = false;
let idFrame;
let idIntervalEnemies;
let idIntervalFish;
let idIntervalNet;
let canvasHeight = 1200;
let canvasWidth = 2000;

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

    backgroundImage.draw(background);
    backgroundImage.move();

    /*------------------Draw the orca and the enemies---------------endScreenend-game------*/
    orca.draw();

    callEnemies();
    callFish();
    shootBubbles();

    showData(orca.life, orca.x, orca.y, orca.sink, orca.bubbles);
    idFrame = requestAnimationFrame(updateScenario);

    if (!orca.isAlive()) {

        clearIntervals();

        const endScreen = document.querySelector(".end-game");

        setTimeout(() => {
        if (orca.sink < 5) {
           endScreen.classList.remove("displayNo");
        }
            canvas.classList.add("displayNo");
        }, 3000);
    }
    if (orca.sink >= 2) {
        clearIntervals();
        stop = true;
        screenRescue();
        //const winScreen = document.querySelector(".win-game");
        //    winScreen.classList.remove("displayNo");
        //    canvas.classList.add("displayNo");
    }

}
function clearIntervals() {
    cancelAnimationFrame(idFrame);
    clearInterval(idIntervalEnemies);
    clearInterval(idIntervalFish);
    clearInterval(idIntervalNet);
}
/*-------------------------------Data text--------------------------------*/
function showData(life, x, y, k, b) {
    ctx.font = "50px Arial";
    ctx.fillText(life, 1000, 60);
    ctx.font = "28px Arial";
    ctx.fillText(`Remaining Bubbles: ${b}`, 30, 40);
    ctx.font = "28px Arial";
    ctx.fillText(`Boats sunken: ${k}`, 30, 80);
    ctx.font = "28px Arial";
    ctx.fillText(`X: ${x},Y: ${y}`, 1820,40);
}

