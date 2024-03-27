const matchesDictionary = {}
const board = createBoard()

async function main(){
    nameColumnsAndRows(board)
    placePieces(board)
    await showOptions(matchesDictionary)
    
}

main()