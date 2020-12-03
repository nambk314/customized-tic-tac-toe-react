import React, {useState, useEffect} from 'react';
import Board from './Board'
import {calculate} from '../helpers'



const Game = () => {
    const DEFAULT_VALUE = 3;
    const [dimension, setDimension] = useState(DEFAULT_VALUE)
    const [board, setBoard] = useState(Array(dimension*dimension).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const [win, setWin] = useState(DEFAULT_VALUE)
    const [winner, setWinner] = useState(0)
    const [curMove, setMove] = useState(null)

    useEffect(() => {
        setWinner(calculate(curMove, board, win, xIsNext))
    }, [curMove]);

    const handleClick = (i) => {
        let newBoard = [...board]
        let x = xIsNext
        newBoard[i] =  x ? 'X' : 'O'
        setMove(i)
        setBoard(newBoard)
        setXIsNext(!x)
    }

    const handleInput = (event) => {
        const { value, name } = event.target
        name === "boardSize" ? setDimension(event.target.value) : setWin(event.target.value)
    }

    const handleBoardSize = (event) => {
        event.preventDefault()
        setBoard(Array(dimension*dimension).fill(null))
        //Need to set other variable to default too
        setWinner(0)
        setMove(null)
        setXIsNext(true)
    }

    const handleWinCond = (event) => {
        event.preventDefault()
        setWin(event.target.value)
        setBoard(Array(dimension*dimension).fill(null))
        //Need to set other variable to default too
        setWinner(0)
        setMove(null)
        setXIsNext(true)

    }

    //Dimension may be should be a drop down list
    const menu = () =>  {
        return (
            <div>
                <p>{instruction()}</p>

                <button onClick={handleBoardSize}>Reset</button>
                <form onSubmit={handleBoardSize}>
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

                <label>Play to: </label>
                <select
                    value = {win}
                    onChange={handleInput}
                    name="winCond"
                >
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>

                </select>

            </div>
        )
    }

    const instruction = () => {
        console.log(winner)
        if(winner) {
            return `${winner} is the winner`
        }
        return xIsNext ? "X is next" : "O is next"
    }
    return (
        <div>
            <Board squares={board} onClick={handleClick}/>
            {menu()}
        </div>
        
    )

}

export default Game;
