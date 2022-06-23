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
    return Array.from({length: (hero.x + 250) - (hero.x - 1)}, (n, i) => i + (hero.x)).includes(enemy.x + 10) && (Array.from({length: (hero.y + 150) - (hero.y - 1)}, (n, i) => i + (hero.y)).includes(enemy.y + (sizeY/2)))
 }