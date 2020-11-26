import React, {useState} from 'react';
import Board from './Board'




const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)




    const handleClick = (i) => {
        let newBoard = [...board]
        let x = xIsNext
        newBoard[i] =  x ? 'X' : 'O'
        setBoard(newBoard)
        setXIsNext(!x)
    }
    return (
        <Board dimension={Math.floor(Math.sqrt(board.length))} squares={board} onClick={handleClick}/>
    )

}

export default Game;
