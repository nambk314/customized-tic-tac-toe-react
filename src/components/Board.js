import React from 'react';
import Square from './Square'



const Board = ({dimension, squares, onClick}) => {
    const style = {
        width: '250px',
        height: '250px',
        margin: '10px 10px',
        display: 'grid',
        gridTemplate: `repeat(${dimension}, 1fr) / repeat(${dimension}, 1fr)`
    }

    return (
        <div style = {style}>
            {squares.map((square, i) => ( 
                <Square key={i} value = {i} onClick={onClick}/>
            ))}
        </div>
    )

}

export default Board;
