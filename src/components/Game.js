import React, {useState, useEffect} from 'react';
import Board from './Board'
import {calculate} from '../helpers'



const Game = () => {
    const style = {
        display: "flex",
        alignItems: "center",
        justifyContent:'center'
    }
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
        if (newBoard[i] == null && winner == 0) {
            newBoard[i] =  x ? 'X' : 'O'
            setMove(i)
            setBoard(newBoard)
            setXIsNext(!x)
        }
        
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
                {instruction()}

                <button onClick={handleBoardSize}>New Game</button>
                <form onSubmit={handleBoardSize}>
                    <label>Board Size: </label>
                    <select
                        value = {dimension}
                        onChange={handleInput}
                        name="boardSize"
                    >
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
            //We should alert something and stop any board actions
            //Then we would allow user to restart the game

            //Also cross the winning positions in RED
            return (<div>
                <p>{`${winner} is the winner`}</p>
                <p>Start a new game</p>
            </div>)
        }
        return xIsNext ? (<p>"X is next"</p>) : (<p>"O is next"</p>)
    }
    return (
        <div style = {style}>
            <Board squares={board} onClick={handleClick}/>
            {menu()}
        </div>
        
    )

}

export default Game;
