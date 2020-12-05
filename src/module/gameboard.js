const ShipFactory = require("./ship");

const GameboardFactory = () => {   
    let missedShotsX = [];
    let missedShotsY = [];
    let ships = [];

    //board is null if empty, and a number if a ship is on it. 
    let board = Array(10).fill(null).map(() => Array(10).fill(null));


    //place ships at specific co-ordinates by calling the ship factory function
    //report whether or not all ships have been sunk. 

    //places ship either horizontally or vertically at specified locations, and adds it to the array
    const placeShip = (y, x, shipLength, shipOrientation) => {
        let ship = ShipFactory(shipLength, shipOrientation);
        ships.push(ship);

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
        //it might be hard to send the hit function to the correct part of the ship. 
        //to get that you have to do some checking with the board, I think it should be fine. 
        //with vertical origin will be the highest point, with horizontal it will be the leftmost point. Use that to determine.

        if(board[y][x] == null){
            missedShotsY.push(y);
            missedShotsX.push(x);
        }
    }

    return {board, missedShotsX, missedShotsY, ships, placeShip, receiveAttack}
}

module.exports = GameboardFactory;