/*-------------------------------Random generator function--------------------------------*/
function randomNumbers(timer, endPosition, initPosition) {
    const randomNum = Math.floor(Math.random() * timer);
    const randPositionY = Math.floor(Math.random() * (endPosition - initPosition) + initPosition);
    return {
        random: randomNum,
        posY: randPositionY
    }
}

/*-------------------------------Collition using coordinates array--------------------------------*/
function collision(hero, enemy, sizeY) {
    //console.log(orca.x, orca.y, char.x, char.y);
    //console.log(Array.from({length: (orca.y + 250) - (orca.y - 1)}, (n, i) => i + (orca.y)), (char.y + 100));
    return Array.from({length: (hero.x + 250) - (hero.x - 1)}, (n, i) => i + (hero.x)).includes(enemy.x + 10) && (Array.from({length: (hero.y + 150) - (hero.y - 1)}, (n, i) => i + (hero.y)).includes(enemy.y + (sizeY/2)))
 }