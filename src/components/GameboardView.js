//we wanna make it render based on what the board is. 

import React, {useEffect, useState} from "react";
import {GameboardFactory} from "../module/gameboard";

const GameboardView = (props) => {
    
    //on render
    useEffect(() => {

    });

    //render a board
    //gotta now render the appropriate stuff depending on contents of board (just give it a class)
    const renderBoard = (gameboard) => {
        return Object.keys(gameboard.board).map((keyOuter, outerCounter) => {
            return Object.keys(gameboard.board[keyOuter]).map((keyInner, innerCounter) => {
                return (

                    //<button className = "gameboard-element"
                    <button className = {determineTileClassName(gameboard.board[outerCounter][innerCounter], keyOuter, keyInner)}
                     id={outerCounter.toString() + innerCounter.toString()} 
                     key={outerCounter.toString() + innerCounter.toString()}
                     onClick={(e) => handleClick(e.target.id)} >
                    </button>
                );
            });
        })
    }

    //determine which colour tile to render based on state
    const determineTileClassName = (tileContents, tileY, tileX) => {
        const shipNumber = props.gameboard.board[tileY][tileX];

        //if its empty or has not been shot
        if(tileContents === null || !(props.gameboard.shotsX.includes(tileX) && props.gameboard.shotsX.includes(tileY)) ) {
            return "gameboard-element"

        //if it has been shot and not missed    
        } else if ( (props.gameboard.shotsX.includes(tileX) && props.gameboard.shotsX.includes(tileY)) 
            && !(props.gameboard.missedShotsX.includes(tileX) && props.gameboard.missedShotsX.includes(tileY)) ) {
            
            return "destroyed-gameboard-element";
        //if it has been shot and missed
        } else if ( (props.gameboard.shotsX.includes(tileX) && props.gameboard.shotsX.includes(tileY)) 
            && (props.gameboard.missedShotsX.includes(tileX) && props.gameboard.missedShotsX.includes(tileY)) )  {
            
            return "missed-gameboard-element";
        }
    }

    

    const handleClick = (e) => {
        console.log(e);

        //handle the turn here based on ID
        //check if ship, if ship, change tiles, add to shots accordingly 
        //might be good to have this method in the parent tbh
    }

    return (
        <div className="gameboard align-self-center">
            { 
                renderBoard(props.gameboard)
            }
        </div>
    );
}

export default GameboardView;