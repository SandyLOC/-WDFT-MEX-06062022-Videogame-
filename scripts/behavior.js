/*-------------------------------Key functionalities--------------------------------*/

function keyBehavior() {

    document.addEventListener("keydown", (event) => {
        switch (event.key) {
            case "ArrowRight":
                orca.moveFront();
                this.direction = true;
                orca.img = characterOrca;
                break;
            case "ArrowLeft":
                orca.moveBack();
                this.direction = false;
                orca.img = orcaLeft;
                break;
            case "ArrowUp":
                orca.jump();
                if (this.direction === true) {
                    orca.img = orcaJumpR;
                } else {
                    orca.img = orcaJumpL;
                }
                break;
            case "ArrowDown":
                orca.goDown();
                break;
            case " ":
                if (orca.bubbles !== 0) {
                    const bubble = orca.shoot(orca.x + 250, orca.y + 75, bubbleImage);
                    bubbles.push(bubble);
                    orca.bubbles -= 1;
            }
                break;
        }
    })

}