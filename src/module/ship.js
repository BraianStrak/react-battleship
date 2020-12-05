const ShipFactory = (length, orientation) => {    
    //initialises all positions relative to length, as false, or 'not hit'. 
    const initPositionBools = () => {
        let positions = [];
        let i = 0;
        for(i = 0; i < length; i++){positions.push(false);}
        return positions;
    };
    let positionBools = initPositionBools();

    //sets the respective position to true, or 'hit' (zero-indexed parameter)
    const hit = (position) => {
        positionBools[position] = true;
    } 

    const isSunk = () => {
        let i = 0;
        for(i=0;i<length;i++){
            //if any positions are not hit
            if(positionBools[i] === false){
                console.log("this part isn't hit: ", i+1);
                return false;
            }
        }
        return true;
    }

    return {hit, isSunk, positionBools, length, orientation}
}

module.exports = ShipFactory;