const rescueBackground = new Image();
rescueBackground.src = "images/ocean_floor_rescue.png";

const orcaHero = new Image();
orcaHero.src = "images/orca.png";
const herOrca = new Orca(72,312, 150, 90, ctx, orcaHero);

const friendOrca = new Image();
friendOrca.src = "images/orcaLeft.png";
const friend = new Orca(930,300, 120, 66, ctx, friendOrca);

const cageClosed = new Image();
cageClosed.src = "images/cageClosed.png";
const cage = new Cage(810,120, 300, 570, cageClosed, ctx);

const cageOpen = new Image();
cageOpen.src = "images/cageOpen.png";
const cageOp = new Cage(672,120, 438, 570, cageOpen, ctx);

let rescueFrame;
let idTimeout;

function screenRescue() {

    updateRescueScenario();
    keyBehavior();
}

function updateRescueScenario() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    backgroundImage.draw(rescueBackground);
    herOrca.draw();
    friend.draw();
    cage.draw();

    rescueData(orca.x, orca.y);
    idTimeout = setTimeout(() => {
        showRescue();
    }, 3000);

}

function showRescue() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    backgroundImage.draw(rescueBackground);
    herOrca.draw();
    friend.draw();
    cageOp.draw();

    ctx.font = "bold 40px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Whaly is free now, thanks to you!", 66, 522);

    if (friend.y < 360) friend.y += 2;
    if (friend.x > 360) friend.x -= 4;

    if (friend.x <= 360){
        cancelAnimationFrame(rescueFrame);
        clearTimeout(idTimeout)
        restartButton.classList.remove("displayNo");
    }

    rescueFrame = requestAnimationFrame(showRescue);
}

function rescueData(x, y, b) {
    ctx.font = "bold 40px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("YOU WON!!!", 84, 522);
}
/*-------------------------------Restart Game--------------------------------*/
function restart() {
    window.location.reload(true);
}