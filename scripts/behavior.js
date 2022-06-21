function configureBehavior() {

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
                orca.img = characterOrcaLeft;
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
        }
    })

}