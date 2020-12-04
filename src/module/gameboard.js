const GameboardFactory = () => {   
    let missedShotsX = [];
    let missedShotsY = [];
    let ships = [];
    let board = Array(10).fill(null).map(() => Array(10).fill(null));


    //place ships at specific co-ordinates by calling the ship factory function
    //report whether or not all ships have been sunk. 

    //places ship either horizontally or vertically at specified locations
    const placeShip = (x, y, ship) => {
        if(ship.orientation === "vertical"){
            
        } else {

        }
    }
    
    //takes co-ordinates, determines whether it hit a ship, sends hit function if it did. If not it records co-ords of the missed shot. 
    const receiveAttack = (x, y) => {

    }

    return {missedShotsX, missedShotsY, ships}
}

module.exports = GameboardFactory;