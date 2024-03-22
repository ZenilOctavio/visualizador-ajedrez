function createTable(){
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
    nameRows(board)
    nameColumns(board)
}

function nameRows(board){
    let rows = [...board.children[0].children]
    console.log(rows)

    rows.forEach( (row, index) => {
        if (row.rowIndex == 0 || row.rowIndex == 9) return

        content = 9 - index
        row.children[0].innerHTML = content
        row.children[row.children.length - 1].innerHTML = content 
    })
    
}

function nameColumns(board){
    let rows = [board.children[0].children[0], board.children[0].children[9]]

    var start = 'A'.charCodeAt()
    
    rows.forEach(row => {
        
        let cells = [...row.children]

        cells.forEach( cell => {
            if (cell.cellIndex == 0 || cell.cellIndex == cells.length-1) return
            cell.innerHTML = String.fromCharCode(start + cell.cellIndex - 1)
            
        })

    })

}
