
const rescueBackground = new Image();
rescueBackground.src = "images/ocean_floor_rescue.png";

const orcaHero = new Image();
orcaHero.src = "images/orca.png";
const herOrca = new Orca(120,520, 250, 150, ctx, orcaHero);

const friendOrca = new Image();
friendOrca.src = "images/orcaLeft.png";
const friend = new Orca(1550,500, 200, 110, ctx, friendOrca);

const cageClosed = new Image();
cageClosed.src = "images/cageClosed.png";
const cage = new Cage(1350,200, 500, 950, cageClosed, ctx);

const cageOpen = new Image();
cageOpen.src = "images/cageOpen.png";
const cageOp = new Cage(1120,200, 730, 950, cageOpen, ctx);

function screenRescue() {

    updateRescueScenario();
    keyBehavior();
}

function updateRescueScenario() {
    ctx.clearRect(0, 0, 2000, 1200);
    backgroundImage.draw(rescueBackground);

    herOrca.draw();
    friend.draw();
    cage.draw();

    rescueData(orca.x, orca.y);

    //idFrame = requestAnimationFrame(updateRescueScenario);
    setTimeout(() => {
        showRescue();
    }, 4000);
    
}

function showRescue() {
    ctx.clearRect(0, 0, 2000, 1200);
    backgroundImage.draw(rescueBackground);
    herOrca.draw();
    friend.draw();
    cage.draw();
    cageOp.draw();
    ctx.font = "bold 60px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Whaly is free now, thanks to you!", 110, 870);
}

function rescueData(x, y, b) {
    ctx.font = "bold 60px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("YOU WON!!!", 140, 870);
    ctx.font = "28px Arial";
    ctx.fillText(`X: ${x},Y: ${y}`, 1820,40);
}