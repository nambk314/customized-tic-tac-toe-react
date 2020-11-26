import React, {useState} from 'react';
import Board from './Board'




const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const handleClick = () => {
        console.log("clicked")
    }
    return (
        
        <Board dimension={Math.floor(Math.sqrt(board.length))} squares={board} onClick={handleClick}/>
    )

}

export default Game;
