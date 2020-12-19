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
                    <button className = {determineTileClassName(gameboard.board[outerCounter][innerCounter], outerCounter, innerCounter)}
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

        //check co-ordinate pairs to determine what type of tile to return 
        let i = 0;
        for(i=0;i<props.gameboard.shots.length;i++){
            try {
                if( (props.gameboard.shots[i][0] === tileY && props.gameboard.shots[i][1] === tileX) 
                    && !(props.gameboard.missedShots[i][0] === tileY && props.gameboard.missedShots[i][1] === tileX)){
                    return "destroyed-gameboard-element";
                } else if (props.gameboard.missedShots[i][0] === tileY && props.gameboard.missedShots[i][1] === tileX) {
                    return "missed-gameboard-element";
                }
            } catch {}
        }
       
        //if all else fails
        return "gameboard-element";
    }

    

    const handleClick = (e) => {
        console.log(e);

        let attackPoint = e.split("");

        let yAttackPoint = parseInt(attackPoint[0]);
        let xAttackPoint = parseInt(attackPoint[1]);

        props.handleGameLoop(yAttackPoint, xAttackPoint);        

        //split up into y and x, then call handlegameloop

        //handle the turn here based on ID
        //check if ship, if ship, change tiles, add to shots accordingly 
        //might be good to have this method in the parent tbh, and just pass the onclick ID to it!!
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