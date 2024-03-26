function createBoard(){
    const table = document.createElement('table')
    const tbody = document.createElement('tbody')

    let currentRow;
    for (let rows = 10; rows > 0; rows--){
        currentRow = document.createElement('tr')
        for (let cells = 10; cells > 0; cells--){
            currentRow.appendChild(document.createElement('td'))
        }
        tbody.appendChild(currentRow)
    }
    table.appendChild(tbody)
    document.querySelector('body').appendChild(document.createElement('main').appendChild(table))
    return table
}

function nameColumnsAndRows(board){
    nameColumns(board)
    nameRows(board)
}

/**
 * 
 * @param {HTMLTableElement} board 
 */
function nameRows(board){
    let rows = [...board.children[0].children]
    console.log(rows)

    rows.forEach( (row, rowIndex) => {
        if (row.rowIndex == 0 || row.rowIndex == 9) return

        let rowName = 9 - rowIndex
        row.children[0].innerHTML = rowName
        row.children[row.children.length - 1].innerHTML = rowName 

        const cells = [...row.children]
        cells.forEach(cell => {
            let columnIndex = cell.cellIndex
            if (columnIndex == 0 || columnIndex == 9) return
            cell.classList.add(`r${rowName}`)
        })
    })
    
}

/**
 * 
 * @param {HTMLTableElement} board 
 */
function nameColumns(board){
    let rows = [...board.children[0].children]

    var start = 'A'.charCodeAt()
    
    rows.forEach((row, rowIndex) => {
        
        let cells = [...row.children]

        if (rowIndex == 0 || rowIndex == 9){
            cells.forEach(cell => {
                let columnIndex = cell.cellIndex

                let columnName = String.fromCharCode(start + columnIndex - 1)            
                if (columnIndex == 0 || columnIndex == cells.length-1) return
                cell.innerHTML = columnName

            })
            return
        }
        cells.forEach(cell => {
            let columnIndex = cell.cellIndex

            if (columnIndex == 0 || columnIndex ==9) return

            let columnName = String.fromCharCode(start + columnIndex - 1)
            cell.classList.add(`c${columnName}`)  
        })


    })

}

/**
 * 
 * @param {HTMLTableCellElement} cell 
 * @param {String} symbol 
 * @param {Boolean} clipped 
 * @returns 
 */
function createPieceElement(cell, symbol, clipped){
    let piece = document.createElement('span')
    console.log(piece)
    if (clipped)
        piece.classList.add('white')
    piece.innerHTML = symbol
    cell.appendChild(piece)

    return piece
}

/**
 * 
 * @param {HTMLTableElement} board 
 */
function placePieces(board){
    let rows = [...board.children[0].children]

    let cells
    rows.forEach((row, rowIndex) => {
        if ((rowIndex > 2 && rowIndex < 7) || rowIndex == 0 || rowIndex == 9) return
        cells = [...row.children]
        
        cells.forEach((cell) => {
            let columnIndex = cell.cellIndex
            if (columnIndex == 0 || columnIndex == 9) return
            
            if (rowIndex == 7)
                createPieceElement(cell, BLACK_PAWN_SYMBOL)
            

            if (rowIndex == 2)
                createPieceElement(cell, WHITE_PAWN_SYMBOL, true)
            

            if ((rowIndex == 1 && (columnIndex == 1 || columnIndex == 8)))
                createPieceElement(cell, WHITE_TOWER_SYMBOL, true)
            

            if ((rowIndex == 1 && (columnIndex == 2 || columnIndex == 7)))
                createPieceElement(cell, WHITE_KNIGHT_SYMBOL, true)
            

            if ((rowIndex == 1 && (columnIndex == 3 || columnIndex == 6)))
                createPieceElement(cell, WHITE_BISHOP_SYMBOL, true)
            

            if (rowIndex == 1 && columnIndex == 5 )
                createPieceElement(cell, WHITE_QUEEN_SYMBOL, true)
            

            if (rowIndex == 1 && columnIndex == 4 )
                createPieceElement(cell, WHITE_KING_SYMBOL, true)
            

            if ((rowIndex == 8 && (columnIndex == 1 || columnIndex == 8)))
                createPieceElement(cell, BLACK_TOWER_SYMBOL)
            

            if ((rowIndex == 8 && (columnIndex == 2 || columnIndex == 7)))
                createPieceElement(cell, BLACK_KNIGHT_SYMBOL)
            

            if ((rowIndex == 8 && (columnIndex == 3 || columnIndex == 6)))
                createPieceElement(cell, BLACK_BISHOP_SYMBOL)
            

            if (rowIndex == 8 && columnIndex == 5 )
                createPieceElement(cell, BLACK_QUEEN_SYMBOL)
            

            if (rowIndex == 8 && columnIndex == 4 )
                createPieceElement(cell, BLACK_KING_SYMBOL)
            
        })
        
    })
}
