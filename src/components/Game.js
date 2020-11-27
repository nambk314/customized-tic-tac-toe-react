import React, {useState} from 'react';
import Board from './Board'




const Game = () => {
    const [dimension, setDimension] = useState(3)
    const [board, setBoard] = useState(Array(dimension*dimension).fill(null))
    const [xIsNext, setXIsNext] = useState(true)

    const handleClick = (i) => {
        let newBoard = [...board]
        let x = xIsNext
        newBoard[i] =  x ? 'X' : 'O'
        setBoard(newBoard)
        setXIsNext(!x)
    }

    const handleInput = (event) => {
        event.preventDefault()
        setDimension(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setBoard(Array(dimension*dimension).fill(null))
    }

    //Dimension may be should be a drop down list
    const menu = () =>  {
        return (
            <div>
                <button onClick={handleSubmit}>Reset</button>
                <h2 style = {{margin: '4px 4px'}}>Choose dimension</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        type = 'text'
                        value = {dimension}
                        name = 'dimension'
                        placeholder = 'Enter dimension'
                        onChange = {handleInput}
                    >
                    </input>
                    <button>Change</button>
                </form>
            </div>
        )
    }
    return (
        <div>
            <Board dimension={dimension} squares={board} onClick={handleClick}/>
            {menu()}
        </div>
        
    )

}

export default Game;
