import GameboardFactory from ".modules/gameboard";
import PlayerFactory from ".modules/player";
import ShipFactory from ".modules/ship";

const GameFactory = () => {
    let playerBoard = GameboardFactory();
    let aiBoard = GameboardFactory();

    let humanPlayer = PlayerFactory();
    let aiPlayer = PlayerFactory();
    
    playerBoard.placeShip(1, 1, 3, "vertical");
    playerBoard.placeShip(5, 5, 2, "horizontal");

    aiBoard.placeShip(1, 2, 4, "vertical" );
    aiBoard.placeShip(6, 6, 2, "horizontal");

    //maybe make this dynamically react to changes? idk, or maybe dynamically render based on the state. 
    //so after each click it changes state of the boards and it fetches the board and renders based on their values? 
}