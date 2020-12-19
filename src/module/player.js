const PlayerFactory = () => {

    const getRandomNumber = (max) => {
        //get a random number between 0 and max
        return Math.floor((Math.random() * max));
    }

    const attack = (gameboard, y, x) => {
        gameboard.receiveAttack(y, x);
    }

    const makeRandomAttack = (gameboard) => {
        let xVector = getRandomNumber(10);
        let yVector = getRandomNumber(10);
        //get random numbers until you get a pair which wasn't attacked
        

        while(determineIf2DArrayIncludesValue(yVector, xVector, gameboard.shots) === true){
            xVector = getRandomNumber(10);
            yVector = getRandomNumber(10);   
        }

        gameboard.receiveAttack(yVector, xVector);
    }

    //returns true if the 2D shots array includes the values
    const determineIf2DArrayIncludesValue = (y, x, array) => {
        let i = 0;
        for(i=0;i<array.length;i++){
            if(array[i][0] === y && array[i][1] === x) {
                return true;
            }  
        }

        return false;
    }

    return {makeRandomAttack, attack};
}

export {PlayerFactory};