//we wanna make it render based on what the board is. 

import React, {useEffect, useState} from "react";
import {GameboardFactory} from "../module/gameboard";

const GameboardView = (props) => {

    const [gameboard] = useState(GameboardFactory());

    const renderBoard = () => {
        gameboard.board.map((value) => 
            value.map((element) => <div>element</div>)
        );
    }

    //on render
    useEffect(() => {

    });

    return (
        <div>
             <ul>
                {Object.keys(gameboard.board).map(keyOuter => {
                    return Object.keys(gameboard.board[keyOuter]).map(keyInner => {
                        return (
                            <li> hi </li>
                        );
                    });
                })}
            </ul>
        </div>
    );
}

export default GameboardView;