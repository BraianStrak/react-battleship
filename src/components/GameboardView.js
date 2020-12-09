//we wanna make it render based on what the board is. 

import React, {useEffect, useState} from "react";
import {GameboardFactory} from "../module/gameboard";

const GameboardView = (props) => {

    const [gameboard] = useState(GameboardFactory());

    //on render
    useEffect(() => {

    });

    return (
        <div className="gameboard align-self-center">
            {Object.keys(gameboard.board).map(keyOuter => {
                return Object.keys(gameboard.board[keyOuter]).map((keyInner, counter) => {
                    return (
                        <div className = "gameboard-element"> {counter} </div>
                    );
                });
            })}
        </div>
    );
}

export default GameboardView;