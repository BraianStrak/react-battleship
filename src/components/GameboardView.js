//we wanna make it render based on what the board is. 

import React, {useEffect, useState} from "react";
import {GameboardFactory} from "../module/gameboard";

const GameboardView = (props) => {


    const renderBoard = () => {
        let gameboard = GameboardFactory();

        return gameboard.board.map((line) => 
            line.map((element) => <div>element</div>
        ));
    }

    //on render
    useEffect(() => {

    });

    return (
        <div>
            {renderBoard()}
        </div>
    );
}

export default GameboardView;