const rutaPartidas = '/matches'
const archivosPartidas = [
    'partida1.txt',
    'partida2.txt',
    'partida3.txt',
    'partida4.txt',
    'partida5.txt'
]


async function getAllMatches(){
    const partidas = []

    const saveMatch = async (archivoPartida) => {
        let response = await fetch(`${rutaPartidas}/${archivoPartida}`)
        let content = await response.text()
        partidas.push(content)

    }

    for( let partida of archivosPartidas ){
        await saveMatch(partida)
    }

    return partidas
}


async function showOptions(matchesDictionary){
    const matchOptions = document.querySelector('select#match')

    const matches = await getAllMatches()
    
    matches.forEach((match, index) => {
        let newOption = document.createElement('option')
        let matchKey = `partida${index}`
        newOption.value = matchKey
        newOption.text = `Partida ${index+1}`
        
        // console.log(match)
        matchesDictionary[matchKey] = match
        matchOptions.appendChild(newOption)
    })

}