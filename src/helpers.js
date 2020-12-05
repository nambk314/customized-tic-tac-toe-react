
//V: Vertical, H: Horizontal, D: diagnal
const directions = [[[1,0],[-1,0]],[[0,1],[0,-1]],[[-1,-1],[1,1]],[[-1,1],[1,-1]]]


function expand(board, row, col, direction, res, index, curPlayer) {
    for (let i = 0; i < direction.length; i++) {
        let incremental = direction[i]
        let incrementalX = incremental[0]
        let incrementalY = incremental[1]
        for (let i = row+incrementalX, j = col+incrementalY; i >= 0 && i < board.length && j >= 0 && j < board[0].length && board[i][j] === curPlayer; i+=incrementalX, j+=incrementalY) {
            res[index]++
        }
        
    }
}

//Function to check the winning condition base on the winning standard (3,4 or 5)
export function calculate(curMove, board, winCond, xIsNext) {
    //Change from 1D to 2D
    let TwoDBoard = []
    let width = Math.sqrt(board.length)
    for (let i = 0; i < width; i++) {
        let row = []
        for (let j = 0; j < width; j++) {
            row.push(board[width*i + j]);
        }
        TwoDBoard.push(row)
    }

    var coorRow = Math.floor(curMove/width)
    var coorCol = curMove%width
    let player = xIsNext ? "O" : "X"
    let res = Array(4).fill(1)
    for (let i = 0; i < directions.length; i++) {
        expand(TwoDBoard, coorRow, coorCol, directions[i], res, i, player)
    }
    
    let winner = 0;
    for (let i = 0; i < res.length; i++) {
        if (res[i] === Number(winCond)) {
            winner = player
        }
    }
    return winner
};