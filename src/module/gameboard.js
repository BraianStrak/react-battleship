const ShipFactory = require("./ship");

const GameboardFactory = () => {  
    let shotsX = [];
    let shotsY = []; 
    let missedShotsX = [];
    let missedShotsY = [];
    let shipOriginsX = [];
    let shipOriginsY = [];
    let ships = [];

    //board is null if empty, and a number if a ship is on it. 
    let board = Array(10).fill(null).map(() => Array(10).fill(null));
    let missedShots = [];
    let shots = [];

    //place ships at specific co-ordinates by calling the ship factory function
    //report whether or not all ships have been sunk. 

    //places ship either horizontally or vertically at specified locations, and adds it to the array
    const placeShip = (y, x, shipLength, shipOrientation) => {
        let ship = ShipFactory(shipLength, shipOrientation);
        ships.push(ship);

        //push the origins of the ship for hit-detection use later
        shipOriginsY.push(y);
        shipOriginsX.push(x);

        //populates array with ship data
        let i = 0;
        for(i = 0 ; i < ship.length ; i++) {
            if(ship.orientation === "vertical"){
                //here ships.length-1 also corresponds to the index of the ship in the ships array
                board[y+i][x] = ships.length-1;
            } else {
                board[y][x+i] = ships.length-1;
            }
        }
    }
    
    //takes co-ordinates, determines whether it hit a ship, sends hit function if it did. If not it records co-ords of the missed shot. 
    const receiveAttack = (y, x) => {

        shotsX.push(x);
        shotsY.push(y);
        shots.push([y, x]);

        //if that part does not contain a ship
        if(board[y][x] == null){
            //add that co-ordinate to missedshots
            missedShotsY.push(y);
            missedShotsX.push(x);
            missedShots.push([y, x]);
        } else {
            //based on where the ship originates 
            let shipNumber = board[y][x];

            if(ships[shipNumber].orientation === "vertical"){
                //find the origin index of the ship, then find the difference between the origin and hitpoint, use that information to hit the ship. 
                let hitVector = y - shipOriginsY[shipNumber]
                ships[shipNumber].hit(hitVector);
            } else {
                //find the origin index of the ship
                let hitVector = x - shipOriginsX[shipNumber]
                ships[shipNumber].hit(hitVector);
            }
            
        }
    }

    const isAllSunk = () => {
        if(ships.length > 0){
            let i = 0;

            for(i = 0; i<ships.length; i++){
                if(ships[i].isSunk === false){
                    return false;
                }
            }

            return true;
        }
    }

    return {board, shots, shotsX, shotsY, missedShots, missedShotsX, missedShotsY, ships, placeShip, receiveAttack, isAllSunk}
}

export {GameboardFactory};