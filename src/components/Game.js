import React, {useState} from 'react';
import Board from './Board'




const Game = () => {
    const DEFAULT_DIMENSION = 3;
    const [dimension, setDimension] = useState(DEFAULT_DIMENSION)
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
                    <label>Board Size: </label>
                    <select
                        value = {dimension}
                        onChange={handleInput}
                        name="boardSize"
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>

                    </select>
                    <button>Change</button>
                </form>
            </div>
        )
    }
    return (
        <div>
            <Board squares={board} onClick={handleClick}/>
            {menu()}
        </div>
        
    )

}

export default Game;
