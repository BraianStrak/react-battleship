const PlayerFactory = () => {

    const getRandomNumber = (max) => {
        //get a random number between 0 and max
        return Math.floor((Math.random() * max));
    }

    const attack = (gameboard, y, x) => {
        gameboard.receiveAttack(y, x);
    }

    const makeRandomAttack = (gameboard) => {
        let xVector = 0;
        let yVector = 0;
        
        //get random numbers until you get a pair which wasn't attacked
        
        while(gameboard.shotsX.includes(xVector) && gameboard.shotsY.includes(yVector)){
            xVector = getRandomNumber(10);
            yVector = getRandomNumber(10);
        }

        gameboard.receiveAttack(yVector, xVector);
    }

    return {makeRandomAttack, attack};
}

export {PlayerFactory};