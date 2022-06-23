/*-------------------------------Canvas variable--------------------------------*/
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

/*-------------------------------Background variable--------------------------------*/
const background = new Image();
background.src = "../images/scenario.png";
/*-------------------------------Orca creation--------------------------------*/
const characterOrca = new Image();
characterOrca.src = "../images/orca.png";
const orca = new Orca(10,300, 250, 150, ctx, characterOrca);

//draw() {
//    ctx.drawImage(img, 0, 0, 500, 700);
//    if (this.x >= 450) {
//      this.x = 450;
//    } else if (this.x <= 0) {
//      this.x = 0;
//    } else { 
//      this.x = this.x;
//    }
//      ctx.drawImage(this.car, this.x, 560, 50, 100);
//      this.obstacles();
//  }

const orcaLeft = new Image();
orcaLeft.src = "../images/orcaLeft.png";

const orcaJumpR = new Image();
orcaJumpR.src = "../images/orcaJumpR.png";

const orcaJumpL = new Image();
orcaJumpL.src = "../images/orcaJumpL.png";
/*-------------------------------Frame ID variable declaration--------------------------------*/
let idFrame;
let idIntervalEnemies;
let idIntervalFish;
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
        cancelAnimationFrame(idFrame);
        const endScreen = document.querySelector(".end-game");
        clearInterval(idIntervalEnemies);
        clearInterval(idIntervalFish);
        setTimeout(() => {
        if (orca.sink < 5) {
           endScreen.classList.remove("displayNo");
        }
            canvas.classList.add("displayNo");
        //screenRescue();
        }, 3000);
    }
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

