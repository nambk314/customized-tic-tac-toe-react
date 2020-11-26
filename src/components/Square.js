import React from 'react';

const style = {
    border: '4px solid darkblue',
    backgroundColor: 'white',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
}

const Square = ({value, onClick}) => {
    return (
        <button style = {style} onClick = {onClick}> {value} </button>
    )

}

export default Square;
