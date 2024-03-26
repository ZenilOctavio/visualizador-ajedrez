async function main(){
    const board = createBoard()
    const matchesDictionary = {}
    nameColumnsAndRows(board)
    placePieces(board)
    await showOptions(matchesDictionary)
    console.log(matchesDictionary)
    
}

main()