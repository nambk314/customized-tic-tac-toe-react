import React from 'react';
import Square from './Square'



const Board = ({squares, onClick}) => {
    const dimension = Math.floor(Math.sqrt(squares.length))
    const width = dimension*100
    const style = {
        width: `${width}px`,
        height: `${width}px`,
        margin: '10px 10px',
        display: 'grid',
        gridTemplate: `repeat(${dimension}, 1fr) / repeat(${dimension}, 1fr)`
    }

    return (
        <div style = {style}>
            {squares.map((square, i) => ( 
                <Square key={i} value = {square} onClick={() => onClick(i)}/>
            ))}
        </div>
    )

}

export default Board;
