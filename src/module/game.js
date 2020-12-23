import {GameboardFactory} from "./gameboard";
import {PlayerFactory} from "./player";
import ShipFactory from "./ship";

const GameFactory = () => {

    const createPlayerBoard = () => {
        let board = GameboardFactory();
        board.placeShip(1, 1, 3, "vertical");
        board.placeShip(5, 5, 2, "horizontal");

        return board;
    }

    const createAiBoard = () => {
        let board = GameboardFactory();
        board.placeShip(2, 2, 5, "vertical");
        board.placeShip(6, 6, 3, "horizontal");

        return board;
    }

    const handleGameLoop = (y, x) => {
        aiBoard.receiveAttack(y, x);
        aiPlayer.makeRandomAttack(playerBoard);

        //also have to handle wins/losses
        if(aiBoard.isAllSunk()){
            alert("Game has finished, Player wins");
        } else if (playerBoard.isAllSunk()){
            alert("Game has finished, AI wins");
        }
    }

    let playerBoard = createPlayerBoard();
    let aiBoard = createAiBoard();

    let humanPlayer = PlayerFactory();
    let aiPlayer = PlayerFactory();



    //maybe make this dynamically react to changes? idk, or maybe dynamically render based on the state. 
    //so after each click it changes state of the boards and it fetches the board and renders based on their values? 

    return {playerBoard, aiBoard, humanPlayer, aiPlayer, handleGameLoop}
}

export default GameFactory;