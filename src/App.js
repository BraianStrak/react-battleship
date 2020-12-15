import GameboardView from "./components/GameboardView"
import GameFactory from "./module/game"
import "./stylesheets/styles.css"

import {useState, useEffect} from "react";
import { GameboardFactory } from "./module/gameboard";

function App() {
  const [game] = useState(GameFactory());

  //pass the game thing as a prop to gameboard

  return (
    <div className="container-fluid">
      <h1 className = "text-center">BATTLESHIP</h1>
      <div className="row">
        <div className="col">
          <h2 className = "text-center">PLAYER</h2>
          <div className="row justify-content-center">
            <GameboardView gameboard = {game.playerBoard}/>
          </div>
        </div>

        <div className="col">
          <h2 className = "text-center">AI</h2>
          <div className="row justify-content-center">
            <GameboardView gameboard = {game.aiBoard}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
