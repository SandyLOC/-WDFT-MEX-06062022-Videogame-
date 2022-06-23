
const rescueBackground = new Image();
rescueBackground.src = "images/ocean_floor_rescue.png";

const friendOrca = new Image();
friendOrca.src = "images/orcaLeft.png";

const cageClosed = new Image();
cageClosed.src = "images/cageClosed.png";

const friend = new Orca(1550,500, 200, 110, ctx, friendOrca);
const cage = new Orca(1350,200, 500, 950, ctx, cageClosed);

function screenRescue() {

    updateRescueScenario();
    keyBehavior();

}

function updateRescueScenario() {
    ctx.clearRect(0, 0, 2000, 1200);

    backgroundImage.draw(rescueBackground);

    orca.draw();
    friend.draw();
    cage.draw()

    shootBubbles();

    rescueData(orca.x, orca.y, orca.bubbles);
    idFrame = requestAnimationFrame(updateRescueScenario);
}

function rescueData(x, y, b) {
    ctx.font = "50px Arial";
    ctx.fillText("Save your friend using bubbles", 700, 60);
    ctx.font = "28px Arial";
    ctx.fillText(`Remaining Bubbles: ${b}`, 30, 40);
    ctx.font = "28px Arial";
    ctx.fillText(`X: ${x},Y: ${y}`, 1820,40);
}